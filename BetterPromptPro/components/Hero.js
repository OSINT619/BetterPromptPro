function Hero() {
    try {
        React.useEffect(() => {
            gsap.from('.hero-title', {
                duration: 1,
                y: 50,
                opacity: 0,
                ease: 'power3.out'
            });
            gsap.from('.hero-description', {
                duration: 1,
                y: 30,
                opacity: 0,
                ease: 'power3.out',
                delay: 0.3
            });
        }, []);

        return (
            <section data-name="hero" className="pt-32 pb-20 px-4">
                <div className="container mx-auto text-center">
                    <h1 data-name="hero-title" className="hero-title text-5xl md:text-6xl font-bold mb-6">
                        Transform Your <span className="gradient-text">AI Prompts</span> Into Magic
                    </h1>
                    <p data-name="hero-description" className="hero-description text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                        Enhance your prompts with our AI-powered assistant. Get better structured, more effective instructions for your no-code AI systems.
                    </p>
                    <div data-name="hero-cta" className="flex justify-center space-x-4">
                        <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
                            Start Engineering
                        </button>
                        <button className="border border-gray-300 px-8 py-3 rounded-lg hover:border-gray-400 transition-colors">
                            View Examples
                        </button>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}
