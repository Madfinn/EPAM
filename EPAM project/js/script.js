const searchGlass = document.getElementById("searchGlass");
const searchField = document.getElementById("search");
const navigationMenu = document.getElementById("navigationMenu");
const hamburger = document.getElementById("hamburger");

const bagCountItems = document.getElementsByClassName("header__bagItems")[0];
let storageItems = JSON.parse(localStorage.getItem("Item"));
let bagHeader;
let storedBagHeader = JSON.parse(localStorage.getItem("bagHeader"));

if(storageItems) {
    bagHeader = storageItems;
    bagCountItems.textContent = storedBagHeader.length;
} else {
    bagHeader = 0;
    bagCountItems.textContent = bagHeader;
}

localStorage.setItem("bagHeader", JSON.stringify(bagHeader));

searchGlass.addEventListener("click", function (e) {
    e.preventDefault();
    searchField.classList.toggle("is-show");
});

hamburger.addEventListener("click", function (e) {
    e.preventDefault();
    navigationMenu.classList.toggle("is-show");
    if(navigationMenu.classList.contains("is-show")) {
        main.classList.add("overlay");
    }

    if(!navigationMenu.classList.contains("is-show")) {
        main.classList.remove("overlay");
    }
});




