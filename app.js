const audio = document.getElementById('audio');

const ninjaSound = document.getElementById('ninja-sound');
ninjaSound.addEventListener('click', () => {
  audio.src = 'assets/sounds/alarm.wav';
  audio.play();
});

const princessSound = document.getElementById('princess-sound');
princessSound.addEventListener('click', () => {
  audio.src = 'assets/sounds/retro.wav';
  audio.play();
});

const rangerSound = document.getElementById('ranger-sound');
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