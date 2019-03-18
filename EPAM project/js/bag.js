const bagContainer = document.getElementsByClassName("bag__topContainer")[0];
const bagBody = document.getElementById("bagBody");
const emptyBag = document.getElementsByClassName("bag__emptyLink")[0];
const emptyBagText = document.getElementsByClassName("bag_empty")[0];
const buyNowText = document.getElementsByClassName("bag_buy")[0];
const buyBtn = document.getElementById("buyNow");
let bagItem;
let totalPrice = document.getElementById("price");

class Bag {
    constructor() {
        this.items = [];
        this.price = this.countPrice() + " Грн";
    }

    countPrice() {
        let value = 0;
        for (let i = 0; i < this.items.length; i++) {
            value += this.items[i].price;
        }
        return value;
    }
}

let shoppingBag = new Bag;

if(localStorage.getItem("Item") === null) {
    let getItemsFromStorage = 0;
}

if(localStorage.getItem("Item") !== null) {
    let getItemsFromStorage = JSON.parse(localStorage.getItem("Item"));

    for (let i = 0; i < getItemsFromStorage.length; i++) {
        shoppingBag.items.push(getItemsFromStorage[i]);
    }

    bagItem = document.getElementsByClassName("bag__item");
};

if(bagBody) {
    bagBody.onload = function () {
        renderBagItem();
        getTotalPriceInBag();
    };

    bagContainer.onclick = function (event) {
        let target = event.target;

        for (let i = 0; i < bagItem.length; i++) {
            if (target.classList.contains("bag__itemRemove")) {
                target = target.parentNode.parentNode;
                bagContainer.removeChild(bagContainer.children[i]);
            }
        }
    }

    emptyBag.onclick = function (event) {
        event.preventDefault();
        for (let i = bagItem.length - 1; i >= 0; i--) {
            bagContainer.removeChild(bagContainer.children[i]);
        }

        emptyBagText.classList.remove("d-none");
    };

    buyBtn.addEventListener("click", function () {
        for (let i = bagItem.length - 1; i >= 0; i--) {
            bagContainer.removeChild(bagContainer.children[i]);
        }

        buyNowText.classList.remove("d-none");
    });
};

let quantity = 0;
function renderBagItem() {
    shoppingBag.items.forEach(function (element) {
        let keys = Object.keys(element);
        let values = Object.values(element);

        let bagItem = document.createElement("div");
        bagItem.classList.add("bag__item");
        let bagItemWrap = document.createElement("div");
        bagItemWrap.classList.add("bag__itemWrap");
        let bagImg = document.createElement("img");
        bagImg.classList.add("catalog__rowImg");
        for (let i = 0; i < keys.length; i++) {
            if(keys[i] === "img") {
                bagImg.setAttribute("src", values[i]);
            }
        }
        let bagImgOverlay = document.createElement("div");
        bagImgOverlay.classList.add("catalog__imgOverlay");
        let overlayText = document.createElement("a");
        overlayText.classList.add("catalog__imgText");
        overlayText.textContent = "View Item";
        overlayText.setAttribute("href", "item.html");
        let bagItemDescr = document.createElement("div");
        bagItemDescr.classList.add("bag__itemDescr");
        let bagDescrName = document.createElement("h3");
        bagDescrName.classList.add("bag__descrName");
        for (let i = 0; i < keys.length; i++) {
            if (keys[i] === "title") {
                bagDescrName.textContent = values[i];
            }
        }
        let bagItemPrice = document.createElement("div");
        bagItemPrice.classList.add("bag__itemPrice");
        for (let i = 0; i < keys.length; i++) {
            if(keys[i] === "price") {
                bagItemPrice.textContent = values[i];
            }
        }
        let bagItemDetails1 = document.createElement("div");
        bagItemDetails1.classList.add("bag__itemDetails");
        bagItemDetails1.textContent = "Color:";
        let bagItemColor = document.createElement("span");
        bagItemColor.classList.add("bag__itemColor");
        for (let i = 0; i < keys.length; i++) {
            if(keys[i] === "color") {
                bagItemColor.textContent = values[i];
            }
        }
        let bagItemDetails2 = document.createElement("div");
        bagItemDetails2.classList.add("bag__itemDetails");
        bagItemDetails2.textContent = "Size:";
        let bagItemSize = document.createElement("span");
        bagItemSize.classList.add("bag__itemSize");
        for (let i = 0; i < keys.length; i++) {
            if(keys[i] === "size") {
                bagItemSize.textContent = values[i];
            }
        }
        let bagItemDetails3 = document.createElement("div");
        bagItemDetails3.classList.add("bag__itemDetails");
        bagItemDetails3.classList.add("last");
        bagItemDetails3.textContent = "Quantity:";
        let bagItemQuantity = document.createElement("span");
        bagItemQuantity.classList.add("bag__itemQuantity");
            if(quantity === 0) {
                quantity++;
            }
        bagItemQuantity.textContent = quantity;
        let bagItemRemove = document.createElement("a");
        bagItemRemove.classList.add("bag__itemRemove");
        bagItemRemove.setAttribute("href", "#");
        bagItemRemove.textContent = "Remove item";
        bagContainer.appendChild(bagItem);
        bagItem.appendChild(bagItemWrap);
        bagItemWrap.appendChild(bagImg);
        bagItemWrap.appendChild(bagImgOverlay);
        bagImgOverlay.appendChild(overlayText);
        bagItem.appendChild(bagItemDescr);
        bagItemDescr.appendChild(bagDescrName);
        bagItemDescr.appendChild(bagItemPrice);
        bagItemDescr.appendChild(bagItemDetails1);
        bagItemDetails1.appendChild(bagItemColor);
        bagItemDescr.appendChild(bagItemDetails2);
        bagItemDetails2.appendChild(bagItemSize);
        bagItemDescr.appendChild(bagItemDetails3);
        bagItemDetails3.appendChild(bagItemQuantity);
        bagItemDescr.appendChild(bagItemRemove);

        if (shoppingBag.items.length > 1) {
            for (let i = 0; i < keys.length; i++) {
                for (let j = keys.length - 1; j >= 0; j--) {
                    if (values[i] === values[j]) {
                        bagItemQuantity.textContent = quantity;
                        quantity++;
                        return;
                    }
                }
            }

            emptyBagText.classList.add("d-none");
            buyNowText.classList.add("d-none");
        }
    });
}

function getTotalPriceInBag() {
    storedBagHeader = JSON.parse(localStorage.getItem("bagHeader"));
    let price = 0;

    storedBagHeader.forEach(function (element) {
        for (let key in element) {
            if (key === "price") {
                let stringPrice = element[key].replace(/\D+/gi, "");
                price += Number(stringPrice);
            }
        }
        console.log(price);
    });
    price *= 10;
    price = new Intl.NumberFormat().format(price);
    return totalPrice.textContent = "£ " + price;
};