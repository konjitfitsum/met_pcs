function loadCheckout() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const orderItemsDiv = document.getElementById("order-items");
  const totalSpan = document.getElementById("order-total");

  if (cart.length === 0) {
    orderItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    totalSpan.innerText = "0.00";
    return;
  }

  let total = 0;
  orderItemsDiv.innerHTML = "";

  cart.forEach((item) => {
    total += item.price * item.quantity;

    orderItemsDiv.innerHTML += `
      <div class="order-item">
        <span>${item.name} × ${item.quantity}</span>
        <span>$${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    `;
  });

  totalSpan.innerText = total.toFixed(2);
}

document.getElementById("place-order-btn").addEventListener("click", () => {
  alert("Order placed successfully! Thank you for shopping 💙");

  // Clear the cart
  localStorage.removeItem("cart");

  // Redirect to homepage
  window.location.href = "index.html";
});

// Load checkout on page ready
loadCheckout();
