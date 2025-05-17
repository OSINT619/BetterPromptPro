function HowItWorks() {
    try {
        React.useEffect(() => {
            gsap.from('.step-card', {
                scrollTrigger: {
                    trigger: '.steps-container',
                    start: 'top center',
                    toggleActions: 'play none none reverse'
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2
            });
        }, []);

        const steps = [
            {
                icon: 'fa-file-lines',
                title: 'Input Analysis',
                description: 'Our system analyzes your prompt to identify key requirements, context, and objectives.'
            },
            {
                icon: 'fa-microchip',
                title: 'AI System Detection',
                description: 'Advanced algorithms detect the target AI system and its specific capabilities.'
            },
            {
                icon: 'fa-wand-sparkles',
                title: 'Prompt Optimization',
                description: 'Your prompt is restructured and enhanced for optimal performance with the target system.'
            },
            {
                icon: 'fa-code',
                title: 'Technical Adaptation',
                description: 'The final prompt is adapted to match technical requirements and best practices.'
            }
        ];

        return (
            <section data-name="how-it-works" id="how-it-works" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 data-name="section-title" className="text-4xl font-bold text-center mb-16">
                        How It <span className="gradient-text">Works</span>
                    </h2>
                    <div data-name="steps-container" className="steps-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                data-name="step-card"
                                className="step-card glass-card p-6 rounded-lg text-center"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                                    <i className={`fas ${step.icon} text-2xl text-white`}></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('HowItWorks component error:', error);
        reportError(error);
        return null;
    }
}
