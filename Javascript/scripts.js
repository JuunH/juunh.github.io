//  Menu Icon Function  //


const menuicon = document.getElementById('menuIcon');
const menu = document.getElementById('menu');


menuicon.addEventListener('click', () => {
  menuicon.classList.toggle('active');
  menu.classList.toggle('active');
})


//  Dark Mode Function  //

const dmIcon = document.getElementById('darkmodeIcon');
const allElements = document.getElementsByTagName('*')


function toggleDarkmode (allElements) {
  for (var i = 0 ; i < allElements.length; i++) {
    allElements[i].classList.toggle('darkmode');
  }
}


dmIcon.addEventListener('click', () => {
  toggleDarkmode(allElements)
})