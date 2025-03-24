// Remove the <main> element with id "main"
document.querySelector("main#main").remove();

// Create a new <h1> element and assign it to a variable named newHeader
const newHeader = document.createElement("h1");

// Set the id of newHeader to "victory"
newHeader.id = "victory";

// Set the text content of newHeader to your name followed by "is the champion"
newHeader.textContent = "James Damien is the champion";

// Append newHeader to the body
document.body.appendChild(newHeader);
