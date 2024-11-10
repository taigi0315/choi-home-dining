const puppeteer = require('puppeteer');

async function generateFullPagePDF() {
    const browser = await puppeteer.launch({
        headless: 'new',  // Use new headless mode
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    try {
        const page = await browser.newPage();

        // Set viewport size to match A4
        await page.setViewport({
            width: 1240,
            height: 1754
        });

        // Navigate with longer timeout and wait until network is idle
        await page.goto('http://localhost:3000', { 
            waitUntil: ['networkidle0', 'domcontentloaded'],
            timeout: 60000 // Increase timeout to 60 seconds
        });

        // Wait for content to be rendered
        await page.waitForSelector('.menuCard', {
            timeout: 60000,
            visible: true
        });

        // Ensure all images are loaded
        await page.evaluate(async () => {
            const images = document.querySelectorAll('img');
            await Promise.all(Array.from(images).map(img => {
                if (img.complete) return;
                return new Promise(resolve => {
                    img.addEventListener('load', resolve);
                    img.addEventListener('error', resolve);
                });
            }));
        });

        // Add print-specific styles
        await page.addStyleTag({
            content: `
                @page {
                    size: A4;
                    margin: 10mm;
                }
                @media print {
                    body {
                        width: 190mm;
                        margin: 0 auto;
                    }
                    .menuCard {
                        break-inside: avoid;
                        page-break-inside: avoid;
                    }
                    img {
                        print-color-adjust: exact;
                        -webkit-print-color-adjust: exact;
                    }
                }
            `
        });

        // Generate PDF
        await page.pdf({
            path: 'Choi_Family_Menu.pdf',
            format: 'A4',
            printBackground: true,
            preferCSSPageSize: true,
            margin: {
                top: '10mm',
                right: '10mm',
                bottom: '10mm',
                left: '10mm'
            }
        });

        console.log("PDF generated successfully as 'Choi_Family_Menu.pdf'");
    } catch (error) {
        console.error("Error generating PDF:", error);
    } finally {
        await browser.close();
    }
}

generateFullPagePDF();