//  Menu Icon Function  //


const menuicon = document.getElementById('menuIcon');
const menu = document.getElementById('menu');


menuicon.addEventListener('click', () => {

  menuicon.classList.toggle('active');
  menu.classList.toggle('active');

})



//  Gallery Lightbox Function //


const everyImg = document.getElementsByClassName('img');
const lightbox = document.getElementById('gallerylightbox');
const lbImage = document.getElementById('imageClicked');


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


//  Darkmode Function  //


const dmicon = document.getElementById('darkmodeIcon');
const page = document.getElementsByTagName('*')
let mode = localStorage.getItem("darkmode");


if (mode == 'enabled') {
  darkmode(page)
}


function darkmode(elements) {
  for (var i = 0 ; i < elements.length; i++) {

    elements[i].classList.toggle('darkmode');
  
  }
}


dmicon.addEventListener('click', () => {

  darkmode(page)
  dmicon.classList.toggle('active')

  if (mode == 'disabled') {
    localStorage.setItem("darkmode", "enabled")
  }
  else if (mode == 'enabled') {
    localStorage.setItem("darkmode", "disabled")
  }

})


