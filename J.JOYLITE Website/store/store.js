/* =========================================
   J.JOYLITE AGRO VENTURES
   STORE JAVASCRIPT
========================================= */


/* =========================================
   PRODUCT DATABASE
========================================= */

/*
 * IMPORTANT:
 * These are DEVELOPMENT / DEMO products.
 *
 * Before launch, replace these values with
 * J.JOYLITE's confirmed products, prices,
 * sizes and actual stock.
 */

const products = [

    {
        id: 1,
        name: "Premium Rice",
        category: "grains",
        categoryName: "Grains & Staples",
        unit: "5kg",
        price: 8500,
        stock: 65,
        icon: "fa-bowl-rice",
        colorClass: "grains",
        description:
            "Quality rice suitable for everyday family meals."
    },

    {
        id: 2,
        name: "Brown Beans",
        category: "grains",
        categoryName: "Grains & Staples",
        unit: "5kg",
        price: 9500,
        stock: 58,
        icon: "fa-seedling",
        colorClass: "grains",
        description:
            "A versatile staple for soups, meals and everyday cooking."
    },

    {
        id: 3,
        name: "Garri",
        category: "grains",
        categoryName: "Grains & Staples",
        unit: "5kg",
        price: 6000,
        stock: 75,
        icon: "fa-wheat-awn",
        colorClass: "grains",
        description:
            "A popular everyday Nigerian food staple."
    },

    {
        id: 4,
        name: "Semolina",
        category: "grains",
        categoryName: "Grains & Staples",
        unit: "2kg",
        price: 4200,
        stock: 62,
        icon: "fa-wheat-awn",
        colorClass: "grains",
        description:
            "A convenient staple for preparing everyday meals."
    },


    {
        id: 5,
        name: "Palm Oil",
        category: "cooking",
        categoryName: "Cooking Essentials",
        unit: "1 litre",
        price: 2800,
        stock: 72,
        icon: "fa-droplet",
        colorClass: "cooking",
        description:
            "Cooking essential for a variety of traditional meals."
    },

    {
        id: 6,
        name: "Vegetable Oil",
        category: "cooking",
        categoryName: "Cooking Essentials",
        unit: "1 litre",
        price: 3200,
        stock: 68,
        icon: "fa-bottle-droplet",
        colorClass: "cooking",
        description:
            "Everyday cooking oil for home meal preparation."
    },

    {
        id: 7,
        name: "Granulated Sugar",
        category: "cooking",
        categoryName: "Cooking Essentials",
        unit: "1kg",
        price: 1900,
        stock: 80,
        icon: "fa-cubes-stacked",
        colorClass: "cooking",
        description:
            "A useful kitchen essential for drinks and food preparation."
    },

    {
        id: 8,
        name: "Table Salt",
        category: "cooking",
        categoryName: "Cooking Essentials",
        unit: "1kg",
        price: 1000,
        stock: 90,
        icon: "fa-shaker",
        colorClass: "cooking",
        description:
            "Everyday salt for cooking and seasoning."
    },


    {
        id: 9,
        name: "Spaghetti",
        category: "packaged",
        categoryName: "Packaged Foods",
        unit: "500g",
        price: 1200,
        stock: 85,
        icon: "fa-utensils",
        colorClass: "packaged",
        description:
            "Convenient packaged pasta for quick everyday meals."
    },

    {
        id: 10,
        name: "Instant Noodles",
        category: "packaged",
        categoryName: "Packaged Foods",
        unit: "70g",
        price: 500,
        stock: 120,
        icon: "fa-bowl-food",
        colorClass: "packaged",
        description:
            "Quick and convenient noodles for everyday meals."
    },

    {
        id: 11,
        name: "Tomato Paste",
        category: "packaged",
        categoryName: "Packaged Foods",
        unit: "210g",
        price: 900,
        stock: 70,
        icon: "fa-jar",
        colorClass: "packaged",
        description:
            "A convenient cooking ingredient for sauces and meals."
    },

    {
        id: 12,
        name: "Powdered Milk",
        category: "packaged",
        categoryName: "Packaged Foods",
        unit: "350g",
        price: 2500,
        stock: 55,
        icon: "fa-glass-water",
        colorClass: "packaged",
        description:
            "Packaged milk suitable for drinks and breakfast."
    },


    {
        id: 13,
        name: "Fresh Tomatoes",
        category: "fresh",
        categoryName: "Fresh Foods",
        unit: "1kg",
        price: 1800,
        stock: 64,
        icon: "fa-apple-whole",
        colorClass: "fresh",
        description:
            "Fresh tomatoes for everyday cooking and meal preparation."
    },

    {
        id: 14,
        name: "Fresh Onions",
        category: "fresh",
        categoryName: "Fresh Foods",
        unit: "1kg",
        price: 1600,
        stock: 73,
        icon: "fa-circle",
        colorClass: "fresh",
        description:
            "Fresh onions for cooking, seasoning and meal preparation."
    },

    {
        id: 15,
        name: "Fresh Pepper",
        category: "fresh",
        categoryName: "Fresh Foods",
        unit: "1kg",
        price: 2200,
        stock: 57,
        icon: "fa-pepper-hot",
        colorClass: "fresh",
        description:
            "Fresh pepper for sauces, soups and everyday meals."
    },

    {
        id: 16,
        name: "Eggs",
        category: "fresh",
        categoryName: "Fresh Foods",
        unit: "1 crate",
        price: 6500,
        stock: 52,
        icon: "fa-egg",
        colorClass: "fresh",
        description:
            "Fresh eggs for breakfast, baking and everyday meals."
    },


    {
        id: 17,
        name: "Frozen Chicken",
        category: "protein",
        categoryName: "Proteins",
        unit: "1kg",
        price: 5500,
        stock: 61,
        icon: "fa-drumstick-bite",
        colorClass: "protein",
        description:
            "Frozen chicken suitable for a variety of home meals."
    },

    {
        id: 18,
        name: "Beef",
        category: "protein",
        categoryName: "Proteins",
        unit: "1kg",
        price: 6500,
        stock: 59,
        icon: "fa-drumstick-bite",
        colorClass: "protein",
        description:
            "Beef suitable for soups, stews and everyday cooking."
    },

    {
        id: 19,
        name: "Frozen Fish",
        category: "protein",
        categoryName: "Proteins",
        unit: "1kg",
        price: 6000,
        stock: 54,
        icon: "fa-fish",
        colorClass: "protein",
        description:
            "Frozen fish for soups, stews and everyday meals."
    }

];


