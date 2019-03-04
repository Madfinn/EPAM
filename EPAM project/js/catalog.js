const main = document.getElementsByTagName("main")[0];
const showMoreBtn = document.getElementById("showMore");
const catalogBlock = document.querySelectorAll(".container__catalogRow");
const filtersMobile = document.getElementsByClassName("filters__mobile")[0];
const filtersLaptop = document.querySelector(".filters__laptop");
const filterItem = document.getElementsByClassName("filter__item");
const openFilterBtn = document.getElementsByClassName("filterMobile__icon")[0];
const closeFilterBtn = document.getElementsByClassName("filters__closeIcon")[0];
const catalog = document.getElementById("catalog");
const catalogItem = document.getElementsByClassName("catalog__rowItem");
const catalogItemArray = [];


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

/*Filters laptop*/
filtersLaptop.onclick = function(event) {
    let target = event.target;

    while (target !== filtersLaptop) {
        for (let i = 0; i < filterItem.length; i++) {
            if (filterItem[i] !== target) {
                filterItem[i].classList.remove('is-show');
            }
        }
        if (target.classList.contains("filter__item")) {
            target.classList.toggle('is-show');return;
        }
        target = target.parentNode;
    }
};

/*Filters mobile*/
openFilterBtn.addEventListener("click", function () {
    filtersMobile.classList.add("is-show");
    main.classList.add("overlay");
});

closeFilterBtn.addEventListener("click", function () {
    filtersMobile.classList.remove("is-show");
    main.classList.remove("overlay");
});

//catalog
catalog.onclick = function(event) {
    let target = event.target;

    for (let i = 0; i < catalogItem.length; i++) {
        if (target.classList.contains("catalog__imgText")) {
            target = target.parentNode.parentNode.parentNode;
            catalogItemArray.push(target);
            console.log(target);
            catalogItemArray[i].title = target.children[1].children[0].textContent;
            catalogItemArray[i].price = target.children[1].children[1].textContent;
            catalogItemArray[i].img = target.children[0].children[0].src;
            localStorage.setItem("Title", JSON.stringify(catalogItemArray[i].title));
            localStorage.setItem("Price", JSON.stringify(catalogItemArray[i].price));
            localStorage.setItem("Photo", JSON.stringify(catalogItemArray[i].img));
            return catalogItemArray;
        }
    }
};

