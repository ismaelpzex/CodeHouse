const puppeteer = require('puppeteer');
const download = require('image-downloader');

(async () => {

    //Instancia del navegador
    const browser = await puppeteer.launch({
        //el headless indica si se muestra el navegador o no, false = si
        headless: true,

        //cambiamos tamaño del ViewPort
        args: [`--window-size=1920,1080`],
        defaultViewport: {
            width: 1920,
            height: 1080
        }
    });
    //abrir nueva pestaña en el navegador
    const page = await browser.newPage();
    await page.goto('https://www.amazon.es/');

    //escribo mi busqueda en el campo de texto
    await page.waitForSelector('input#twotabsearchtextbox');
    await page.type('input#twotabsearchtextbox', 'libros de javascript');
    await page.waitForSelector('input#nav-search-submit-button');
    //pulso el botón envío
    await page.click('input#nav-search-submit-button');

    //esperamos a que se carguen los selectores que hemos elegido
    await page.waitForTimeout(3000);

    //recupero todos los enlaces de los productos
    const enlaces = await page.evaluate(() => {
        const enlaces = document.querySelectorAll('.s-result-item h2 a');
        const arrEnlaces = [];
        for (let enlace of enlaces) {
            arrEnlaces.push(enlace.href);
        }
        return arrEnlaces;
    });
    for (let link of enlaces) {
        await page.goto(link);
        await page.waitForSelector('h1#title');
        const title = await page.evaluate(() => document.querySelector('h1#title').innerText);
        const img = await page.evaluate(() => document.querySelector('#imgBlkFront').src);
        console.log(title);
        try {
            const response = await download.image({
                url: img,
                dest: `${__dirname}/images/${title}.jpg`
            });
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }

})();

