"use strict";

class Pizza {
    constructor(name, consist) {
        this.name = name;
        this.consist = consist;
        this._price = this.computedPrice();
        this._calories = this.computedCalories();
        this._img = this.setImgSource();
        this._imgList = this.setImgForList();
    }

    computedPrice() {
        let value = 65;
        this.consist.forEach(function (item) {
            switch (item) {
                case 'лимон':
                case 'дижонская горчица':
                    value += 2;
                    break;
                case 'помидор':
                case 'кукуруза':
                case 'грибы':
                case 'шампиньоны':
                case 'корнишоны':
                    value += 8;
                    break;
                case 'перец болгарский':
                case 'спаржа':
                case 'ананас':
                case 'сыр российский':
                case 'бекон':
                    value += 15;
                    break;
                case 'лук':
                case 'лук синий':
                case 'зелень':
                case 'рукколы':
                case 'оливки':
                case 'маслины':
                case 'орегано':
                case 'соус томатный':
                    value += 4;
                    break;
                case 'соус бешамель':
                case 'соус песто':
                    value += 6;
                    break;
                case 'филе куриное':
                case 'копченая курица':
                case 'охотничьи колбаски':
                case 'салями':
                case 'буженина':
                case 'мидии':
                case 'кальмары':
                case 'ветчина':
                    value += 25;
                    break;
                case 'моцарелла':
                case 'дор блю':
                case 'сыр пармезан':
                    value += 30;
                    break;
                case 'лосось':
                    value += 29;
                    break;
            }
        });

        return this._price = value;
    };

    computedCalories() {
        let value = 80;
        this.consist.forEach(function (item) {
            switch (item) {
                case 'лимон':
                case 'дижонская горчица':
                    value += 2 ;
                    break;
                case 'помидор':
                case 'кукуруза':
                case 'грибы':
                    value += 13 ;
                    break;
                case 'шампиньоны':
                case 'корнишоны':
                    value += 7;
                    break;
                case 'перец болгарский':
                case 'спаржа':
                case 'ананас':
                    value += 15;
                    break;
                case 'сыр российский':
                case 'бекон':
                case 'оливки':
                case 'маслины':
                    value += 49;
                    break;
                case 'лук':
                case 'лук синий':
                case 'зелень':
                case 'рукколы':
                    value += 16;
                    break;
                case 'орегано':
                case 'соус томатный':
                    value += 64;
                    break;
                case 'соус бешамель':
                case 'соус песто':
                    value += 68;
                    break;
                case 'филе куриное':
                case 'копченая курица':
                case 'охотничьи колбаски':
                case 'салями':
                case 'буженина':
                case 'мидии':
                case 'кальмары':
                case 'ветчина':
                    value += 89;
                    break;
                case 'моцарелла':
                case 'дор блю':
                case 'сыр пармезан':
                    value += 112;
                    break;
                case 'лосось':
                    value += 133;
                    break;
            }
        });

        return this._calories = value;
    }

    setImgSource() {
        let value = "";
        switch (this.name) {
            case "Вегетарианская":
                value = "img/vegan.jpg";
                break;
            case "4 сыра":
                value = "img/4syra.jpg";
                break;
            case "Дары моря":
                value = "img/dary-morya.jpg";
                break;
            case "Дижонская":
                value = "img/dizhon.jpg";
                break;
            case "Европейская":
                value = "img/evrop.jpg";
                break;
            case "Мясной бум":
                value = "img/myasbum.jpg";
                break;
            case "Маргарита":
                value = "img/margarita.jpg";
                break;
            case "Охотничья":
                value = "img/ohotnic.jpg";
                break;
            case "Палермо":
                value = "img/palermo.jpg";
                break;
            case "Тропикано":
                value = "img/gavaj.jpg";
                break;
            case "Пепперони":
                value = "img/pepperoni.jpg";
                break;
            case "Мясная сборная":
                value = "img/sbornaya.jpg";
                break;
            default:
                value = "img/default.jpg";
        }
        return this._img = value;
    }

    setImgForList() {
        return this._imgList = "img/pizza-piece.png";
    }
}
//pizzas
let vegetarian = new Pizza(
    "Вегетарианская",
    ["моцарелла", "маслины", "перец болгарский", "помидоры", "шампиньоны", "лук синий", "спаржа", "зелень", "орегано", "соус томатный"]
);

