// Fetch products
let response = await fetch("https://dummyjson.com/products");
let responseAsjson = await response.json();
let products = responseAsjson.products;


// Recupe products
for(let i = 0; i < products.length; i++) {
    let titleProducts = products[i].title;

    let img = products[i].images[0];

    let priceProducts = products[i].price;

    // Card
    const app = document.querySelector("#app");
    let currentcies = "$";

    const article = document.createElement("article");
    app.appendChild(article);

    const title = document.createElement("h2");
    article.appendChild(title);
    title.textContent = titleProducts;

    const image = document.createElement("img");
    article.appendChild(image);

    image.setAttribute("src", img);

    const price = document.createElement("p");
    article.appendChild(price);
    price.textContent = priceProducts + currentcies;
}