async function enhancePrompt(prompt, aiSystem) {
    try {
        const systemPrompts = {
            'gpt-4': `You are an expert prompt engineer for GPT-4. Enhance this prompt with:
1. Clear context and objectives
2. Structured output format
3. Specific parameters for language model interaction
4. Error handling and edge cases`,
            
            'stable-diffusion': `You are an expert prompt engineer for Stable Diffusion. Enhance this prompt with:
1. Detailed visual descriptions
2. Style and composition parameters
3. Technical settings (steps, CFG scale, etc.)
4. Negative prompts if needed`,
            
            'claude': `You are an expert prompt engineer for Claude. Enhance this prompt with:
1. Analytical framework
2. Specific evaluation criteria
3. Output structure requirements
4. Context and constraints`,
            
            'dall-e': `You are an expert prompt engineer for DALL-E. Enhance this prompt with:
1. Detailed visual elements
2. Style and medium specifications
3. Composition guidelines
4. Artistic reference points`,
            
            'midjourney': `You are an expert prompt engineer for Midjourney. Enhance this prompt with:
1. Specific Midjourney parameters (--v 5, --ar, etc.)
2. Style modifiers
3. Composition details
4. Technical specifications`,
            
            'palm': `You are an expert prompt engineer for PaLM. Enhance this prompt with:
1. Structured query format
2. Context requirements
3. Response formatting
4. Specific parameters for analytical tasks`
        };

        const systemPrompt = systemPrompts[aiSystem] || systemPrompts['gpt-4'];
        const response = await invokeAIAgent(systemPrompt, prompt);
        return response;
    } catch (error) {
        console.error('Error enhancing prompt:', error);
        throw new Error('Failed to enhance prompt. Please try again.');
    }
}
