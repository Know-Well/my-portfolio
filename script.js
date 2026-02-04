const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
    // Get the <html> element
    const root = document.documentElement;
    
    // Check if it's already dark
    if (root.getAttribute('data-theme') === 'dark') {
        root.setAttribute('data-theme', 'light');
        toggleBtn.innerText = "🌙 Dark Mode";
    } else {
        root.setAttribute('data-theme', 'dark');
        toggleBtn.innerText = "☀️ Light Mode";
    }
});
