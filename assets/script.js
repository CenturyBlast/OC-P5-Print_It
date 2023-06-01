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

//Gestion des flèches du carrousel

const arrowL = document.getElementById("arrowL");
// Phase 2 : J'ajoute les écouteurs d'évènement dans 
// le script.js, pour la flèche gauche: 
arrowL.addEventListener("click", () => {
	console.log("Revenir")
});

const arrowR = document.getElementById("arrowR");
// et pour la flèche droite:
arrowR.addEventListener("click", () => {
	console.log("Avancer")
});
// La console me renvoie bien Revenir et Avancer quand je clique sur la flèche gauche et droite respectivement

//Gestion des points du carrousel

// Phase 3 : Je crée une div bullet point par slide
for (let i = 0; i < slides.length; i++) {
	const bulletPoint = document.createElement("div");
	bulletPoint.classList.add("dot");
	const bulletPointList = document.querySelector(".dots");
	bulletPointList.appendChild(bulletPoint);
	// Je différencie le point qui signale la diapositive en cours de visionnage
	if (i === 0) {
		bulletPoint.classList.add("dot_selected");
	}
}










