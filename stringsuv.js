// Function to check if the input is a valid zip code of 5 digits
function isValidZipCode(zip) {
    return /^\d{5}$/.test(zip);
}
// Get info for the button with id "checkbutton" when clicked
document.getElementById("checkbutton").addEventListener("click", function() {
    // Get input values for first name, last name, and zip code
    let firstName = document.getElementById("firstname").value.trim();
    let lastName = document.getElementById("lastname").value.trim();
    let zipCode = document.getElementById("zipcode").value.trim();
    let resultContainer = document.getElementById("result");
    // Combine first name and last name
    let fullName = firstName + " " + lastName;
    // Check if combined name has more than 20 characters
    if (fullName.length > 20) {
        resultContainer.innerText = "Do not continue the program if invalid.";
        return;
    }
    // Check if zip code is valid 5 digits
    if (!isValidZipCode(zipCode)) {
        resultContainer.innerText = "Do not continue the program if invalid";
        return;
    }
    // If all inputs are valid, show the secret message -- Inline html
    resultContainer.innerHTML = `<p>Greetings, ${fullName}!</p><p>Message:<br> 
    <br>If you’ve got me, you want to share me; if you share me, you haven’t kept me. What am I?<br>A secret!</p>`;
});
// Play ticktok when check button is clicked 
document.getElementById("checkbutton").addEventListener("click", function() {
    // Get the audio element
    var audio = document.getElementById("audio");
    // Play the audio
    audio.play();
});
