const itemParameter = document.getElementsByClassName("item__parameter");
const galery = document.getElementsByClassName("item__galeryBlock_thumbnails")[0];
const mainPhoto = document.getElementsByClassName("item__img_full")[0];
const itemTitle = document.getElementsByClassName("item__title")[0];
const itemPrice = document.getElementsByClassName("item__price");
const addToBagBtn = document.getElementById("addToBagBtn");
const itemSize = document.getElementsByClassName("item__size");
const itemColor = document.getElementsByClassName("item__color");
let titleFromStorage = localStorage.getItem("Title");
let priceFromStorage = localStorage.getItem("Price");
let photoFromStorage = localStorage.getItem("Photo");
if(!bagHeader) {
    storageItems = [];
} else {
    storageItems = JSON.parse(localStorage.getItem("bagHeader"));
}
console.log("storageItems" + storageItems);

for(let j = 0; j < itemParameter.length; j++) {
    itemParameter[j].onclick = function (event) {
        let target = event.target;
        let parent = target.parentNode;

        for(let k = 0; k < parent.children.length; k++) {
            parent.children[k].classList.remove("selected");
        }
        target.classList.add('selected');
    }
};

 galery.onclick = function (event) {
     event.preventDefault();
     let target = event.target;

     if (target.classList.contains("item__img")) {
         let buffer = mainPhoto.src;
         mainPhoto.src = target.src;
         target.src = buffer;
     }
 };

const quotes = new RegExp('\"', 'g');
itemTitle.innerHTML = titleFromStorage.replace(quotes, "");
for(let i = 0; i < itemPrice.length; i++) {
    itemPrice[i].innerHTML = priceFromStorage.replace(quotes, "");
}

class shopItem {
    constructor() {
        this.img = this.getItemImg();
        this.title = this.getItemTitle();
        this.price = this.getItemPrice();
        this.size = this.getItemSize();
        this.color = this.getItemColor();
    }

    getItemTitle() {
        return titleFromStorage = titleFromStorage.replace(quotes, "");
    }

    getItemPrice() {
        return priceFromStorage = priceFromStorage.replace(quotes, "");
    }

    getItemImg() {
        return photoFromStorage = photoFromStorage.replace(quotes, "");
    }

    getItemSize() {
        let sizeFromStorage = localStorage.getItem("Size");
        return sizeFromStorage = sizeFromStorage.replace(quotes, "");
    }

    getItemColor() {
        let colorFromStorage = localStorage.getItem("Color");
        return colorFromStorage = colorFromStorage.replace(quotes, "");
    }
}

addToBagBtn.addEventListener("click", function () {
    for(let i = 0; i < itemSize.length; i++) {
        if(itemSize[i].classList.contains("selected")) {
            localStorage.setItem("Size", itemSize[i].textContent);
        }
    }

    for(let i = 0; i < itemColor.length; i++) {
        if(itemColor[i].classList.contains("selected")) {
            localStorage.setItem("Color", itemColor[i].textContent);
        }
    }

    let item = new shopItem;
    console.log("item" + item);
    storageItems.push(item);
    localStorage.setItem("Item", JSON.stringify(storageItems));

    const bagHeader = storageItems;
    localStorage.setItem("bagHeader", JSON.stringify(bagHeader));
    let storedBagHeader = JSON.parse(localStorage.getItem("bagHeader"));
    bagCountItems.textContent = storedBagHeader.length;

    storedBagHeader = item;
    bagCountItems.textContent = storedBagHeader.length;
});