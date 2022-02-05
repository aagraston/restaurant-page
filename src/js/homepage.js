import Burger from '../images/burger-banner.jpg'

export default class homepage {

  getHomepage = _ => {
    let retDiv = document.createElement('div');
    retDiv.classList.add('page-content');

    //the header
    let headerString = "Welcome to The Melting Pot!";
    let header = document.createElement('h2');
    header.innerText = headerString;

    //image bar
    let burgerImage = new Image(900, 300);
    burgerImage.src = Burger;

    //paragraphs
    let p1String = "Every dish we serve at The Melting Pot screams authenticity. Nothing will satisfy and delight like our many entrees from around the globe. We offer every dish from anywhere around the world guarenteed! There isn't a solitary plate made in a country of the known Earth that doesn't have some place on our menu. From the white-sand coasts of Greece, to the thick musty jungles of Costa Rica."

    let p2String = "So if you're from planet earth, come try the best of your native land! And if you leave here unsatisfied, or can't find a dish you'd like from a country you're fond of... we guarentee your money back, and a coupon for a free meal the next time you're in!"

    let p3String = "Browse our website to understand how dedicated we are to serving up only the best."

    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');

    p1.innerText = p1String;
    p2.innerText = p2String;
    p3.innerText = p3String;

    let twoColumnDiv = document.createElement('div');
    twoColumnDiv.classList.add('page-content-two-column');
    twoColumnDiv.appendChild(p1);
    twoColumnDiv.appendChild(p2);

    retDiv.appendChild(header);
    retDiv.appendChild(burgerImage);
    retDiv.appendChild(twoColumnDiv);
    retDiv.appendChild(p3);

    return retDiv;
  };


}