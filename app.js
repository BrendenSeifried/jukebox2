/* eslint-disable no-console */
import { pics } from './data.js';


const template = document.getElementById('template');
const characterList = document.getElementById('character-list');
const audio = document.getElementById('audio');

// loop the array
for (let pic of pics){
    console.log(pic); 
  // for each character:
  // make a copy of the template
  const copy = template.content.cloneNode(true);
  // find the h2, img, and button elements
  const header = copy.querySelector('h2');
  const image = copy.querySelector('img');
  const button = copy.querySelector('button');
  // set the h2.textContent and img.src
  header.textContent = pic.name;
  image.src = pic.image;

  // subscribe to button click
  button.addEventListener('click', () => {
    audio.src = pic.audio;
    audio.play();
  });

  // add (append) the copy to the list (ul)
  characterList.appendChild(copy);
}




