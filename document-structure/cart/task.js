const ProductsContainer = document.querySelector(".products");
const CartsProducts = document.querySelector(".cart__products");
const Carts = document.querySelector(".cart");
Carts.classList.add("display-none");
ProductsContainer.addEventListener("click", function(event) {
    const productId = event.target.closest(".product").dataset.id;
    if (event.target.classList.contains("product__quantity-control")) {
        quantityControl(productId, event.target)
    } else if (event.target.classList.contains("product__add")) {
        addToCart(productId);
    }
})

function quantityControl(id, target) {
    const element = ProductsContainer.querySelector(`[data-id="${id}"]`);
    const counter = element.querySelector(".product__quantity-value");
    if ((target.classList.contains("product__quantity-control_dec")) && (counter.innerText >= 2)) {
        counter.innerText--;
    } else if (target.classList.contains("product__quantity-control_inc")) {
        counter.innerText++;
    }
}

function addToCart(id) {
    const item = ProductsContainer.querySelector(`[data-id="${id}"]`);
    const addValue = Number(item.querySelector(".product__quantity-value").innerText);
    if (CartsProducts.querySelector(`[data-id="${id}"]`)) {
        const currentValue = Number(CartsProducts.querySelector(`[data-id="${id}"] .cart__product-count`).innerText);
        CartsProducts.querySelector(`[data-id="${id}"] .cart__product-count`).innerText = currentValue + addValue;
    } else {
        const imgSrc = item.querySelector(".product__image").getAttribute("src");
        const newElement = document.createElement('div');
        newElement.classList.add("cart__product");
        newElement.dataset.id = id;
        newElement.innerHTML = `<img class="cart__product-image" alt="" src="${imgSrc}">
<div class="cart__product-count">${addValue}</div>
</div>`;
        CartsProducts.append(newElement);
    }
    item.querySelector(".product__quantity-value").innerText = 1;;
    animation(id);
}