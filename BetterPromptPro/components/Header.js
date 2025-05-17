function Header() {
    try {
        const [activeSection, setActiveSection] = React.useState('');

        React.useEffect(() => {
            const handleScroll = () => {
                const sections = ['features', 'how-it-works', 'examples'];
                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (rect.top <= 100 && rect.bottom >= 100) {
                            setActiveSection(section);
                            break;
                        }
                    }
                }
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        const scrollToSection = (sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        };

        return (
            <header data-name="header" className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
                <div className="container mx-auto px-4 py-4">
                    <nav data-name="nav" className="flex items-center justify-between">
                        <div data-name="logo" className="flex items-center">
                            <i className="fas fa-robot text-3xl gradient-text mr-2"></i>
                            <span className="text-xl font-bold gradient-text">PromptPro</span>
                        </div>
                        <div data-name="nav-links" className="hidden md:flex space-x-8">
                            {['features', 'how-it-works', 'examples'].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className={`text-gray-600 hover:text-gray-900 transition-colors ${
                                        activeSection === section ? 'text-indigo-600 font-medium' : ''
                                    }`}
                                >
                                    {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                </button>
                            ))}
                        </div>
                        <button 
                            data-name="cta-button" 
                            onClick={() => scrollToSection('prompt-section')}
                            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
                        >
                            Get Started
                        </button>
                    </nav>
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
