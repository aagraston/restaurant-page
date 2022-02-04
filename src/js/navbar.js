
export default class navbar {

  getNavBar = _ => {

    //button factory
    const ButtonFactory = (buttonName) => {
      let thisButton = document.createElement('button');

      thisButton.innerText = buttonName;
      thisButton.setAttribute('id', buttonName);
      thisButton.classList.add('nav-button');

      return {thisButton};
    }

    let retDiv = document.createElement('div');
    retDiv.classList.add('nav-bar');

    //buttons
    let homeButton = ButtonFactory('Home');
    let aboutButton = ButtonFactory('About');
    let contactButton = ButtonFactory('Contact');

    //Appending

    retDiv.appendChild(homeButton.thisButton);
    retDiv.appendChild(aboutButton.thisButton);
    retDiv.appendChild(contactButton.thisButton);

    return retDiv;
  };
}