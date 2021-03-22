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
const clickedImageCaption = document.getElementById('imageCaption');


function displayClickedImage(imageClicked) {
  
  image = document.getElementById(imageClicked).src;
  var caption = document.getElementById(imageClicked).alt;
  
  lightbox.classList.toggle('active');

  lbImage.src = image;
  clickedImageCaption.p = caption;
}

function closeLightBox() {
  lightbox.classList.toggle('active');
}


for (var i = 0 ; i < everyImg.length; i++) {

  everyImg[i].setAttribute('id', 'picture'+ i);

  let pictureID = 'picture' + i;
  console.log(pictureID)
  
  everyImg[i].addEventListener('click' , () => {

    console.log(pictureID)
    displayClickedImage(pictureID)
  
  })
}
