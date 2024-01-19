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

    // Click img
    let body = document.querySelector('body');
    let blur = document.createElement("section");
    let detail = document.createElement("article");

    for(let j = 0; j < products[i].images.length; j++) {
        image.addEventListener("click", ()=> {
            console.log('hello')
            body.appendChild(blur);
    
            blur.setAttribute("class", "blur");
            blur.appendChild(detail);
            blur.style.display = "block";

            let imageDetail = document.createElement("img");
            detail.appendChild(imageDetail);
            imageDetail.setAttribute("src", products[i].images[j]);
            blur.style.display = "block";
    
            detail.setAttribute("class", "detail");
            detail.appendChild(imageDetail);
            blur.style.display = "block";

            body.style.overflow = "hidden";
        });

        blur.addEventListener("click", ()=> {
            blur.style.display = "none";
            detail.textContent = ""

            body.style.overflow = "scroll"
        });
    }
}