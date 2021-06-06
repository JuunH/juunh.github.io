//  Menu Icon Function


//  Get element with class menu-icon.
const icon = document.querySelector(".menu-icon");
//  Get element with class nav-mobile.
const options = document.getElementById('nav-mobile');

icon.addEventListener("click", () => {
  //  Play animation to change menu icon state.
  icon.classList.toggle("clicked");
  //  Display the mobile navigation menu.
  options.classList.toggle("show");
});


// ----------------------------------------------------------


//  Change page function


//  Get all link elements.
const links = document.getElementsByClassName('link')
console.log(links)

//  Main switch page function.
function switchElements(element) {
  //  Get current active page.
  let activeElement = document.getElementsByClassName('active')
  //  For every active element ( If more than one ).
  for (var i = 0 ; i < activeElement.length; i++) {
    //  Hide the current active element.
    activeElement[i].classList.toggle('active')
  }
  //  Toggle menu icon state and hide mobile nav ( From Prev Function )
  icon.classList.toggle("clicked");
  options.classList.toggle("show");
  //  Put received page attribute to showElement.
  let showElement = document.getElementById(element)
  //  Show the element with the input atrribute name.
  showElement.classList.toggle('active')
}

//  For every link element.
for (var i = 0 ; i < links.length; i++) {
  //  Get the set page name attribute from the link element.
  let pagename = links[i].getAttribute('page')
  //  Add an event listener with the attribute as an arguement.
  links[i].addEventListener('click', () => {
    //  Execute the function on click.
    switchElements(pagename)
  })
}



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


// ----------------------------------------------------------

