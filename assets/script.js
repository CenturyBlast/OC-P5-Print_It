// Tableau Image et sous-titre (x4)

const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Fonctions à créer et variables à déclarer en amont
let slideNumber = 0

// Phase 4 : 
// J'appelle l'élément <img> qui contient l'image 
const bannerImage = document.querySelector(".banner-img");
// J'appelle l'élément <p> qui contient le sous-titre
const subTitle = document.querySelector("#banner p");
// Phase 4/5 : Je crée une fonction pour lier le click sur 
// flèche au changement de bullet point :
function switchSlide(n) {
	// Je selectionne tous les dots et les place dans un array "dots" 
	const dots = document.querySelectorAll(".dot");
	// Je supprime la classe sur le dot de départ
	dots[slideNumber].classList.remove("dot_selected"); 
	// J'incrémente (+1/-1) la variable slideNumber
	slideNumber += n;
	console.log(slideNumber , "slide number")
	// Si le slide est inférieur à 0, on déclare :
	if (slideNumber < 0) {
	  slideNumber = slides.length - 1; 
	console.log(slides.length - 1)
	// Et si le slide est égal ou sup à la longueur de l'array : 
	} else if (slideNumber >= slides.length) {
	  slideNumber = 0; 
	}
	animation();
	// J'ajoute la classe selected sur le dot actuel
	dots[slideNumber].classList.add("dot_selected");
}

// Phase 4/5 : Adaptation du contenu
function animation() {
	// Je donne le chemin des nouvelles images via une interpolation
	bannerImage.setAttribute("src", `./assets/images/slideshow/${slides[slideNumber].image}`);
	// Je donne de nouveaux sous-titres avec la propriété innerHTML
	subTitle.innerHTML = slides[slideNumber].tagLine;
}

// Gestion des flèches du carrousel

const arrowL = document.getElementById("arrowL");
// Phase 2.2 : J'ajoute les écouteurs d'évènement dans 
// le script.js pour la flèche gauche: 
arrowL.addEventListener("click", () => {
	console.log("Revenir");
	// Phase 4/5 : Je recule d'une slide
	switchSlide(-1);
});

const arrowR = document.getElementById("arrowR");
// Phase 2.3 : Et pour la flèche droite:
arrowR.addEventListener("click", () => {
	console.log("Avancer");
	// Phase 4/5 : J'avance d'une slide
	switchSlide(1);
});
// Phase 2.4 : La console me renvoie bien Revenir et Avancer quand je clique 
// sur la flèche gauche et droite respectivement

// Gestion des points du carrousel

// Phase 3.1 : Je crée une div bullet point par slide
for (let i = slideNumber; i < slides.length; i++) {
	const bulletPoint = document.createElement("div");
	bulletPoint.classList.add("dot");
	const bulletPointList = document.querySelector(".dots");
	bulletPointList.appendChild(bulletPoint);
	// Phase 3.2 : Je différencie le point qui signale la diapositive de départ
	if (i === slideNumber) {
		bulletPoint.classList.add("dot_selected");
	}
}