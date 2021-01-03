let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/old-fashioned.jpg') {
      myImage.setAttribute('src','images/old-fashioned2.jpeg');
    } else {
      myImage.setAttribute('src','images/old-fashioned.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {localStorage.setItem('name', myName);
    myHeading.textContent = `The cocktail recipes for ${myName}`;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = `The cocktail recipes for ${storedName}`;
  }


myButton.onclick = function() {
    setUserName();
  }