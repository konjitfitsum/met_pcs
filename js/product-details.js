// // Get product ID from URL
// const params = new URLSearchParams(window.location.search);
// const productId = params.get("id");

// fetch("data/products.json")
//   .then((res) => res.json())
//   .then((products) => {
//     const product = products.find((p) => p.id == productId);

//     if (!product) {
//       document.getElementById("product-details").innerHTML =
//         "<h2>Product Not Found</h2>";
//       return;
//     }

//     document.getElementById("product-details").innerHTML = `
//       <div class="details-wrapper">
//         <img src="${product.image}" class="details-img" alt="${product.name}">
        
//         <div class="details-info">
//           <h2>${product.name}</h2>
//           <p class="price">$${product.price}</p>
//           <p class="category">${product.category}</p>
//           <p>${product.description}</p>

//           <button class="add-to-cart-btn">Add to Cart</button>
//         </div>
//       </div>
//     `;
//   });

