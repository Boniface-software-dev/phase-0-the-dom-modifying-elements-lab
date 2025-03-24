// Removing the existing <main> element with id 'main'
const main = document.getElementById("main");
if (main) {
    main.remove();
}

// new <h1> element
const newHeader = document.createElement("h1");

// id to 'victory'
newHeader.id = "victory";

// required message
newHeader.textContent = "James Damien is the champion";

// Appended new <h1> elementy
document.body.appendChild(newHeader);