/* =========================================
   CART
========================================= */

let cart = JSON.parse(
    localStorage.getItem("jjoyliteCart")
) || [];


/* =========================================
   ELEMENTS
========================================= */

const productGrid =
    document.getElementById("productGrid");

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const productCount =
    document.getElementById("productCount");

const emptyState =
    document.getElementById("emptyState");

const clearFilters =
    document.getElementById("clearFilters");

const cartButton =
    document.getElementById("cartButton");

const cartSidebar =
    document.getElementById("cartSidebar");

const cartOverlay =
    document.getElementById("cartOverlay");

const closeCart =
    document.getElementById("closeCart");

const cartItems =
    document.getElementById("cartItems");

const emptyCart =
    document.getElementById("emptyCart");

const cartTotal =
    document.getElementById("cartTotal");

const cartCount =
    document.getElementById("cartCount");

const whatsappOrder =
    document.getElementById("whatsappOrder");

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileNav =
    document.getElementById("mobileNav");

const productModal =
    document.getElementById("productModal");

const modalClose =
    document.getElementById("modalClose");

const modalImage =
    document.getElementById("modalImage");

const modalIcon =
    document.getElementById("modalIcon");

const modalCategory =
    document.getElementById("modalCategory");

const modalName =
    document.getElementById("modalName");

const modalDescription =
    document.getElementById("modalDescription");

const modalPrice =
    document.getElementById("modalPrice");

const modalStock =
    document.getElementById("modalStock");

const modalMinus =
    document.getElementById("modalMinus");

const modalPlus =
    document.getElementById("modalPlus");

const modalQuantity =
    document.getElementById("modalQuantity");

const modalAddCart =
    document.getElementById("modalAddCart");

const year =
    document.getElementById("year");


