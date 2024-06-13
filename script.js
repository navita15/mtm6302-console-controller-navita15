// Function to set the description
function setDescription(newDescription) {
    const descriptionElement = document.getElementById('description');
    descriptionElement.textContent = newDescription;
}

// Function to set the background color
function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Function to set the font color
function setFontColor(color) {
    document.body.style.color = color;
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        element.style.color = color;
    });
}

// Function to set the theme
function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    } else if (theme === 'light') {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    }
}
