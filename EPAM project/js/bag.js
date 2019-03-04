/*
const bagContainer = document.getElementsByClassName("bag__topContainer")[0];
const bagCountItems = document.getElementsByClassName("header__bagItems")[0];
const bagBody = document.getElementById("bagBody");

class Bag {
    constructor() {
        this.items = [];
        this.price = this.countPrice() + " Грн";
    }

    countPrice() {
        let value = 0;
        for (let i = 0; i < this.items.length; i++) {
            value += this.items[i]._price;
        }
        return value;
    }
}

let shoppingBag = new Bag;
let getItemsFromStorage = JSON.parse(localStorage.getItem("Item"));
console.log("getItemsFromStorage: " + getItemsFromStorage);

for (let i = 0; i < getItemsFromStorage.length; i++) {
    shoppingBag.items.push(getItemsFromStorage[i]);
};

bagCountItems.textContent = shoppingBag.items.length;
console.log("shoppingBag: " + shoppingBag);

if(bagBody) {
    bagBody.onload = function () {
        renderBagItem();
    }
};

function renderBagItem() {
    shoppingBag.items.forEach(function (element) {
        let keys = Object.keys(element);
        let values = Object.values(element);
        /!*for(let i = 0; i < keys.length; i++) {
            for (let j = i + 1; j < keys.length; j++) {
                if(keys[i] === "title") {
                    if (values[i] === values[j]) {
                        break;
                    }
                }
            }
        };*!/

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
            if(keys[i] === "title") {
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
    });
}
*/
const bagContainer = document.getElementsByClassName("bag__topContainer")[0];
const bagBody = document.getElementById("bagBody");
const bagCountItems = document.getElementsByClassName("header__bagItems")[0];

let bagItem;

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

bagCountItems.textContent = shoppingBag.items.length;
console.log("shoppingBag: " + shoppingBag);

if(localStorage.getItem("Item") !== null) {
    console.log(localStorage);

    let getItemsFromStorage = JSON.parse(localStorage.getItem("Item"));

    for (let i = 0; i < getItemsFromStorage.length; i++) {
        shoppingBag.items.push(getItemsFromStorage[i]);
    }

    bagItem = document.getElementsByClassName("bag__item");
};

if(bagBody) {
    bagBody.onload = function () {
        renderBagItem();
    };

    bagContainer.onclick = function (event) {
        let target = event.target;

        for (let i = 0; i < bagItem.length; i++) {
            if (target.classList.contains("bag__itemRemove")) {
                target = target.parentNode.parentNode;
                console.log(target);
                bagContainer.removeChild(bagContainer.children[i]);
            }
        }
    }
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
        }
    });
}
