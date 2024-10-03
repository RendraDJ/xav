// Function to get the query parameter value from the URL
function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to load the product data
function loadProduct() {
    let productId = getQueryParam('id');
    if (productId) {
        let product = products.find(p => p.id == productId);
        if (product) {
            document.getElementById('product-name').textContent = product.name;
            document.getElementById('product-price').textContent = product.price;
            document.getElementById('product-description').textContent = product.description;
            document.getElementById('product-image').innerHTML = `<img src="${product.image}" alt="${product.name}">`;
            document.getElementById('add-to-cart').textContent = `ADD TO CART - ${product.price}`;
        }
    }
}

// Load product details when on product.html
if (window.location.pathname.includes("product.html")) {
    loadProduct();
}
