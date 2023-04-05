// ----------------------------------------------------------


//  Menu Icon Function


const icon = document.querySelector(".menu-icon");
const nav_mobile = document.getElementById('nav-mobile');

icon.addEventListener("click", () => {
  icon.classList.toggle("clicked");
  nav_mobile.classList.toggle("show");
});


// ----------------------------------------------------------


// Change Page Function


function loadPage(url, selector) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      // load specific element from selected html page
      const newContent = document.createRange().createContextualFragment(html).querySelector(selector);
      // Select node 'main' from current page
      const currentContent = document.querySelector(selector);

      newContent.classList.add('hidden');
      currentContent.classList.add('hidden');

      setTimeout(() => {
        currentContent.innerHTML = newContent.innerHTML;
        
        // Add link event listener to any newly loaded link elements
        var links = currentContent.querySelectorAll('a');
        addLinkListener(links);

        currentContent.classList.remove('hidden');
      }, 300); // 300ms timeout
    })

    .catch(error => console.error(error));
}


function addLinkListener(links) {
  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); // Disable loading the linked page

      loadPage(link.href, 'main');
  
      // If not already, revert menu icon and mobile menu back to original state
      if (nav_mobile.classList.contains('show') && icon.classList.contains('clicked')) {
        icon.classList.toggle('clicked');
        nav_mobile.classList.toggle('show');
      }
    });
  });
}

var links = document.querySelectorAll('a');
addLinkListener(links);


// ----------------------------------------------------------


//  Gallery Lightbox Function

// const everyImg = document.getElementsByClassName('img');
// const lightbox = document.getElementById('gallerylightbox');
// const lbImage = document.getElementById('imageClicked');


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
// }

