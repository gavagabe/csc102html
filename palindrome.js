// Function to check if a word is a palindrome
function isPalindrome(word) {
    // Remove spaces and convert to lowercase
    let strippedWord = word.replace(/\s/g, '').toLowerCase();
    // Check if the word is the same forwards and backwards
    return strippedWord === strippedWord.split('').reverse().join('');
}
// Get info when the button with id "checkbutton" is clicked
document.getElementById("checkbutton").addEventListener("click", function() {
    // Get the input value and trim any leading or trailing spaces
    let userInput = document.getElementById("wordinput").value.trim();
    // Get the container to display the result
    let resultContainer = document.getElementById("result");
    // If no input is entered, display "Please type a word."
    if (userInput === "") {
        resultContainer.innerText = "Please type a word.";
        return;
    }
    // Check if the input word is a palindrome and display the result
    if (isPalindrome(userInput)) {
        resultContainer.innerHTML = `"${userInput}" is a palindrome. <br><br> <button id="tryagain">Try another word?</button> <button id="exitbutton">Exit</button>`;
    } else {
        resultContainer.innerHTML = `"${userInput}" is not a palindrome. <br><br> <button id="tryagain">Try another word?</button> <button id="exitbutton">Exit</button>`;
    }
    // Get info when the button "Try another word?" is clicked
    document.getElementById("tryagain").addEventListener("click", function() {
        // Clear the result container and the input field
        resultContainer.innerHTML = "";
        document.getElementById("wordinput").value = "";
    });
    // Get info when the button "Exit" is clicked
    document.getElementById("exitbutton").addEventListener("click", function() {
        window.close();
        });
});
