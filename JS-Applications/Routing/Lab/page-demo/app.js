import page from '//unpkg.com/page/page.mjs';

function homePage() {
    main.innerHTML = '<h2>Home Page</h2><p>Welcome to our site!</p>';
}

function detailsPage(ctx) {
    main.innerHTML = '<h2>Product</h2><p>Product Details</p><button>By now</button>';
    document.querySelector('button').addEventListener('click', () => {
        page.redirect('/checkout')
    });
}

function checkOutPage() {
    main.innerHTML = '<h2>Card Details</h2><p>Products in cart</p>';
}

function catalogPage() {
    main.innerHTML = '<h2>Catalog</h2><p>List of items</p><a href="/catalog/1234">product</a>';
}

function aboutPage() {
    main.innerHTML = '<h2>About</h2><p>Our company is ...</p>';
}

const views = {
    '/catalog/kitchen': () => '<h2>Kitchen</h2><p>Kitchen Equipment</p>',
};

const main = document.querySelector('main');

page('/home', homePage);
page('/catalog', catalogPage);
page('/catalog/:id', detailsPage);
page('/about', aboutPage);
page('/checkout', checkOutPage);

page.redirect(`/`, '/home')
page.start();