const greetingForm = document.querySelector("#greeting-form");
const nameInput = document.querySelector("#name-input");
const greetingOutput = document.querySelector("#greeting-output");

let count = 0;

function updateCounter() {
    document.querySelector("#counter-value").textContent = count;
}

greetingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = nameInput.value.trim();

    if (name === "") {
        greetingOutput.textContent = "Please enter your name first.";
        nameInput.focus();
        return;
    }

    greetingOutput.textContent =
        `Hello, ${name}! Welcome to JavaScript.`;

    greetingForm.reset();
});

document.querySelector("#increase-btn")
.addEventListener("click", function() {

    count++;

    updateCounter();
});
document.querySelector("#decrease-btn")
.addEventListener("click", function() {

    count--;

    updateCounter();
});


document.querySelector("#reset-btn")
.addEventListener("click", function() {

    count = 0;

    updateCounter();
});

const themeButton = document.querySelector("#theme-btn");
const themeStatus = document.querySelector("#theme-status");

themeButton.addEventListener("click", function() {

    const darkMode =
        document.body.classList.toggle("dark-mode");

    if (darkMode) {

        themeButton.textContent = "Switch to Light Mode";
        themeStatus.textContent = "Dark mode is active.";

    } else {

        themeButton.textContent = "Switch to Dark Mode";
        themeStatus.textContent = "Light mode is active.";

    }
});

updateCounter();