/* =========================================
   CURRENT MODAL PRODUCT
========================================= */

let currentModalProduct = null;


/* =========================================
   FORMAT MONEY
========================================= */

function formatPrice(price) {

    return new Intl.NumberFormat(
        "en-NG",
        {
            style: "currency",
            currency: "NGN",
            maximumFractionDigits: 0
        }
    ).format(price);

}


/* =========================================
   STOCK STATUS
========================================= */

function getStockStatus(stock) {

    if (stock <= 0) {

        return {
            text: "Out of Stock",
            className: "out-stock"
        };

    }


    if (stock <= 10) {

        return {
            text: "Low Stock",
            className: "low-stock"
        };

    }


    return {
        text: "In Stock",
        className: "in-stock"
    };

}


/* =========================================
   RENDER PRODUCTS
========================================= */

function renderProducts(list = products) {

    productGrid.innerHTML = "";

    productCount.textContent =
        `${list.length} product${list.length === 1 ? "" : "s"} available`;


    if (list.length === 0) {

        productGrid.style.display = "none";

        emptyState.style.display = "block";

        return;

    }


    productGrid.style.display = "grid";

    emptyState.style.display = "none";


    list.forEach(product => {

        const stockStatus =
            getStockStatus(product.stock);


        const card =
            document.createElement("article");

        card.className = "store-product";


        card.innerHTML = `

            <div class="product-visual ${product.colorClass}">

                <div class="product-badge">
                    ${product.categoryName}
                </div>

                <div class="stock-badge ${stockStatus.className}">
                    ${stockStatus.text}
                </div>

                <i class="fa-solid ${product.icon}"></i>

            </div>


            <div class="product-content">

                <span class="unit">
                    ${product.unit}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p class="product-description">
                    ${product.description}
                </p>


                <div class="product-bottom">

                    <div>

                        <div class="price">
                            ${formatPrice(product.price)}
                        </div>

                        <div class="stock-text">
                            ${product.stock > 0
                                ? `${product.stock} available`
                                : "Currently unavailable"}
                        </div>

                    </div>


                    <div class="product-actions">

                        <button
                            class="view-product"
                            data-id="${product.id}"
                            title="View product"
                        >

                            <i class="fa-solid fa-eye"></i>

                        </button>


                        <button
                            class="add-cart"
                            data-id="${product.id}"
                            title="Add to cart"
                            ${product.stock <= 0 ? "disabled" : ""}
                        >

                            <i class="fa-solid fa-cart-plus"></i>

                        </button>

                    </div>

                </div>

            </div>
        `;


        productGrid.appendChild(card);

    });


    attachProductEvents();

}


/* =========================================
   PRODUCT EVENTS
========================================= */

function attachProductEvents() {

    document
        .querySelectorAll(".add-cart")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        Number(button.dataset.id);

                    addToCart(id, 1);

                }
            );

        });


    document
        .querySelectorAll(".view-product")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        Number(button.dataset.id);

                    openProductModal(id);

                }
            );

        });

}


/* =========================================
   SEARCH / FILTER
========================================= */

function filterProducts() {

    const search =
        searchInput.value
            .trim()
            .toLowerCase();

    const category =
        categoryFilter.value;


    const filtered =
        products.filter(product => {

            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(search) ||

                product.description
                    .toLowerCase()
                    .includes(search);


            const matchesCategory =
                category === "all" ||
                product.category === category;


            return (
                matchesSearch &&
                matchesCategory
            );

        });


    renderProducts(filtered);

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterProducts
    );

}


if (categoryFilter) {

    categoryFilter.addEventListener(
        "change",
        filterProducts
    );

}


if (clearFilters) {

    clearFilters.addEventListener(
        "click",
        () => {

            searchInput.value = "";
            categoryFilter.value = "all";

            renderProducts();

        }
    );

}


/* =========================================
   ADD TO CART
========================================= */

function addToCart(productId, quantity) {

    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) {
        return;
    }


    if (product.stock <= 0) {
        return;
    }


    const existing =
        cart.find(
            item => item.id === productId
        );


    if (existing) {

        const newQuantity =
            existing.quantity + quantity;


        if (newQuantity > product.stock) {

            existing.quantity =
                product.stock;

        } else {

            existing.quantity =
                newQuantity;

        }

    } else {

        cart.push({
            id: productId,
            quantity:
                Math.min(
                    quantity,
                    product.stock
                )
        });

    }


    saveCart();

    updateCart();

    openCart();

}


