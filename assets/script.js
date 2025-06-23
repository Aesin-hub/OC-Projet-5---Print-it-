const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Flèches
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

arrowLeft.addEventListener("click", () => {
	currentSlide--;
	if (currentSlide < 0) {
		currentSlide = slides.length - 1;
	}
	updateSlide(currentSlide);
});

arrowRight.addEventListener("click", () => {
	currentSlide++;
	if (currentSlide >= slides.length) {
		currentSlide = 0;
	}
	updateSlide(currentSlide);
});

// Dots
const dotsContainer = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
	const dot =document.createElement("span");
	dot.classList.add("dot");

	if (i === 0) {
		dot.classList.add("dot_selected");
	}

	dotsContainer.appendChild(dot);
}

// Carrousel
let currentSlide = 0;

function updateSlide(index) {
	const bannerImg = document.querySelector(".banner-img");
	const tagLine = document.querySelector("#banner p");
	const dots = document.querySelectorAll(".dot");

	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;

	tagLine.innerHTML = slides[index].tagLine;

	dots.forEach((dot, i) => {
		dot.classList.remove("dot_selected");
		if (i === index) {
			dot.classList.add("dot_selected");
		}
	});
}

