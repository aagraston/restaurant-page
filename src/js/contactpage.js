export default class contactpage {

  getContactpage = _ => {
    let retDiv = document.createElement('div');
    retDiv.classList.add('page-content');

    //the header
    let headerString = "Contact";
    let header = document.createElement('h2');
    header.innerText = headerString;

    //paragraphs
    let ph1String = '(777)-777-7777'


    let ph1 = document.createElement('h3');

    ph1.innerText = ph1String;

    retDiv.appendChild(header);
    retDiv.appendChild(ph1);

    return retDiv;
  };


}