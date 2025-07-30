document.addEventListener('DOMContentLoaded', function () {
	const themeToggle = document.getElementById('theme-toggle');
	const body = document.body;

	// Load saved theme
	const savedTheme = localStorage.getItem('theme');
	if (savedTheme === 'dark') {
		body.classList.add('dark-theme');
		themeToggle.textContent = 'light mode';
	}

	themeToggle.addEventListener('click', function () {
		// Toggle theme
		body.classList.toggle('dark-theme');

		// Check current theme
		const isDark = body.classList.contains('dark-theme');

		// Update button text
		themeToggle.textContent = isDark ? 'light mode' : 'dark mode';

		// Save theme to localStorage
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
	});
});