let fourCheese = new Pizza(
    "4 сыра",
    ["моцарелла", "дор блю", "пармезан", "сыр российский", "орегано", "соус бешамель"]
);

let seaGifts = new Pizza(
    "Дары моря",
    ["лосось", "мидии", "кальмары", "помидоры", "орегано", "соус томатный", "соус песто"]
);

let dizhon = new Pizza(
    "Дижонская",
    ["моцарелла", "корнишоны", "перец болгарский", "помидоры", "шампиньоны", "бекон", "дижонская горчица", "зелень", "орегано", "соус томатный"]
);

let european = new Pizza(
    "Европейская",
    ["моцарелла", "филе куриное", "охотничьи колбаски", "ветчина", "шампиньоны", "зелень", "орегано", "соус томатный"]
);

let meatBoom = new Pizza(
    "Мясной бум",
    ["моцарелла", "бекон", "охотничьи колбаски", "ветчина", "синий лук", "зелень", "орегано", "соус томатный"]
);

let margarita = new Pizza(
    "Маргарита",
    ["моцарелла", "помидоры", "орегано", "соус томатный"]
);

let hunterPizza = new Pizza(
    "Охотничья",
    ["моцарелла", "корнишоны", "охотничьи колбаски", "помидоры", "синий лук", "орегано", "соус томатный"]
);

let palermo = new Pizza(
    "Палермо",
    ["моцарелла", "копченая курица", "куриное филе", "помидоры", "орегано", "руккола", "соус томатный"]
);

let pepperoni = new Pizza(
    "Пепперони",
    ["моцарелла", "шампиньоны", "салями", "помидоры", "соус песто", "орегано", "соус песто", "соус томатный"]
);

let tropikano = new Pizza(
    "Тропикано",
    ["моцарелла", "ананас", "куриное филе", "орегано", "зелень", "соус томатный"]
);

let meatCollection = new Pizza(
    "Мясная сборная",
    ["моцарелла", "буженина", "охотничьи колбаски", "ветчина", "салями", "бекон", "маслины", "зелень", "орегано", "соус томатный"]
);

 class Menu {
     constructor() {
         this.items = [];
     }

     addPizza() {
         for (let i = 0; i < arguments.length; i++) {
             this.items.push(arguments[i]);
         }
         return this.items;
     }
 }

 let menu = new Menu;
 menu.addPizza(vegetarian, fourCheese, seaGifts, dizhon, european, meatBoom, margarita, hunterPizza,
     palermo, pepperoni, tropikano, meatCollection);

 //render
let header = document.createElement("h1");
header.innerHTML = "Pizza Menu";
let listBtn = document.createElement("button");
listBtn.innerHTML = "Show menu list";
let gridBtn = document.createElement("button");
gridBtn.innerHTML = "Show menu grid";
let btnWrap = document.createElement("div");
let menuWrap = document.createElement("div");
let listFilter = document.createElement("select");
let listFilterWrap = document.createElement("div");
let gridFilterWrap = document.createElement("div");
let filterOption1 = document.createElement("option");
let filterOption2 = document.createElement("option");
let filterOption22 = document.createElement("option");
let filterOption3 = document.createElement("option");
let filterOption33 = document.createElement("option");
let gridFilter1 = document.createElement("a");
let gridFilter2 = document.createElement("a");
let gridFilter3 = document.createElement("a");
let gridFilter4 = document.createElement("a");
let gridFilter5 = document.createElement("a");
let gridFilter6 = document.createElement("a");
let gridFilter7 = document.createElement("a");
let gridFilter8 = document.createElement("a");
let gridFilter9 = document.createElement("a");
let gridFilter10 = document.createElement("a");


setAttributes(gridFilter1, {"class": "filterItem", "href": "#", "data-value": "Перец болгарский"});
setAttributes(gridFilter2, {"class": "filterItem", "href": "#", "data-value": "Помидор"});
setAttributes(gridFilter3, {"class": "filterItem", "href": "#", "data-value": "Салями"});
setAttributes(gridFilter4, {"class": "filterItem", "href": "#", "data-value": "Шампиньоны"});
setAttributes(gridFilter5, {"class": "filterItem", "href": "#", "data-value": "Синий лук"});
setAttributes(gridFilter6, {"class": "filterItem", "href": "#", "data-value": "Морепродукты"});
setAttributes(gridFilter7, {"class": "filterItem", "href": "#", "data-value": "Охотничьи колбаски"});
setAttributes(gridFilter8, {"class": "filterItem", "href": "#", "data-value": "Куриное филе"});
setAttributes(gridFilter9, {"class": "filterItem", "href": "#", "data-value": "Буженина"});
setAttributes(gridFilter10, {"class": "filterItem", "href": "#", "data-value": "Бекон"});


