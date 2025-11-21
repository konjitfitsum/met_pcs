function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-container");

  if (cart.length === 0) {
    container.innerHTML =
      "<h2 style='text-align:center'>Your cart is empty.</h2>";
    document.getElementById("cart-total").innerText = "0";
    return;
  }

  container.innerHTML = "";

  cart.forEach((item, index) => {
    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        
        <div class="item-info">
          <h3>${item.name}</h3>
          <p>$${item.price}</p>
        </div>

        <div class="item-quantity">
          <button onclick="updateQuantity(${index}, -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="updateQuantity(${index}, 1)">+</button>
        </div>

        <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  updateTotal();
}

function updateQuantity(index, amount) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart[index].quantity += amount;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));

  loadCart();
}

function updateTotal() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  document.getElementById("cart-total").innerText = total.toFixed(2);
}

loadCart();
