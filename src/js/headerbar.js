import Logo from '../images/Asset 2.svg'

export default class headerbar {

  getHeaderBar = _ => {
    let retDiv = document.createElement('div');
    retDiv.classList.add('header-bar');

    //Image
    
    let logoImage = new Image(150);
    logoImage.src = Logo;

    //the header
    let headerString = "The Melting Pot";
    let header = document.createElement('h1');
    header.innerText = headerString;

    //Appending

    retDiv.appendChild(logoImage);
    retDiv.appendChild(header);

    return retDiv;
  };
}