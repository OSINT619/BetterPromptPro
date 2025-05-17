function Features() {
    try {
        React.useEffect(() => {
            gsap.registerPlugin(ScrollTrigger);
            
            gsap.utils.toArray('.feature-card').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100',
                        toggleActions: 'play none none reverse'
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.2
                });
            });
        }, []);

        const features = [
            {
                icon: 'fa-wand-magic-sparkles',
                title: 'Smart Enhancement',
                description: 'Automatically improve prompt clarity and structure'
            },
            {
                icon: 'fa-brain',
                title: 'Context Analysis',
                description: 'Understand and optimize for specific AI systems'
            },
            {
                icon: 'fa-code',
                title: 'No-Code Friendly',
                description: 'Perfect for no-code AI development environments'
            }
        ];

        return (
            <section data-name="features" id="features" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 data-name="features-title" className="text-4xl font-bold text-center mb-16">
                        Powerful <span className="gradient-text">Features</span>
                    </h2>
                    <div data-name="features-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                data-name="feature-card"
                                className="feature-card glass-card p-6 rounded-lg text-center"
                            >
                                <i className={`fas ${feature.icon} text-4xl gradient-text mb-4`}></i>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Features component error:', error);
        reportError(error);
        return null;
    }
}
