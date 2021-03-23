//  Menu Icon Function  //


const menuicon = document.getElementById('menuIcon');
const menu = document.getElementById('menu');


menuicon.addEventListener('click', () => {

  menuicon.classList.toggle('active');
  menu.classList.toggle('active');

})