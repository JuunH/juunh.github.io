// ----------------------------------------------------------


//  Menu Icon Function


const icon = document.querySelector(".menu-icon");
const options = document.getElementById('nav-mobile');

icon.addEventListener("click", () => {
  icon.classList.toggle("clicked");
  options.classList.toggle("show");
});


// ----------------------------------------------------------


//  Change page function


const links = document.getElementsByClassName('link')
console.log(links)


function switchElements(element) {
  let activeElement = document.getElementsByClassName('active')
  for (var i = 0 ; i < activeElement.length; i++) {
    activeElement[i].classList.toggle('active')
  }
  icon.classList.toggle("clicked");
  options.classList.toggle("show");
  let showElement = document.getElementById(element)
  showElement.classList.toggle('active')
}

//  Change page without displaying mobile nav menu.
function hyperlinkSwitch(element) {
  let activeElement = document.getElementsByClassName('active')
  for (var i = 0 ; i < activeElement.length; i++) {
    activeElement[i].classList.toggle('active')
  }
  let showElement = document.getElementById(element)
  showElement.classList.toggle('active')
}


for (var i = 0 ; i < links.length; i++) {
  let pagename = links[i].getAttribute('page')
  links[i].addEventListener('click', () => {
    switchElements(pagename)
  })
}



// ----------------------------------------------------------


//  Gallery Lightbox Function


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


// ----------------------------------------------------------