document.body.appendChild(header);
document.body.appendChild(btnWrap);
btnWrap.appendChild(listBtn);
btnWrap.appendChild(gridBtn);


listBtn.addEventListener("click", function () {
    removeElement(gridFilterWrap);
    menuWrap.classList.remove("grid");
    menuWrap.classList.add("list");
    clearMenu();
    renderMenuItem(menu.items);
    createFilters();
}, false);

gridBtn.addEventListener("click", function () {
    removeElement(listFilterWrap);
    menuWrap.classList.remove("list");
    menuWrap.classList.add("grid");
    clearMenu();
    renderMenuItem(menu.items);
    createFilters();
}, false);

//rendering
function renderMenuItem(arr) {
    document.body.appendChild(menuWrap);
    menuWrap.classList.add("menuWrap");
    for (let i = 0; i < arr.length; i++) {
        let menuItem = document.createElement("article");
        let pizzaImgWrap = document.createElement("div");
        let pizzaImg = document.createElement("img");
        let pizzaDescr = document.createElement("div");
        let pizzaName = document.createElement("h1");
        let pizzaPrice = document.createElement("div");
        let pizzaConsist = document.createElement("div");
        let pizzaCalories = document.createElement("div");

        menuWrap.appendChild(menuItem);
        menuItem.classList.add("menuItem");
        menuItem.appendChild(pizzaImgWrap);
        pizzaImgWrap.classList.add("pizzaImgWrap");
        pizzaImgWrap.appendChild(pizzaImg);
        if (menuWrap.classList.contains("list")) {
            pizzaImg.setAttribute("src", arr[i]._imgList);
        }
        if (menuWrap.classList.contains("grid")) {
            pizzaImg.classList.add("pizzaImg");
            pizzaImg.setAttribute("src", arr[i]._img);
        }
        menuItem.appendChild(pizzaDescr);
        pizzaDescr.classList.add("pizzaDescr");
        pizzaDescr.appendChild(pizzaName);
        pizzaName.classList.add("pizzaName");
        pizzaName.innerHTML = arr[i].name;
        pizzaDescr.appendChild(pizzaConsist);
        pizzaConsist.classList.add("pizzaConsist");
        pizzaConsist.innerHTML = "Состав: ";
        arr[i].consist.forEach(function (element) {
            let ingredientWrap = document.createElement("div");
            let inputNum = document.createElement("input");
            setAttributes(inputNum, {"class": "counter", "type": "number", "name": element, "value": 1, "min": 0, "max": 2});
            let label = document.createElement("label");
            pizzaConsist.appendChild(ingredientWrap);
            ingredientWrap.classList.add("ingredientWrap");
            ingredientWrap.appendChild(inputNum);
            ingredientWrap.appendChild(label);
            label.innerHTML = element;
            //arr[i].consist.join(', ');
        });
        pizzaDescr.appendChild(pizzaPrice);
        pizzaPrice.classList.add("pizzaPrice");
        pizzaPrice.innerHTML = arr[i]._price + " грн";
        pizzaDescr.appendChild(pizzaCalories);
        pizzaCalories.classList.add("pizzaCalories");
        pizzaCalories.innerHTML = arr[i]._calories + " Ккал";
    }
}

