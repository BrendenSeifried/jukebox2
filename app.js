/* eslint-disable no-console */
import { pics } from './data.js';

console.log(pics);

const audio = document.getElementById('audio');

const ninjaSound = document.getElementById('alarm');
ninjaSound.addEventListener('click', () => {
  audio.src = 'assets/sounds/alarm.wav';
  audio.play();
});

const princessSound = document.getElementById('retro');
princessSound.addEventListener('click', () => {
  audio.src = 'assets/sounds/retro.wav';
  audio.play();
});

const rangerSound = document.getElementById('dog');
rangerSound.addEventListener('click', () => {
  audio.src = 'assets/sounds/dog.wav';
  audio.play();
});

const bird = document.getElementById('bird');
bird.addEventListener('click', () => {
  audio.src = 'assets/sounds/bird.wav';
  audio.play();
});

const money = document.getElementById('money');
money.addEventListener('click', () => {
  audio.src = 'assets/sounds/money.wav';
  audio.play();
});

const boat = document.getElementById('boat');
boat.addEventListener('click', () => {
  audio.src = 'assets/sounds/boat.wav';
  audio.play();
});

const pond = document.getElementById('pond');
pond.addEventListener('click', () => {
  audio.src = 'assets/sounds/pond.wav';
  audio.play();
});

const royal = document.getElementById('royal');
royal.addEventListener('click', () => {
  audio.src = 'assets/sounds/royal.wav';
  audio.play();
});

const jester = document.getElementById('jester');
jester.addEventListener('click', () => {
  audio.src = 'assets/sounds/jester.wav';
  audio.play();
});

const fire = document.getElementById('fire');
fire.addEventListener('click', () => {
  audio.src = 'assets/sounds/fire.wav';
  audio.play();
});

const cold = document.getElementById('cold');
cold.addEventListener('click', () => {
  audio.src = 'assets/sounds/cold.wav';
  audio.play();
});