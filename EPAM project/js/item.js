const itemParameter = document.getElementsByClassName("item__parameter");
const galery = document.getElementsByClassName("item__galeryBlock_thumbnails")[0];
const mainPhoto = document.getElementsByClassName("item__img_full")[0];

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