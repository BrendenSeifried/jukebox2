
const audio = document.getElementById('audio');

const ninjaSound = document.getElementById('ninja-sound');
ninjaSound.addEventListener('click', () => {
  audio.src = 'assets/sounds/ninja.mp3';
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

