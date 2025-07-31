const images = [
	"images/slide1.png",
	"images/slide2.png",
	"images/slide3.png",
	"images/slide4.png",
	"images/slide5.png"
];

let index = 0;
const slideImage = document.getElementById("slide-image");

setInterval(() => {
	index = (index + 1) % images.length;
	slideImage.src = images[index];
}, 4000)