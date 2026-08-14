const nav = document.querySelector(".nav");

function setNavDividers() {
    if (!nav) {
        return;
    }

    nav.querySelectorAll(".nav__divider").forEach((divider) => divider.remove());

    const links = [...nav.querySelectorAll(".nav__link")];
    const navRect = nav.getBoundingClientRect();

    links.slice(0, -1).forEach((link, index) => {
        const currentRect = link.getBoundingClientRect();
        const nextRect = links[index + 1].getBoundingClientRect();

        const middle = currentRect.right + (nextRect.left - currentRect.right) / 2;

        const divider = document.createElement("span");
        divider.className = "nav__divider";
        divider.style.left = `${middle - navRect.left}px`;

        nav.append(divider);
    });
}

window.addEventListener("load", setNavDividers);
window.addEventListener("resize", setNavDividers);


//slider 
if (document.querySelector(".results__slider") && window.Swiper) {
    const resultsSection = document.querySelector(".results");
    const getSliderOffsets = () => {
        const resultsRect = resultsSection.getBoundingClientRect();

        return {
            before: resultsRect.left,
            after: window.innerWidth - resultsRect.right,
        };
    };
    const sliderOffsets = getSliderOffsets();

    const resultsSwiper = new Swiper(".results__slider", {
        slidesPerView: 1.08,
        spaceBetween: 8,
        speed: 550,
        slidesOffsetBefore: sliderOffsets.before,
        slidesOffsetAfter: sliderOffsets.after,
        navigation: {
            prevEl: ".slider-nav__btn--prev",
            nextEl: ".slider-nav__btn--next",
        },
        breakpoints: {
            768: {
                slidesPerView: 1.45,
            },
            1024: {
                slidesPerView: 2.15,
            },
        },
    });

    window.addEventListener("resize", () => {
        const sliderOffsets = getSliderOffsets();

        resultsSwiper.params.slidesOffsetBefore = sliderOffsets.before;
        resultsSwiper.params.slidesOffsetAfter = sliderOffsets.after;
        resultsSwiper.update();
    });
}


//FAQ
const faqs = document.querySelectorAll(".faq__item");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        const isActive = faq.classList.contains("faq__item_active");

        faqs.forEach((item) => {
            item.classList.remove("faq__item_active");
        });

        if (!isActive) {
            faq.classList.add("faq__item_active");
        }
    });
});
