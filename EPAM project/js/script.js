const searchGlass = document.getElementById("searchGlass");
const searchField = document.getElementById("search");
const navigationMenu = document.getElementById("navigationMenu");
const hamburger = document.getElementById("hamburger");

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




/*Additional functions*/
