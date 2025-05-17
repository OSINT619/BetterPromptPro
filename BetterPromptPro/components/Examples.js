function Examples() {
    try {
        const [selectedExample, setSelectedExample] = React.useState(null);

        React.useEffect(() => {
            gsap.from('.example-card', {
                scrollTrigger: {
                    trigger: '.examples-grid',
                    start: 'top center',
                    toggleActions: 'play none none reverse'
                },
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.2
            });
        }, []);

        const examples = [
            {
                title: 'Image Generation',
                aiSystem: 'stable-diffusion',
                before: 'Create a mountain landscape',
                after: `Create a detailed mountain landscape with the following specifications:
1. Style: Photorealistic
2. Time: Golden hour sunset
3. Composition: Wide panoramic view
4. Details:
   - Snow-capped peaks in the background
   - Pine forest in the midground
   - Clear mountain lake in the foreground
5. Lighting: Warm directional lighting from the setting sun
6. Atmosphere: Slight mist in the valleys
7. Technical Parameters:
   - Aspect ratio: 16:9
   - Quality: Highly detailed
   - Steps: 50
   - CFG Scale: 7.5`
            },
            {
                title: 'Code Generation',
                aiSystem: 'gpt-4',
                before: 'Write a React component for a todo list',
                after: `Create a React functional component for a todo list with these requirements:

1. Component Structure:
   - Use React hooks (useState, useEffect)
   - Implement TypeScript interfaces
   - Follow modern React best practices

2. Features:
   - Add/delete/edit todos
   - Mark todos as complete
   - Filter by status
   - Local storage persistence

3. Error Handling:
   - Input validation
   - Error boundaries
   - Loading states

4. Accessibility:
   - ARIA labels
   - Keyboard navigation
   - Screen reader support

5. Performance:
   - Memoization where appropriate
   - Optimized re-renders
   - Virtual list for large datasets`
            },
            {
                title: 'Artistic Image',
                aiSystem: 'midjourney',
                before: 'Create a cyberpunk city',
                after: `Create a cyberpunk cityscape with these Midjourney-specific parameters:

1. Core Elements:
   - Neon-lit skyscrapers
   - Flying vehicles
   - Holographic advertisements

2. Style Modifiers:
   - --style raw
   - --niji 5
   - --ar 16:9

3. Lighting:
   - Volumetric fog
   - Multiple light sources
   - Neon reflections

4. Technical Details:
   - High contrast
   - Sharp details
   - Cinematic composition

5. Specific Commands:
   - --v 5
   - --chaos 20
   - --q 2`
            },
            {
                title: 'Technical Analysis',
                aiSystem: 'claude',
                before: 'Analyze this Python code for improvements',
                after: `Analyze the Python code with the following criteria:

1. Code Review Focus:
   - Performance optimization
   - Memory efficiency
   - Code complexity
   - Error handling
   - Testing coverage

2. Output Format:
   - Structured analysis
   - Code examples
   - Benchmarks
   - Citations

3. Specific Areas:
   - Algorithm complexity
   - Memory usage patterns
   - Threading considerations
   - Security implications

4. Recommendations:
   - Practical improvements
   - Alternative approaches
   - Best practices
   - Documentation needs`
            }
        ];

        return (
            <section data-name="examples" id="examples" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 data-name="section-title" className="text-4xl font-bold text-center mb-16">
                        Example <span className="gradient-text">Transformations</span>
                    </h2>
                    <div data-name="examples-grid" className="examples-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {examples.map((example, index) => (
                            <div
                                key={index}
                                data-name="example-card"
                                className="example-card glass-card p-6 rounded-lg cursor-pointer transform transition-transform hover:scale-105"
                                onClick={() => setSelectedExample(example)}
                            >
                                <h3 className="text-xl font-semibold mb-4">{example.title}</h3>
                                <div className="text-sm text-gray-600 mb-4">
                                    <strong>AI System:</strong> {example.aiSystem}
                                </div>
                                <div className="text-gray-600 line-clamp-3">
                                    <strong>Original:</strong> {example.before}
                                </div>
                            </div>
                        ))}
                    </div>

                    {selectedExample && (
                        <div data-name="example-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
                            <div className="bg-white rounded-lg max-w-2xl w-full p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-2xl font-semibold">{selectedExample.title}</h3>
                                    <button
                                        onClick={() => setSelectedExample(null)}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-2">Original Prompt:</h4>
                                        <p className="bg-gray-50 p-3 rounded">{selectedExample.before}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Enhanced Prompt for {selectedExample.aiSystem}:</h4>
                                        <p className="bg-gray-50 p-3 rounded whitespace-pre-wrap">{selectedExample.after}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        );
    } catch (error) {
        console.error('Examples component error:', error);
        reportError(error);
        return null;
    }
}
