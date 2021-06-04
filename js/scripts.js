//  Menu Icon Function  //

const icon = document.querySelector(".menu-icon");
const options = document.getElementById('options');

icon.addEventListener("click", () => {
  icon.classList.toggle("clicked");
  options.classList.toggle("active");
});


//  Fade in on scroll animation  //

const cardArray = document.getElementsByClassName('card')
const galleryArray = document.getElementsByClassName('imagecontainer')

document.addEventListener('scroll', function(e) {
  for (var i = 0 ; i < cardArray.length; i++) {
    var topWindow = document.documentElement.clientHeight
    var botWindow = document.documentElement.scrollTop + topWindow
    if (cardArray[i].offsetTop < botWindow) {
      cardArray[i].classList.add('fadein')
    }
  }
  for (var i = 0 ; i < galleryArray.length; i++) {
    var topWindow = document.documentElement.clientHeight
    var botWindow = document.documentElement.scrollTop + topWindow
    if (galleryArray[i].offsetTop < botWindow) {
      galleryArray[i].classList.add('fadein')
    }
  }
});


// //  Gallery Lightbox Function   //


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