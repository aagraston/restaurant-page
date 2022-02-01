import './scss/app.scss'
import Homepage from './js/homepage'
import Headerbar from './js/headerbar'

let contentDiv = document.querySelector('#content');

contentDiv.innerHTML = '';

let headerbar = new Headerbar();
let headerbarDiv = headerbar.getHeaderBar();

let homepage = new Homepage();
let homepagDiv = homepage.getHomepage();

contentDiv.appendChild(headerbarDiv);
contentDiv.appendChild(homepagDiv);
