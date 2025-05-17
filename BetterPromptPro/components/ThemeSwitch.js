function ThemeSwitch() {
    try {
        const [isDarkMode, setIsDarkMode] = React.useState(false);

        React.useEffect(() => {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                setIsDarkMode(true);
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.add('light-mode');
            }
        }, []);

        const toggleTheme = () => {
            setIsDarkMode(!isDarkMode);
            document.body.classList.toggle('dark-mode');
            document.body.classList.toggle('light-mode');
            localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
        };

        return (
            <button
                data-name="theme-switch"
                onClick={toggleTheme}
                className="theme-switch metal-effect"
                aria-label="Toggle theme"
            >
                <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-xl`}></i>
            </button>
        );
    } catch (error) {
        console.error('ThemeSwitch component error:', error);
        reportError(error);
        return null;
    }
}