/* =========================================
   REMOVE FROM CART
========================================= */

function removeFromCart(productId) {

    cart =
        cart.filter(
            item => item.id !== productId
        );

    saveCart();

    updateCart();

}


/* =========================================
   CHANGE CART QUANTITY
========================================= */

function changeCartQuantity(
    productId,
    change
) {

    const cartItem =
        cart.find(
            item => item.id === productId
        );


    const product =
        products.find(
            item => item.id === productId
        );


    if (!cartItem || !product) {
        return;
    }


    cartItem.quantity += change;


    if (cartItem.quantity <= 0) {

        removeFromCart(productId);

        return;

    }


    if (
        cartItem.quantity >
        product.stock
    ) {

        cartItem.quantity =
            product.stock;

    }


    saveCart();

    updateCart();

}


/* =========================================
   SAVE CART
========================================= */

function saveCart() {

    localStorage.setItem(
        "jjoyliteCart",
        JSON.stringify(cart)
    );

}


/* =========================================
   UPDATE CART
========================================= */

function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;

    let itemCount = 0;


    if (cart.length === 0) {

        emptyCart.style.display = "flex";

        cartItems.style.display = "none";

        whatsappOrder.disabled = true;

        cartTotal.textContent = "₦0";

    } else {

        emptyCart.style.display = "none";

        cartItems.style.display = "block";

        whatsappOrder.disabled = false;


        cart.forEach(item => {

            const product =
                products.find(
                    p => p.id === item.id
                );


            if (!product) {
                return;
            }


            const itemTotal =
                product.price *
                item.quantity;


            total += itemTotal;

            itemCount += item.quantity;


            const cartItem =
                document.createElement("div");

            cartItem.className =
                "cart-item";


            cartItem.innerHTML = `

                <div class="cart-item-image ${product.colorClass}">
                    <i class="fa-solid ${product.icon}"></i>
                </div>


                <div class="cart-item-info">

                    <h4>
                        ${product.name}
                    </h4>

                    <p>
                        ${formatPrice(product.price)}
                    </p>


                    <div class="cart-item-controls">

                        <button
                            class="quantity-minus"
                            data-id="${product.id}"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            class="quantity-plus"
                            data-id="${product.id}"
                        >
                            +
                        </button>

                        <button
                            class="remove-item"
                            data-id="${product.id}"
                        >
                            <i class="fa-solid fa-trash"></i>
                        </button>

                    </div>

                </div>


                <div class="cart-item-total">
                    ${formatPrice(itemTotal)}
                </div>

            `;


            cartItems.appendChild(cartItem);

        });


        cartTotal.textContent =
            formatPrice(total);

    }


    cartCount.textContent =
        itemCount;


    attachCartEvents();

}


/* =========================================
   CART EVENTS
========================================= */

function attachCartEvents() {

    document
        .querySelectorAll(".quantity-minus")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    changeCartQuantity(
                        Number(button.dataset.id),
                        -1
                    );

                }
            );

        });


    document
        .querySelectorAll(".quantity-plus")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    changeCartQuantity(
                        Number(button.dataset.id),
                        1
                    );

                }
            );

        });


    document
        .querySelectorAll(".remove-item")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    removeFromCart(
                        Number(button.dataset.id)
                    );

                }
            );

        });

}


/* =========================================
   OPEN CART
========================================= */

function openCart() {

    cartSidebar.classList.add("active");

    cartOverlay.classList.add("active");

    document.body.classList.add("cart-open");

}


/* =========================================
   CLOSE CART
========================================= */

function closeCartSidebar() {

    cartSidebar.classList.remove("active");

    cartOverlay.classList.remove("active");

    document.body.classList.remove("cart-open");

}


if (cartButton) {

    cartButton.addEventListener(
        "click",
        openCart
    );

}


if (closeCart) {

    closeCart.addEventListener(
        "click",
        closeCartSidebar
    );

}


