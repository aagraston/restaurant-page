import './scss/app.scss'
import Homepage from './js/homepage'
import Headerbar from './js/headerbar'
import Navbar from './js/navbar'
import Aboutpage from './js/aboutpage'

let contentDiv = document.querySelector('#content');

//intialize content
let headerbar = new Headerbar();
let headerbarDiv = headerbar.getHeaderBar();

let homepage = new Homepage();
let homepagDiv = homepage.getHomepage();

let aboutpage = new Aboutpage();
let aboutpageDiv = aboutpage.getAboutpage();

let navBar = new Navbar();
let navBarDiv = navBar.getNavBar();

let homeButton = navBarDiv.querySelector('#Home');
let aboutButton = navBarDiv.querySelector('#About');
let contactButton = navBarDiv.querySelector('#Contact');



setPage('home');

//reset the content div
function resetPage() {
  contentDiv.innerHTML = '';
}

//set the header and nav bars
function setHeaderAndNav() {
  contentDiv.appendChild(headerbarDiv);
  contentDiv.appendChild(navBarDiv);
}

function setPage(page) {
  
  resetPage();
  setHeaderAndNav();

  switch (page) {
    case 'home':
      contentDiv.appendChild(homepagDiv);
      break;
  
    case 'about':
      contentDiv.appendChild(aboutpageDiv);
      break;
    
    case 'contact':
      
      break;
  }
  
}

function setAboutPage() {

}



console.log(navBarDiv);




