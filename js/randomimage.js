const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["spring.jpg", "autumn.jpg", "summer.jpg", "winter.jpg"];


myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    image.src = "images/" + images[randomIndex];

}