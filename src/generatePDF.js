// const puppeteer = require('puppeteer');

// async function generateFullPagePDF() {
//     const browser = await puppeteer.launch({
//         headless: 'new',  // Use new headless mode
//         args: ['--no-sandbox', '--disable-setuid-sandbox']
//     });
    
//     try {
//         const page = await browser.newPage();

//         // Set viewport size to match A4
//         await page.setViewport({
//             width: 1240,
//             height: 1754
//         });

//         // Navigate with longer timeout and wait until network is idle
//         await page.goto('http://localhost:3000', { 
//             waitUntil: ['networkidle0', 'domcontentloaded'],
//             timeout: 60000 // Increase timeout to 60 seconds
//         });

//         // Wait for content to be rendered
//         await page.waitForSelector('.menuCard', {
//             timeout: 60000,
//             visible: true
//         });

//         // Ensure all images are loaded
//         await page.evaluate(async () => {
//             const images = document.querySelectorAll('img');
//             await Promise.all(Array.from(images).map(img => {
//                 if (img.complete) return;
//                 return new Promise(resolve => {
//                     img.addEventListener('load', resolve);
//                     img.addEventListener('error', resolve);
//                 });
//             }));
//         });

//         // Add print-specific styles
//         await page.addStyleTag({
//             content: `
//                 @page {
//                     size: A4;
//                     margin: 10mm;
//                 }
//                 @media print {
//                     body {
//                         width: 190mm;
//                         margin: 0 auto;
//                     }
//                     .menuCard {
//                         break-inside: avoid;
//                         page-break-inside: avoid;
//                     }
//                     img {
//                         print-color-adjust: exact;
//                         -webkit-print-color-adjust: exact;
//                     }
//                 }
//             `
//         });

//         // Generate PDF
//         await page.pdf({
//             path: 'Choi_Family_Menu.pdf',
//             format: 'A4',
//             printBackground: true,
//             preferCSSPageSize: true,
//             margin: {
//                 top: '10mm',
//                 right: '10mm',
//                 bottom: '10mm',
//                 left: '10mm'
//             }
//         });

//         console.log("PDF generated successfully as 'Choi_Family_Menu.pdf'");
//     } catch (error) {
//         console.error("Error generating PDF:", error);
//     } finally {
//         await browser.close();
//     }
// }

// generateFullPagePDF();


const puppeteer = require('puppeteer');

async function generateFullPagePDF() {
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    try {
        const page = await browser.newPage();

        // Set viewport size
        await page.setViewport({
            width: 1240,
            height: 1754
        });

        // Navigate to page
        await page.goto('http://localhost:3000', { 
            waitUntil: ['networkidle0', 'load', 'domcontentloaded'],
            timeout: 60000
        });

        // Wait for content to be rendered
        await Promise.all([
            page.waitForSelector('.menu-card', { visible: true, timeout: 60000 }),
            page.waitForSelector('.menu-image', { visible: true, timeout: 60000 })
        ]);

        // Ensure all content is loaded
        await page.evaluate(async () => {
            const selectors = [
                '.menu-container',
                '.menu-card',
                '.menu-image',
                '.menu-content-container'
            ];
            
            await Promise.all(
                selectors.map(selector => 
                    new Promise(resolve => {
                        if (document.querySelector(selector)) {
                            resolve();
                        } else {
                            const observer = new MutationObserver(() => {
                                if (document.querySelector(selector)) {
                                    observer.disconnect();
                                    resolve();
                                }
                            });
                            observer.observe(document.body, {
                                childList: true,
                                subtree: true
                            });
                        }
                    })
                )
            );
        });

        // Add print styles
        await page.addStyleTag({
            content: `
                @page {
                    size: A4;
                    margin: 10mm;
                }
                @media print {
                    .menu-container {
                        background: white !important;
                        color: black !important;
                    }
                    .menu-card {
                        break-inside: avoid !important;
                        page-break-inside: avoid !important;
                        background: white !important;
                        border: 1px solid #ddd !important;
                    }
                    .menu-image {
                        print-color-adjust: exact !important;
                        -webkit-print-color-adjust: exact !important;
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
        console.error("Error details:", error);
        throw error;
    } finally {
        await browser.close();
    }
}

generateFullPagePDF().catch(error => {
    console.error("Error generating PDF:", error);
    process.exit(1);
});