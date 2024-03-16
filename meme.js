// Global variables to store movement interval and meme image element
let moveInterval;
const meme = document.getElementById("meme");
// Function to start moving the meme image
function startMoving() {
    // Viewport dimensions - https://www.w3schools.com/css/css_rwd_viewport.asp
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const memeWidth = meme.offsetWidth;
    const memeHeight = meme.offsetHeight;

    // Start moving the meme image continuously - nested function
    moveInterval = setInterval(function() {
        // Calculate random position within the viewport - https://codepen.io/christinastep/pen/eXypvq - https://stackoverflow.com/questions/18110529/adding-a-div-to-a-random-location-inside-the-window
        const randomX = Math.floor(Math.random() * (viewportWidth - memeWidth));
        const randomY = Math.floor(Math.random() * (viewportHeight - memeHeight));
         // Apply the new position to the meme image
        meme.style.top = randomY + "px";
        meme.style.left = randomX + "px";
    }, 1200); // Move every 1.2 seconds
    
    // Disable start button and enable stop button - https://flexiple.com/javascript/disable-button-javascript
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
// Function to stop moving the meme image
function stopMoving() {
    // Clear the movement interval - https://www.w3schools.com/jsref/met_win_clearinterval.asp
    clearInterval(moveInterval);
    // Enable start button and disable stop button
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}
