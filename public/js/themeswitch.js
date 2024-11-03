document.addEventListener('DOMContentLoaded', () => {
    const themeCheckbox = document.getElementById('theme-checkbox');
    const modeText = document.getElementById('mode-text');

    if (!themeCheckbox || !modeText) return; // Exit if elements are missing

    // Initialize theme based on saved setting
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark-theme', savedTheme === 'dark');
    themeCheckbox.checked = savedTheme === 'dark';
    modeText.textContent = savedTheme;

    // Toggle theme and save setting
    themeCheckbox.addEventListener('change', () => {
        const newTheme = themeCheckbox.checked ? 'dark' : 'light';
        document.documentElement.classList.toggle('dark-theme', newTheme === 'dark');
        modeText.textContent = newTheme;
        localStorage.setItem('theme', newTheme);
    });
});