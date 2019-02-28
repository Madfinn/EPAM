
const searchGlass = document.getElementById("searchGlass");
const searchField = document.getElementById("search");
const navigationMenu = document.getElementById("navigationMenu");
const hamburger = document.getElementById("hamburger");
const showMoreBtn = document.getElementById("showMore");
const catalogBlock = document.querySelectorAll(".container__catalogRow");

searchGlass.addEventListener("click", function (e) {
    e.preventDefault();
    searchField.classList.toggle("is-show");
});

hamburger.addEventListener("click", function (e) {
    e.preventDefault();
    navigationMenu.classList.toggle("is-show");
});

showMoreBtn.addEventListener("click", function (e) {
    e.preventDefault();
    for (let i = 5; i <= catalogBlock.length; i++) {
        if (catalogBlock[i].classList.contains("hidden")) {
            catalogBlock[i].classList.remove("hidden");
            showMoreBtn.textContent = "Show more";
        } else {
            catalogBlock[i].classList.add("hidden");
            showMoreBtn.textContent = "Show less";
        }
    }
});
