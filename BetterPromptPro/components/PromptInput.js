function PromptInput({ onSubmit }) {
    try {
        const [prompt, setPrompt] = React.useState('');
        const [selectedSystem, setSelectedSystem] = React.useState('');

        const aiSystems = [
            { id: 'gpt-4', name: 'GPT-4', description: 'Advanced language model with strong reasoning capabilities' },
            { id: 'stable-diffusion', name: 'Stable Diffusion', description: 'Image generation and manipulation' },
            { id: 'claude', name: 'Claude', description: 'Analytical and coding-focused assistant' },
            { id: 'dall-e', name: 'DALL-E', description: 'Specialized in creative image generation' },
            { id: 'midjourney', name: 'Midjourney', description: 'Artistic image generation with specific style parameters' },
            { id: 'palm', name: 'PaLM', description: 'Google\'s language model with strong analytical capabilities' }
        ];

        const handleSubmit = async (e) => {
            e.preventDefault();
            if (!selectedSystem) {
                alert('Please select an AI system');
                return;
            }
            if (prompt.trim()) {
                onSubmit(prompt, selectedSystem);
            }
        };

        return (
            <div data-name="prompt-input-container" className="skeuomorphic-card">
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block font-bold mb-2">
                            Select AI System
                        </label>
                        <select
                            data-name="ai-system-select"
                            className="w-full p-3 rounded-lg input-field"
                            value={selectedSystem}
                            onChange={(e) => setSelectedSystem(e.target.value)}
                            required
                        >
                            <option value="">Select an AI system</option>
                            {aiSystems.map((system) => (
                                <option key={system.id} value={system.id}>
                                    {system.name} - {system.description}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-6">
                        <label className="block font-bold mb-2">
                            Your Prompt
                        </label>
                        <textarea
                            data-name="prompt-textarea"
                            className="w-full h-32 p-4 input-field"
                            placeholder="Enter your prompt here..."
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        data-name="submit-button"
                        type="submit"
                        className="w-full py-3 skeuomorphic-button metal-effect"
                    >
                        Enhance Prompt
                    </button>
                </form>
            </div>
        );
    } catch (error) {
        console.error('PromptInput component error:', error);
        reportError(error);
        return null;
    }
}
