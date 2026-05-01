let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalSpan = document.getElementById("total");

  cartItems.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - $${item.price}`;
    cartItems.appendChild(li);
  });

  totalSpan.textContent = total;
}
function checkout() {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }
  
    let summary = "You are purchasing:\n";
    cart.forEach(item => {
      summary += `- ${item.product}: $${item.price}\n`;
    });
    summary += `\nTotal: $${total}\n\nThank you for your purchase!`;
  
    alert(summary);
  
    // Clear cart after checkout
    cart = [];
    total = 0;
    updateCart();
  }
  
