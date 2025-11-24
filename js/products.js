// Load products.json and place products on the page
fetch("data/products.json")
  .then((response) => response.json())
  .then((products) => {
    const container = document.getElementById("product-container");

    products.forEach((p) => {
      container.innerHTML += `
        <div class="product-card">
          <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p class="price">$${p.price}</p>
          <p class="category">${p.category}</p>
          <p class="description">${p.description}</p>
          <div>
            <button class="add-to-cart" data-id="${p.id}" style="background-color: #05a2ba ; border: none ;border-radius: 5px ; padding: 10px ; margin:10px  ;hover: cursor: pointer; "><a href="cart.html" style="text-decoration: none; color: white">Add to Cart</a></button>
            <button class="view-details" style="background-color: #f0c14b ; border: none ;border-radius: 5px ; padding: 10px ; margin:10px  ;hover: cursor: pointer;"><a href="login.html?id=${p.id}" style="text-decoration: none; color: black">Buy now</a></button>
          </div>
        


        </div>
      `;
    });
  })
  .catch((error) => console.error("Error loading products:", error));
