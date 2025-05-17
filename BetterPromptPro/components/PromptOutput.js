function PromptOutput({ enhancedPrompt, isLoading }) {
    try {
        return (
            <div data-name="prompt-output-container" className="glass-card rounded-lg p-6 mt-8 max-w-3xl mx-auto">
                <h3 data-name="output-title" className="text-xl font-semibold mb-4">Enhanced Prompt:</h3>
                {isLoading ? (
                    <div data-name="loading-indicator" className="flex items-center justify-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
                    </div>
                ) : enhancedPrompt ? (
                    <div data-name="output-content" className="bg-white rounded-lg p-4 shadow-inner">
                        <p className="text-gray-800 whitespace-pre-wrap">{enhancedPrompt}</p>
                        <button
                            data-name="copy-button"
                            className="mt-4 px-4 py-2 text-sm text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-50 transition-colors"
                            onClick={() => navigator.clipboard.writeText(enhancedPrompt)}
                        >
                            <i className="fas fa-copy mr-2"></i>
                            Copy to Clipboard
                        </button>
                    </div>
                ) : (
                    <p data-name="empty-state" className="text-gray-500 text-center py-8">
                        Your enhanced prompt will appear here
                    </p>
                )}
            </div>
        );
    } catch (error) {
        console.error('PromptOutput component error:', error);
        reportError(error);
        return null;
    }
}
