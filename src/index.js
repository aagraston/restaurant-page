import './scss/app.scss'
import Homepage from './js/homepage'
import Headerbar from './js/headerbar'
import Navbar from './js/navbar'
import Aboutpage from './js/aboutpage'
import Contactpage from './js/contactpage'

let contentDiv = document.querySelector('#content');

//intialize content
let headerbar = new Headerbar();
let headerbarDiv = headerbar.getHeaderBar();

let homepage = new Homepage();
let homepagDiv = homepage.getHomepage();

let aboutpage = new Aboutpage();
let aboutpageDiv = aboutpage.getAboutpage();

let contactpage = new Contactpage();
let contactpageDiv = contactpage.getContactpage();

let navBar = new Navbar();
let navBarDiv = navBar.getNavBar();

let homeButton = navBarDiv.querySelector('#Home');
let aboutButton = navBarDiv.querySelector('#About');
let contactButton = navBarDiv.querySelector('#Contact');


homeButton.addEventListener('click', setPage);
aboutButton.addEventListener('click', setPage);
contactButton.addEventListener('click', setPage);

setHeaderAndNav();
contentDiv.appendChild(homepagDiv);

//reset the content div
function resetPage() {
  contentDiv.innerHTML = '';
}

//set the header and nav bars
function setHeaderAndNav() {
  contentDiv.appendChild(headerbarDiv);
  contentDiv.appendChild(navBarDiv);
}

function setPage(evt) {
  
  resetPage();
  setHeaderAndNav();

  switch (evt.currentTarget.getAttribute('id')) {
    case 'Home':
      contentDiv.appendChild(homepagDiv);
      break;
  
    case 'About':
      contentDiv.appendChild(aboutpageDiv);
      break;
    
    case 'Contact':
      contentDiv.appendChild(contactpageDiv);
      break;
  }
  
}

function setAboutPage() {

}



console.log(navBarDiv);




