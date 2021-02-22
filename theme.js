// DOM
let buttons = document.getElementsByClassName('button');
let logo = document.getElementById('logo');

// set Theme
function setTheme(themeName) {
    document.body.className = themeName;
    
}

buttons[0].addEventListener("click", toggleTheme);

function toggleTheme() {
    if (document.body.className === 'light-mode') {
        setTheme('dark-mode');
        logo.style.filter = "invert()";

    } else {
        setTheme('light-mode');
        logo.style.filter = "invert(0)";
    }
}