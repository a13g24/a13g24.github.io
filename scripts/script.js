let slidesContainer = document.getElementById("slider-container");
let slide = document.querySelector(".slider__slide");
let prevButton = document.getElementById("slider-arrow-prev");
let nextButton = document.getElementById("slider-arrow-next");

nextButton.addEventListener("click", (e) => {
    let slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", (e) => {
    let slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});