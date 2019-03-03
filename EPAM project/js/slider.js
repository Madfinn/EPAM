const slider = document.getElementsByClassName("sliderSection")[0];
const sliderImg = document.getElementsByClassName("slider__img");
const paginationBlock = document.getElementsByClassName("slider__pagination")[0];

for(let i = 0; i < sliderImg.length ; i++) {
    let paginationItem = document.createElement("div");
    paginationItem.classList.add("slider__paginationItem");
    paginationBlock.appendChild(paginationItem);
    if(i === 0) {
        paginationItem.classList.add("is-active");
    }
}

const paginationItem = document.getElementsByClassName("slider__paginationItem");

slider.onclick = function(event) {
    let target = event.target;

    if(target.classList.contains("left")) {
        for(let i = sliderImg.length - 1; i >= 0  ; i--) {
            if (sliderImg[i].classList.contains("is-active")) {
                console.log(i);
                sliderImg[i].classList.remove("is-active");
                paginationItem[i].classList.remove("is-active");
                if(i == 0) {
                    sliderImg[i].classList.add("is-active");
                    paginationItem[i].classList.add("is-active");
                    break;
                }
                i--;
                sliderImg[i].classList.add("is-active");
                paginationItem[i].classList.add("is-active");
                break;
            }
        }
    }

    if(target.classList.contains("right")) {
        for(let i = 0; i < sliderImg.length ; i++) {
            if (sliderImg[i].classList.contains("is-active")) {
                console.log(i);
                sliderImg[i].classList.remove("is-active");
                paginationItem[i].classList.remove("is-active");

                if(i == sliderImg.length - 1) {
                    sliderImg[i].classList.add("is-active");
                    paginationItem[i].classList.add("is-active");
                    break;
                }
                i++;
                sliderImg[i].classList.add("is-active");
                paginationItem[i].classList.add("is-active");
                break;
            }
        }
    }
};

