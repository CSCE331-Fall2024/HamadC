// Function to toggle between the two stylesheets
function toggleTheme() {
    const themeLink = document.getElementById('theme-stylesheet');
    
    // Check the current href of the stylesheet link
    if (themeLink.getAttribute('href') === 'themes/styles.css') {
        // Switch to retro.css
        themeLink.setAttribute('href', 'themes/retro.css');
    } else {
        // Switch back to styles.css
        themeLink.setAttribute('href', 'themes/styles.css');
    }
}
