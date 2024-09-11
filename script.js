// Check for a saved theme when the page loads and apply it
window.onload = function() {
    const themeLink = document.getElementById('theme-stylesheet');
    const savedTheme = localStorage.getItem('theme'); // Get the saved theme from localStorage

    // If a theme is saved in localStorage, apply it
    if (savedTheme) {
        themeLink.setAttribute('href', savedTheme);
    } else {
        // Set default theme if no theme is saved
        themeLink.setAttribute('href', './themes/styles.css');
    }
};

// Function to toggle between themes
function toggleTheme() {
    const themeLink = document.getElementById('theme-stylesheet');
    
    // If we find the stylesheet, toggle the theme
    if (themeLink) {
        const currentTheme = themeLink.getAttribute('href');
        
        // Switch between 'styles.css' and 'retro.css'
        if (currentTheme.includes('styles.css')) {
            themeLink.setAttribute('href', './themes/retro.css');
            localStorage.setItem('theme', './themes/retro.css'); // Save theme choice in localStorage
        } else {
            themeLink.setAttribute('href', './themes/styles.css');
            localStorage.setItem('theme', './themes/styles.css'); // Save theme choice in localStorage
        }
    } else {
        console.error("Could not find the stylesheet link element with id 'theme-stylesheet'");
    }
}
