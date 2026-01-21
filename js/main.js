const btn = document.getElementById("play-intro");
const audio = document.getElementById("intro-audio");

btn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    btn.textContent = "⏸ Playing…";
  } else {
    audio.pause();
    btn.textContent = "▶ Play Intro";
  }
});
