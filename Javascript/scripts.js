//  Menu Icon Function  //


const menuicon = document.getElementById('menuicon');
const options = document.getElementById('options');


function toggleOptions() {
  menuicon.classList.toggle('active');
  options.classList.toggle('active');
}


menuicon.addEventListener('click', () => {
  toggleOptions()
})


document.addEventListener('scroll', function(e) {
  const cardArray = document.getElementsByClassName('card')
  for (var i = 0 ; i < cardArray.length; i++) {
    var topWindow = document.documentElement.clientHeight
    var botWindow = document.documentElement.scrollTop + topWindow
    if (cardArray[i].offsetTop < botWindow) {
      cardArray[i].classList.add('fadein')
    } else {
      cardArray[i].classList.remove('fadein')
    }
  }
});


// //  Dark Mode Function  //


// const dmIcon = document.getElementById('darkmodeIcon');
// const allElements = document.getElementsByTagName('*')


// function toggleDarkmode (allElements) {
  // for (var i = 0 ; i < allElements.length; i++) {
  //   allElements[i].classList.toggle('darkmode');
  // }
// }


// dmIcon.addEventListener('click', () => {
//   toggleDarkmode(allElements)
//   dmIcon.classList.toggle('active')
// })


// //  Switch Content Function  //


// const about = document.getElementById('about')
// const projects = document.getElementById('projects')
// const designs = document.getElementById('cert')
// const gallery = document.getElementById('gallery')
// const links = document.getElementsByClassName('link')
// const returnIcon = document.getElementById('returnIcon')

// function switchElements(element) {

//   let activeElement = document.getElementsByClassName('show')

//   for (var i = 0 ; i < activeElement.length; i++) {
//     activeElement[i].classList.toggle('show')
//   }

//   let showElement = document.getElementById(element)
//   if (showElement.id == 'home') {
//     returnIcon.classList.remove('active')
//   }
//   else {
//     returnIcon.classList.add('active')
//   }
//   showElement.classList.toggle('show')
// }


// for (var i = 0 ; i < links.length; i++) {

//   let pagename = links[i].getAttribute('page')

//   links[i].addEventListener('click', () => {

//     switchElements(pagename)

//   })
// }


// //  Gallery Lightbox Function   //


// const everyImg = document.getElementsByClassName('img');
// const lightbox = document.getElementById('gallerylightbox');
// const lbImage = document.getElementById('imageClicked');
// var scrolling;


// function displayClickedImage(imageClicked) {
//   image = document.getElementById(imageClicked).src;
//   lightbox.classList.toggle('active');
//   lbImage.src = image;
// }

// function closeLightBox() {
//   lightbox.classList.toggle('active');
// }


// for (var i = 0 ; i < everyImg.length; i++) {

//   everyImg[i].setAttribute('id', 'picture'+ i);
//   let pictureID = `picture${i}`;

//   everyImg[i].addEventListener('click', function () {
//       displayClickedImage(pictureID);
//   })

//   everyImg[i].addEventListener('touchstart', function () {
//     displayClickedImage(pictureID);
//   })
// }
