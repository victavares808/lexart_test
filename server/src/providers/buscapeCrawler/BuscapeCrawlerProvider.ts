import puppeteer, { type Page } from 'puppeteer';
import { type Crawler } from '../Crawler';

export class BuscapeCrawlerProvider implements Crawler {
  private readonly baseURL = 'https://www.buscape.com.br/';

  async getProducts (product: string): Promise<any> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(this.baseURL + 'celular');
    const productsBaseInfo = await this.getProductsInfo(page);
    await browser.close();
    return productsBaseInfo;
  }

  private async getProductsInfo (page: Page): Promise<any> {
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
