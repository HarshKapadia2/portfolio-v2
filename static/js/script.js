const ul = document.querySelector(".navbar-ul");
const burgerMenu = document.querySelector(".burger-menu");
const header = document.querySelector("header");
const headerTitle = document.querySelector("#header-title");
const borderDisplayIndicator = document.querySelector(
	"#header-border-indicator"
);
const main = document.querySelector("main");
const mainImg = document.querySelector("#main-col-2 .icon");

const DEFAULT_LANDING_IMG_PATH =
	"static/img/harsh-kapadia-512x512-circle-landing.png";
const HACKMIT_LANDING_IMG_PATH = "static/img/hackmit-2023-landing.png";

// Header title
const observer1 = new IntersectionObserver(displayHeaderTitle);
observer1.observe(main);

// Header border
const observer2 = new IntersectionObserver(displayHeaderBorder);
observer2.observe(borderDisplayIndicator);

// For burger menu
burgerMenu.addEventListener("click", (event) => {
	ul.classList.toggle("hide-burger-menu");
	event.stopPropagation();
});

window.addEventListener("click", () => {
	ul.classList.add("hide-burger-menu");
});

// For home page picture swapping
mainImg.addEventListener(
	"mouseover",
	() => {
		mainImg.src = HACKMIT_LANDING_IMG_PATH;
	},
	{ passive: true }
);

mainImg.addEventListener(
	"mouseout",
	() => {
		mainImg.src = DEFAULT_LANDING_IMG_PATH;
	},
	{ passive: true }
);

mainImg.addEventListener("click", () => {
	const imgSrc = mainImg.src;

	if (imgSrc.indexOf(DEFAULT_LANDING_IMG_PATH) >= 0) {
		mainImg.src = HACKMIT_LANDING_IMG_PATH;
	} else {
		mainImg.src = DEFAULT_LANDING_IMG_PATH;
	}
});

// Utility functions
function displayHeaderTitle(entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting)
			headerTitle.classList.add("hidden-visibility");
		else headerTitle.classList.remove("hidden-visibility");
	});
}

function displayHeaderBorder(entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) header.classList.remove("header-border");
		else header.classList.add("header-border");
	});
}
