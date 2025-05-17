function App() {
    try {
        const [enhancedPrompt, setEnhancedPrompt] = React.useState('');
        const [isLoading, setIsLoading] = React.useState(false);

        React.useEffect(() => {
            initializeAnimations();
        }, []);

        const handlePromptSubmit = async (prompt, aiSystem) => {
            try {
                setIsLoading(true);
                const enhanced = await enhancePrompt(prompt, aiSystem);
                setEnhancedPrompt(enhanced);
            } catch (error) {
                console.error('Error:', error);
                alert('Failed to enhance prompt. Please try again.');
            } finally {
                setIsLoading(false);
            }
        };

        return (
            <div data-name="app-container">
                <ThemeSwitch />
                <Header />
                <main className="min-h-screen">
                    <Hero />
                    <section data-name="prompt-section" id="prompt-section" className="py-20 px-4">
                        <div className="container mx-auto">
                            <PromptInput onSubmit={handlePromptSubmit} />
                            <PromptOutput enhancedPrompt={enhancedPrompt} isLoading={isLoading} />
                        </div>
                    </section>
                    <Features />
                    <HowItWorks />
                    <Examples />
                </main>
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
