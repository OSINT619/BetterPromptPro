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

async function invokeAIAgent(systemPrompt, userPrompt) {
    try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Extract the AI system type from the system prompt
        let aiSystem = 'generic';
        if (systemPrompt.includes('GPT-4')) aiSystem = 'gpt-4';
        else if (systemPrompt.includes('Stable Diffusion')) aiSystem = 'stable-diffusion';
        else if (systemPrompt.includes('Claude')) aiSystem = 'claude';
        else if (systemPrompt.includes('DALL-E')) aiSystem = 'dall-e';
        else if (systemPrompt.includes('Midjourney')) aiSystem = 'midjourney';
        else if (systemPrompt.includes('PaLM')) aiSystem = 'palm';
        
        // Generate an enhanced prompt based on the input and AI system
        return generateEnhancedPrompt(userPrompt, aiSystem);
    } catch (error) {
        console.error('Error in invokeAIAgent:', error);
        throw new Error('Failed to process prompt with AI agent');
    }
}

function generateEnhancedPrompt(userPrompt, aiSystem) {
    // Basic template structure for enhanced prompts
    const templates = {
        'gpt-4': (prompt) => {
            return `# Enhanced Prompt for GPT-4

## Context and Objective
${prompt}

## Desired Output Format
- Detailed explanation
- Step-by-step process
- Code examples (if applicable)
- References or citations

## Parameters
- Temperature: 0.7
- Max tokens: 1024
- Top_p: 0.95
- Frequency penalty: 0.5

## Error Handling
Please indicate if any part of this request is unclear or if you need additional information.`;
        },
        
        'stable-diffusion': (prompt) => {
            return `# Enhanced Image Generation Prompt for Stable Diffusion

## Subject/Content
${prompt}

## Style and Composition
- Style: Photorealistic, detailed
- Composition: Rule of thirds, dynamic angle
- Lighting: Dramatic lighting with strong shadows
- Color palette: Rich, vibrant colors

## Technical Parameters
- Steps: 50
- CFG Scale: 7.5
- Size: 1024x1024
- Sampler: Euler a

## Negative Prompt
blurry, low quality, distorted, deformed, disfigured, bad anatomy`;
        },
        
        'claude': (prompt) => {
            return `# Enhanced Analytical Prompt for Claude

## Query
${prompt}

## Analytical Framework
- Comprehensive analysis
- Multiple perspectives
- Evidence-based reasoning
- Logical structure

## Evaluation Criteria
- Accuracy and precision
- Depth of analysis
- Clarity of reasoning
- Practical applications

## Output Structure
1. Executive summary
2. Detailed analysis
3. Key insights
4. Recommendations
5. References/sources`;
        },
        
        'dall-e': (prompt) => {
            return `# Enhanced Visual Prompt for DALL-E

## Core Subject
${prompt}

## Visual Elements
- Main focus: Detailed, center composition
- Background: Subtle, complementary setting
- Foreground details: Rich textures and details

## Style and Medium
- Artistic style: Hyperrealistic
- Color palette: Vibrant complementary colors
- Rendering technique: Digital painting with photographic elements

## Composition
- Perspective: Slight low angle
- Framing: Rule of thirds
- Depth: Multiple layers with foreground, middle ground, and background`;
        },
        
        'midjourney': (prompt) => {
            return `${prompt}, 8k, hyperdetailed, cinematic lighting, volumetric light, ray tracing, depth of field, film grain, Hasselblad --v 5 --ar 16:9 --chaos 20 --style raw --q 2

[Midjourney parameters explained]
--v 5: Version 5 model
--ar 16:9: Widescreen aspect ratio
--chaos 20: Higher stylistic variation
--style raw: Natural, unprocessed style
--q 2: Higher quality rendering`;
        },
        
        'palm': (prompt) => {
            return `# Enhanced Analytical Prompt for PaLM

## Query Context
${prompt}

## Structured Format
{
  "query": "${prompt}",
  "requirements": [
    "detailed analysis",
    "multiple perspectives",
    "evidence-based reasoning"
  ],
  "responseFormat": {
    "sections": [
      "Executive Summary",
      "Detailed Analysis",
      "Key Insights",
      "Recommendations"
    ],
    "includeReferences": true,
    "formatCode": true
  }
}

## Response Parameters
- Depth: Comprehensive
- Perspective: Balanced
- Citation: Required
- Examples: Practical applications`;
        }
    };
    
    // Get the template function for the specified AI system or default to GPT-4
    const templateFn = templates[aiSystem] || templates['gpt-4'];
    
    // Generate and return the enhanced prompt
    return templateFn(userPrompt);
}