function createFilters() {
    if (menuWrap.classList.contains("list")) {
        document.body.insertBefore(listFilterWrap, document.body.childNodes[4]);
        listFilterWrap.classList.add("listFilterWrap");
        listFilterWrap.appendChild(listFilter);
        listFilter.classList.add("filter");
        filterOption1.text = "Сортировать по умолчанию";
        filterOption1.value = "default";
        listFilter.add(filterOption1);
        filterOption2.text = "По цене вверх";
        filterOption2.value = "priceUp";
        listFilter.add(filterOption2);
        filterOption22.text = "По цене вниз";
        filterOption22.value = "priceDown";
        listFilter.add(filterOption22);
        filterOption3.text = "По названию вверх";
        filterOption3.value = "nameUp";
        listFilter.add(filterOption3);
        filterOption33.text = "По названию вниз";
        filterOption33.value = "nameDown";
        listFilter.add(filterOption33);
    }

    if (menuWrap.classList.contains("grid")) {
        document.body.insertBefore(gridFilterWrap, document.body.childNodes[4]);
        gridFilterWrap.classList.add("gridFilterWrap");
        gridFilterWrap.appendChild(gridFilter1);
        gridFilter1.innerHTML = "Перец болгарский";
        gridFilterWrap.appendChild(gridFilter2);
        gridFilter2.innerHTML = "Помидор";
        gridFilterWrap.appendChild(gridFilter3);
        gridFilter3.innerHTML = "Салями";
        gridFilterWrap.appendChild(gridFilter4);
        gridFilter4.innerHTML = "Шампиньоны";
        gridFilterWrap.appendChild(gridFilter5);
        gridFilter5.innerHTML = "Синий лук";
        gridFilterWrap.appendChild(gridFilter6);
        gridFilter6.innerHTML = "Морепродукты";
        gridFilterWrap.appendChild(gridFilter7);
        gridFilter7.innerHTML = "Охотничьи колбаски";
        gridFilterWrap.appendChild(gridFilter8);
        gridFilter8.innerHTML = "Куриное филе";
        gridFilterWrap.appendChild(gridFilter9);
        gridFilter9.innerHTML = "Буженина";
        gridFilterWrap.appendChild(gridFilter10);
        gridFilter10.innerHTML = "Бекон";
    }
}

//handlers
listFilter.onclick = function (e) {
    let target = e.target;

    if (target.value === "nameUp") {
        clearMenu();
        let nameArray = [...menu.items];
        nameArray = nameArray.sort(passName);
        renderMenuItem(nameArray);
    }

    if (target.value === "priceUp") {
        clearMenu();
        let priceArray = [...menu.items];
        priceArray = priceArray.sort(passPrice);
        renderMenuItem(priceArray);
    }

    if (target.value === "nameDown") {
        clearMenu();
        let nameArray = [...menu.items];
        nameArray = nameArray.sort(passName).reverse();
        renderMenuItem(nameArray);
    }

    if (target.value === "priceDown") {
        clearMenu();
        let priceArray = [...menu.items];
        priceArray = priceArray.sort(passPrice).reverse();
        renderMenuItem(priceArray);
    }

    if (target.value === "default") {
        clearMenu();
        renderMenuItem(menu.items);
    }
};

gridFilterWrap.onclick = function (e) {
    e.preventDefault();
    e.preventDefault();
    let target = e.target;
    switch (target.getAttribute("data-value")) {
        case "Перец болгарский":
            clearMenu();
            let filteredArr1 = menu.items.filter(function(item) {
                return item.consist.includes("перец болгарский");
            });
            renderMenuItem(filteredArr1);
            break;
        case "Помидор":
            clearMenu();
            let filteredArr2 = menu.items.filter(function(item) {
                return item.consist.includes("помидоры");
            });
            renderMenuItem(filteredArr2);
            break;
        case "Салями":
            clearMenu();
            let filteredArr3 = menu.items.filter(function(item) {
                return item.consist.includes("салями");
            });
            renderMenuItem(filteredArr3);
            break;
        case "Шампиньоны":
            clearMenu();
            let filteredArr4 = menu.items.filter(function(item) {
                return item.consist.includes("шампиньоны");
            });
            renderMenuItem(filteredArr4);
            break;
        case "Синий лук":
            clearMenu();
            let filteredArr5 = menu.items.filter(function(item) {
                return item.consist.includes("синий лук");
            });
            renderMenuItem(filteredArr5);
            break;
        case "Морепродукты":
            clearMenu();
            let filteredArr6 = menu.items.filter(function(item) {
                return item.consist.includes("лосось") ||
                 item.consist.includes("мидии") ||
                 item.consist.includes("кальмары");
            });
            renderMenuItem(filteredArr6);
            break;
        case "Охотничьи колбаски":
            clearMenu();
            let filteredArr7 = menu.items.filter(function(item) {
                return item.consist.includes("охотничьи колбаски");
            });
            renderMenuItem(filteredArr7);
            break;
        case "Куриное филе":
            clearMenu();
            let filteredArr8 = menu.items.filter(function(item) {
                return item.consist.includes("куриное филе");
            });
            renderMenuItem(filteredArr8);
            break;
        case "Буженина":
            clearMenu();
            let filteredArr9 = menu.items.filter(function(item) {
                return item.consist.includes("буженина");
            });
            renderMenuItem(filteredArr9);
            break;
        case "Бекон":
            clearMenu();
            let filteredArr10 = menu.items.filter(function(item) {
                return item.consist.includes("бекон");
            });
            renderMenuItem(filteredArr10);
            break;
    }

    if (!target) {
        return;
    }
};

