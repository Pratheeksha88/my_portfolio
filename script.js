$(document).ready(function() {
    
    // --- 1. Skill Bar Animation (Unique Element 2) ---
    function animateSkillBars() {
        // Find all skill items
        $('.skill-bar-item').each(function() {
            let percentage = $(this).data('percent');
            
            // Use jQuery's animate() to smoothly increase the width over 1.5 seconds
            $(this).find('.bar-fill').animate({
                width: percentage + '%'
            }, 1500); 
        });
    }

    // Trigger the animation when the page loads
    animateSkillBars();


    // --- 2. Dark Mode Toggle (Unique Element 3) ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        // Toggle the 'dark-mode' class on the body
        body.classList.toggle('dark-mode');
        
        // Update button text/emoji
        let isDark = body.classList.contains('dark-mode');
        themeToggle.textContent = isDark ? '🌙/☀️' : '☀️/🌙';

        // Save preference in local storage (optional but good practice)
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // Check for saved theme preference on load
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '🌙/☀️';
    }
});