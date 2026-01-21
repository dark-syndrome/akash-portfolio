// Background audio handler
// Note: Make sure you have intro.mp3 in /assets/audio/ directory

const audio = new Audio("assets/audio/intro.mp3");
audio.loop = true;
audio.volume = 0;

let audioUnlocked = false;

function unlockAudio() {
  if (audioUnlocked) return;
  
  audio.play().catch((err) => {
    console.log('Audio playback prevented:', err);
  });
  
  // Fade in audio
  let volume = 0;
  const fadeInterval = setInterval(() => {
    volume += 0.02;
    audio.volume = Math.min(volume, 0.5);
    if (volume >= 0.5) {
      clearInterval(fadeInterval);
    }
  }, 100);

  audioUnlocked = true;
  
  // Remove listeners after first unlock
  window.removeEventListener("click", unlockAudio);
  window.removeEventListener("scroll", unlockAudio);
  window.removeEventListener("touchstart", unlockAudio);
}

// Add multiple event listeners for better mobile support
window.addEventListener("click", unlockAudio);
window.addEventListener("scroll", unlockAudio);
window.addEventListener("touchstart", unlockAudio);

// Optional: Add audio control button
export function toggleAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

export function setAudioVolume(vol) {
  audio.volume = Math.max(0, Math.min(1, vol));
}