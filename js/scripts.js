//  Menu Icon Function


//  Get element with class menu-icon.
const icon = document.querySelector(".menu-icon");
//  Get element with class nav-mobile.
const options = document.getElementById('nav-mobile');

icon.addEventListener("click", () => {
  //  Play animation to change menu icon state.
  icon.classList.toggle("clicked");
  //  Display the mobile navigation menu.
  options.classList.toggle("active");
});


// ----------------------------------------------------------


//  Gallery Lightbox Function


//  Get all images with 'img' class.
const everyImg = document.getElementsByClassName('img');
//  Get lightbox.
const lightbox = document.getElementById('gallerylightbox');
//  Get element that will contain the clicked image.
const lbImage = document.getElementById('imageClicked');

function displayClickedImage(imageClicked) {
  //  Set image to the clicked image's Picture ID.
  image = document.getElementById(imageClicked).src;
  //  Show lightbox.
  lightbox.classList.toggle('active');
  //  Set lightbox image container to contain the clicked image.
  lbImage.src = image;
}
function closeLightBox() {
  //  Hide the lightbox.
  lightbox.classList.toggle('active');
}

//  For every image in everyImg array.
for (var i = 0 ; i < everyImg.length; i++) {
  //  Set an ID to the image in position number i.
  everyImg[i].setAttribute('id', 'picture'+ i);
  let pictureID = `picture${i}`;

  everyImg[i].addEventListener('click', function () {
      displayClickedImage(pictureID);
  })
}