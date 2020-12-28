const button = document.getElementById("volume-btn");
const icon = document.getElementById("volume-btn").firstChild;
const audio = document.getElementById("player");

button.addEventListener("click", () => {
  if (audio.paused) {
    audio.volume = 1;
    audio.play();
    icon.classList.remove('fa-volume-up');
    icon.classList.add('fa-volume-mute');

  } else {
    audio.pause();
    icon.classList.remove('fa-volume-mute');
    icon.classList.add('fa-volume-up');
  }
});
