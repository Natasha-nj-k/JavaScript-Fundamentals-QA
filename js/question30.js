//Question30: Write a script to toggle the visibility of a paragraph when a button is clicked.

const paragraph = document.getElementById("text");
const button = document.getElementById("toggle-btn");

button.addEventListener("click", () => {
    paragraph.style.display = paragraph.style.display === "none" ? "block" : "none";
});