menuWrap.onclick = function(e) {
    let target = e.target;
    if (menuWrap.classList.contains("grid")) {

        while (target != menuWrap) {
            if (target.classList.contains("menuItem")) {
                showImg(target);
                return;
            }
            if (target.classList.contains("counter")) {
                console.log(target);
                target.oninput = function () {
                    let value = Number(target.value);
                    console.log(value);
                    let ingredientName = e.target.name;
                    let name = document.getElementsByClassName("pizzaName");
                    while (target != name) {
                        let pizzaName = target.parentNode.parentNode.previousSibling.textContent;
                        let pizzaPrice = target.parentNode.parentNode.nextSibling;
                        let pizzaCalories = target.parentNode.parentNode.nextSibling.nextSibling;
                        console.log(pizzaPrice, pizzaCalories);
                        return changePizzaConsist(pizzaName, ingredientName, pizzaPrice, pizzaCalories, value);
                    }
                };
                return;
            }
            target = target.parentNode;
        }
        if (!target) {
            return;
        }
    }
};

function changePizzaConsist(pizza, ingredient, price, calories, value) {
    for(let i = 0; i < menu.items.length; i++) {
        if (menu.items[i].name === pizza) {
            let consist = menu.items[i].consist;
            if(value === 0) {
                while (consist.includes(ingredient)) {
                    let ingredientIndex = consist.indexOf(ingredient);
                    console.log("ingredientIndex" + ingredientIndex);
                    consist.splice(ingredientIndex, 1);
                    console.log(consist);
                }
            }
            if(value === 1) {
                while (consist.includes(ingredient)) {
                    let ingredientIndex = consist.indexOf(ingredient);
                    console.log("ingredientIndex" + ingredientIndex);
                    consist.splice(ingredientIndex, 1);
                    console.log(consist);
                }
                consist.push(ingredient);
            }
            if(value === 2) {
                while (consist.includes(ingredient)) {
                    let ingredientIndex = consist.indexOf(ingredient);
                    console.log("ingredientIndex" + ingredientIndex);
                    consist.splice(ingredientIndex, 1);
                    console.log(consist);
                }
                consist.push(ingredient);
                consist.push(ingredient);
            }
            menu.items[i] = new Pizza(menu.items[i].name, menu.items[i].consist);
            price.innerHTML = menu.items[i]._price + " грн";
            calories.innerHTML = menu.items[i]._calories + " Ккал";
            return;
        }
    }
};

//additional functions
function showImg(item) {
    item.classList.toggle("show");
}

function clearMenu() {
    while (menuWrap.hasChildNodes()) {
        menuWrap.removeChild(menuWrap.lastChild);
    }
}

function removeElement(element) {
    element.remove();
}

function extractNameFromItem(item) {
    let nameValue = item.name;
    return nameValue;
}

function extractPriceFromItem(item) {
    let priceValue = item._price;
    return priceValue;
}

function extractConsistFromItem(item) {
    let consistValue = item.consist;
    return consistValue;
}

function passName(item1, item2) {
    item1 = extractNameFromItem(item1);
    item2 = extractNameFromItem(item2);
    if (item1 > item2) {
        return 1;
    } else if (item1 < item2) {
        return -1;
    } else if (item1 === item2) {
        return 0;
    }
}

function passPrice(item1, item2) {
    return extractPriceFromItem(item1) - extractPriceFromItem(item2);
}

function setAttributes(element, options) {
    Object.keys(options).forEach(function(attr) {
        element.setAttribute(attr, options[attr]);
    });
};

function filterByIngredients(parameter) {
    return menu.items.includes(parameter);
}
