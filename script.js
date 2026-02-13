const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const musicBtn = document.getElementById('musicBtn');

// --- 1. THE NO BUTTON (STAYS IN FRAME) ---
noBtn.addEventListener('click', () => {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    // Calculate max positions ensuring it stays on screen
    const maxX = window.innerWidth - btnWidth - 20; // 20px buffer
    const maxY = window.innerHeight - btnHeight - 20;

    const randomX = Math.max(10, Math.floor(Math.random() * maxX));
    const randomY = Math.max(10, Math.floor(Math.random() * maxY));

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    noBtn.style.margin = '0';
    noBtn.style.zIndex = '1000';
});

// --- 2. THE YES BUTTON (HAPPINESS MODE) ---
// --- THE YES BUTTON (GIF -> 10s -> ROSE) ---
yesBtn.addEventListener('click', () => {
    // 1. Clear the screen
    document.querySelector('.heart-container').style.display = 'none';
    document.querySelector('.question-div').style.display = 'none';
    document.querySelector('.buttons-container').style.display = 'none';
    document.querySelector('.hearts-background').style.display = 'none';

    startCelebrationBackground();

    // 2. Create the main result container
    const resultContainer = document.createElement('div');
    resultContainer.className = 'result-container';
    document.body.appendChild(resultContainer);

    // 3. Show the Meme & Yay Text first
    showMemeScene(resultContainer);

    // 4. WAIT 10 SECONDS, then transition to Rose
    setTimeout(() => {
        transitionToRose(resultContainer);
    }, 10000); 
});

// Scene 1: The Meme
function showMemeScene(container) {
    container.innerHTML = `
        <h1 class="yay-text">YAY! Best Choice Ever! ❤️</h1>
        <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2FjMXh4MDVmeTJsZ2VrY3VhM2QzOTMxdG5hcXg3dWx4dmFxaHA4biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wvYNSqBAMDVx8CEYkt/giphy.gif" class="celebration-meme">
    `;
}
function transitionToRose(container) {
  // 1. Fade out the meme scene
  container.style.opacity = "0";
  container.style.transition = "opacity 0.8s ease-in-out";

  setTimeout(() => {
    // 2. Clear the meme and text
    container.innerHTML = "";

    // 3. Create the Rose Scene
    const roseScene = document.createElement("div");
    roseScene.className = "rose-scene";

    roseScene.innerHTML = `
            <div class="rose-pop">🌹</div>
            <h2 class="cute-text">Every petal represents a reason why I’m lucky to know you… so I was wondering, would you be my Valentine and let me add one more reason 🌸💌</h2>
        `;

    container.appendChild(roseScene);

    // 4. Fade the container back in
    container.style.opacity = "1";
  }, 800); // Matches the fade-out duration
}

// Function to create the intense background floating hearts
function startCelebrationBackground() {
    const bgContainer = document.createElement('div');
    bgContainer.className = 'celebration-bg-container';
    document.body.appendChild(bgContainer);

    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.className = 'celebration-heart';
        heart.innerHTML = '💖'; // Sparkly heart emoji
        
        // Random horizontal position
        heart.style.left = Math.random() * 100 + 'vw';
        // Randomize animation duration for varied speed
        const duration = Math.random() * 3 + 2; // between 2 and 5 seconds
        heart.style.animationDuration = duration + 's';
        // Randomize delay so they don't all start at once
        heart.style.animationDelay = Math.random() * 2 + 's';

        bgContainer.appendChild(heart);
    }
}

// --- 3. MUSIC TOGGLE (Standard) ---
const audio = new Audio('Bryson_Tiller.mp3');
// Remember to replace the link above with your local file path if you downloaded one! e.g., 'music.mp3'

musicBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        musicBtn.querySelector('.music-text').innerText = "Pause Music";
        musicBtn.style.background = "var(--soft-pink)";
    } else {
        audio.pause();
        musicBtn.querySelector('.music-text').innerText = "Play Music";
        musicBtn.style.background = "var(--white)";
    }
});