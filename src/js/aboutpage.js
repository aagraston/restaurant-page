export default class aboutpage {

  getAboutpage = _ => {
    let retDiv = document.createElement('div');
    retDiv.classList.add('page-content');

    //the header
    let headerString = "About Us";
    let header = document.createElement('h2');
    header.innerText = headerString;

    //paragraphs
    let p1String = "We are a small mom and pop place. Owned and operated by our little family. How we procure so many and such a wide variety of cusine is beyond us. We do not know how it happens! It's complete magic."

    let p2String = "And we're scared about it. We're scared as to how this could possibly be happening. Terrified actually. Can someone help us?"


    let p1 = document.createElement('p');
    let p2 = document.createElement('p');

    p1.innerText = p1String;
    p2.innerText = p2String;

    let twoColumnDiv = document.createElement('div');
    twoColumnDiv.classList.add('page-content-two-column');
    twoColumnDiv.appendChild(p1);
    twoColumnDiv.appendChild(p2);

    retDiv.appendChild(header);
    retDiv.appendChild(twoColumnDiv);

    return retDiv;
  };


}