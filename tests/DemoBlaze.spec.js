const {test,expect} =require('@playwright/test')
test.describe.serial('Demo Blaze test', ()=>
{
    let page;
    let context;
    test.beforeAll(async({browser})=>{
        context=await browser.newContext();
        page =await context.newPage();
    })
    test.beforeEach(async()=>{
        await page.goto('https://www.demoblaze.com/');
    })
    test('Login', async()=>{
        await page.locator('#login2').click();
    })
    
})