if (cartOverlay) {

    cartOverlay.addEventListener(
        "click",
        closeCartSidebar
    );

}


/* =========================================
   WHATSAPP ORDER
========================================= */

if (whatsappOrder) {

    whatsappOrder.addEventListener(
        "click",
        () => {

            if (cart.length === 0) {
                return;
            }


            let message =
                "Hello J.JOYLITE AGRO VENTURES,\n\n" +
                "I would like to make an order:\n\n";


            let total = 0;


            cart.forEach(item => {

                const product =
                    products.find(
                        p => p.id === item.id
                    );


                if (!product) {
                    return;
                }


                const itemTotal =
                    product.price *
                    item.quantity;


                total += itemTotal;


                message +=
                    `• ${product.name} (${product.unit}) x ${item.quantity} - ${formatPrice(itemTotal)}\n`;

            });


            message +=
                `\nEstimated Total: ${formatPrice(total)}\n\n` +
                "Please confirm availability and final total.";


            const whatsappURL =
                `https://wa.me/2348121212588?text=${encodeURIComponent(message)}`;


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}


/* =========================================
   MOBILE MENU
========================================= */

if (mobileMenu) {

    mobileMenu.addEventListener(
        "click",
        () => {

            mobileNav.classList.toggle("active");

            const icon =
                mobileMenu.querySelector("i");


            if (
                mobileNav.classList.contains("active")
            ) {

                icon.classList.remove(
                    "fa-bars"
                );

                icon.classList.add(
                    "fa-xmark"
                );

            } else {

                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }

        }
    );

}


if (mobileNav) {

    mobileNav
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    mobileNav.classList.remove(
                        "active"
                    );

                    const icon =
                        mobileMenu.querySelector("i");

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }
            );

        });

}


/* =========================================
   PRODUCT MODAL
========================================= */

function openProductModal(productId) {

    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) {
        return;
    }


    currentModalProduct =
        product;


    modalCategory.textContent =
        product.categoryName;


    modalName.textContent =
        product.name;


    modalDescription.textContent =
        product.description;


    modalPrice.textContent =
        formatPrice(product.price);


    modalImage.className =
        `modal-image ${product.colorClass}`;


    modalIcon.className =
        `fa-solid ${product.icon}`;


    modalQuantity.textContent = "1";


    if (product.stock > 0) {

        modalStock.textContent =
            `${product.stock} available`;

        modalStock.style.color =
            "#4d7c0f";

        modalAddCart.disabled =
            false;

    } else {

        modalStock.textContent =
            "Currently out of stock";

        modalStock.style.color =
            "#991b1b";

        modalAddCart.disabled =
            true;

    }


    productModal.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";

}


function closeProductModal() {

    productModal.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

    currentModalProduct =
        null;

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeProductModal
    );

}


if (productModal) {

    productModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                productModal
            ) {

                closeProductModal();

            }

        }
    );

}


/* =========================================
   MODAL QUANTITY
========================================= */

if (modalMinus) {

    modalMinus.addEventListener(
        "click",
        () => {

            let quantity =
                Number(
                    modalQuantity.textContent
                );


            if (quantity > 1) {
                quantity--;
            }


            modalQuantity.textContent =
                quantity;

        }
    );

}


if (modalPlus) {

    modalPlus.addEventListener(
        "click",
        () => {

            if (!currentModalProduct) {
                return;
            }


            let quantity =
                Number(
                    modalQuantity.textContent
                );


            if (
                quantity <
                currentModalProduct.stock
            ) {

                quantity++;

            }


            modalQuantity.textContent =
                quantity;

        }
    );

}


/* =========================================
   MODAL ADD TO CART
========================================= */

if (modalAddCart) {

    modalAddCart.addEventListener(
        "click",
        () => {

            if (!currentModalProduct) {
                return;
            }


            const quantity =
                Number(
                    modalQuantity.textContent
                );


            addToCart(
                currentModalProduct.id,
                quantity
            );


            closeProductModal();

        }
    );

}


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeCartSidebar();

            closeProductModal();

        }

    }
);


/* =========================================
   CURRENT YEAR
========================================= */

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================
   INITIAL LOAD
========================================= */

renderProducts();

updateCart();