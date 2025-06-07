// Select all cart item containers
const cards = document.querySelectorAll(".card");

const cartIcon = document.querySelector(".cart-icon");
const sideBar = document.getElementById("sidebar");
const closeBtn = document.querySelector(".fa-close");
const overLay = document.getElementById("overlay");

// Toggle sidebar visibility
cartIcon.addEventListener("click", () => {
  sideBar.classList.add("open");
  overLay.classList.add("active");
  // console.log(sideBar);
});
// Close sidebar when clicking on the close button
closeBtn.addEventListener("click", () => {
  sideBar.classList.remove("open");
  overLay.classList.remove("active");
});
// Close sidebar when clicking on the overlay
overLay.addEventListener("click", () => {
  sideBar.classList.remove("open");
  overLay.classList.remove("active");
});

// gpt

function updateTotal() {
  let total = 0;
  document.querySelectorAll(".card").forEach((card) => {
    const price = parseFloat(card.querySelector(".unit-price").textContent);
    const qty = parseInt(card.querySelector(".quantity").textContent);
    total += price * qty;
  });
  document.querySelector(".total").textContent = `$ ${total}`;
}

// Quantity controls
document.querySelectorAll(".card").forEach((card) => {
  const plusBtn = card.querySelector(".fa-plus-circle");
  const minusBtn = card.querySelector(".fa-minus-circle");
  const qtySpan = card.querySelector(".quantity");

  plusBtn.addEventListener("click", () => {
    qtySpan.textContent = parseInt(qtySpan.textContent) + 1;
    updateTotal();
  });

  minusBtn.addEventListener("click", () => {
    if (parseInt(qtySpan.textContent) > 0) {
      qtySpan.textContent = parseInt(qtySpan.textContent) - 1;
      updateTotal();
    }
  });
});

// Delete item
document.querySelectorAll(".fa-trash-alt").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card-body");
    card.remove();
    updateTotal();
  });
});

// Like/Unlike item
document.querySelectorAll(".fa-heart").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");
    btn.style.color = btn.classList.contains("liked") ? "red" : "black";
  });
});
