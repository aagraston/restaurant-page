import './scss/app.scss'
import Homepage from './js/homepage'
import Headerbar from './js/headerbar'
import Navbar from './js/navbar'

let contentDiv = document.querySelector('#content');

//contentDiv.innerHTML = '';

let headerbar = new Headerbar();
let headerbarDiv = headerbar.getHeaderBar();

let homepage = new Homepage();
let homepagDiv = homepage.getHomepage();

let navBar = new Navbar();
let navBarDiv = navBar.getNavBar();

console.log(navBarDiv);

contentDiv.appendChild(headerbarDiv);
contentDiv.appendChild(navBarDiv);
contentDiv.appendChild(homepagDiv);


