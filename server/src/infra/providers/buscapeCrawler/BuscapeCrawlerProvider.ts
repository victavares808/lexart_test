import { type Crawler } from '../../protocols';
import puppeteer, { executablePath, type Page } from 'puppeteer';
import { type GetProductDTO } from '../../../domain/useCases/GetProducts';
import { type AddProductsOnDB } from '../../../data/useCases/addProducts/AddProducts';
import { convertPriceToNumber } from '../../../utils/convertPriceToNumber';
import { type CreateProductDTO } from '../../../data/protocols';

export class BuscapeCrawlerProvider implements Crawler {
  private readonly baseURL = 'https://www.buscape.com.br/';

  constructor(private readonly addProducts: AddProductsOnDB) {
  }

  async getProducts(category: string): Promise<void> {
    const browser = await puppeteer.launch({
      executablePath: executablePath(),
      args: ['--no-sandbox']
    });

    const page = await browser.newPage();
    await page.goto(this.baseURL + category);
    const productsBaseInfo: GetProductDTO[] = await this.getProductsInfo(page);
    await browser.close();

    const productsToAddOnDB: CreateProductDTO[] = productsBaseInfo.map((product) => {
      return {
        ...product,
        price: convertPriceToNumber(product.price as unknown as string),
        category,
        engine: 'BUSCAPE'
      }
    })

    await this.addProducts.execute(productsToAddOnDB);
  }

  private async getProductsInfo(page: Page): Promise<any> {
    return await page.evaluate(() => {
      const productCardsDivs = Array.from(document.querySelectorAll('div[data-testid="product-card"]'));

      return productCardsDivs.map((productDOM) => {
        const imgSpan = productDOM.querySelector('div[data-testid="product-card::image"] > span') as Element;
        let image;

        if (imgSpan.innerHTML.includes('noscript')) {
          const regex = /<noscript>([\s\S]*?)<img[^>]+src="([^"]+)"[^>]*>/;
          const match = imgSpan.innerHTML.match(regex) as RegExpMatchArray;
          image = match[2];
        } else {
          image = imgSpan.querySelector('img')?.getAttribute('src') as string;
        }

        return {
          name: productDOM.querySelector('h2[data-testid="product-card::name"]')?.textContent,
          link: productDOM.querySelector('a')?.href,
          price: productDOM.querySelector('p[data-testid="product-card::price"]')?.textContent,
          image
        };
      });
    });
  }
}
