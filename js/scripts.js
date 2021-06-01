//  Menu Icon Function
const menuicon = document.getElementById('menuicon');
const options = document.getElementById('options');

function toggleOptions() {
  menuicon.classList.toggle('active');
  options.classList.toggle('active');
}

menuicon.addEventListener('click', () => {
  toggleOptions()
})


//  Gallery Lightbox Function
const everyImg = document.getElementsByClassName('img');
const lightbox = document.getElementById('gallerylightbox');
const lbImage = document.getElementById('imageClicked');
var scrolling;

function displayClickedImage(imageClicked) {
  image = document.getElementById(imageClicked).src;
  lightbox.classList.toggle('active');
  lbImage.src = image;
}

function closeLightBox() {
  lightbox.classList.toggle('active');
}

for (var i = 0 ; i < everyImg.length; i++) {

  everyImg[i].setAttribute('id', 'picture'+ i);
  let pictureID = `picture${i}`;

  everyImg[i].addEventListener('click', function () {
      displayClickedImage(pictureID);
  })
}