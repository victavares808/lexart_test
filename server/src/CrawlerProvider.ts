import puppeteer, { type Browser } from 'puppeteer';

const BASE_URL = 'https://www.buscape.com.br/';

async function getProductImageAndDescription (productLink: string, browser: Browser): Promise<{
  image: string
  description: string
}> {
  const page = await browser.newPage();
  await page.goto(productLink, { timeout: 40000 });
  const info = await page.evaluate(() => {
    const image = document.querySelector('div > img')?.getAttribute('src') as string;
    const description = document.querySelector('div[data-testid="detailsSection-overflow"] > h3 ~ div')?.textContent as string;
    return {
      image,
      description
    };
  });
  await page.close();
  return info;
}

async function main (): Promise<void> {
  const browser = await puppeteer.launch({ pipe: true });
  const page = await browser.newPage();
  await page.goto(BASE_URL + 'celular');

  const productsBaseInfo = await page.evaluate(() => {
    const productCardsDivs = Array.from(document.querySelectorAll('div[data-testid="product-card"]'));
    return productCardsDivs.map(productCard => {
      return {
        name: productCard.querySelector('h2[data-testid="product-card::name"]')?.textContent,
        link: productCard.querySelector('a')?.href,
        price: productCard.querySelector('p[data-testid="product-card::price"]')?.textContent
      };
    });
  });

  const productCompleteInfo = await Promise.all(productsBaseInfo.map(async (product) => {
    const productImageAndDescription = await getProductImageAndDescription(product.link as string, browser);
    return {
      ...product,
      ...productImageAndDescription
    };
  }));

  console.log(productCompleteInfo);

  await browser.close();
}

void main();
