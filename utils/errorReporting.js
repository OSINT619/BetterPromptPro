/**
 * Error reporting utility for BetterPromptPro
 * Handles graceful error reporting and logging
 */

function reportError(error, componentName = 'Unknown') {
    // Log to console with component info
    console.error(`[${componentName}] Error:`, error);
    
    // In production, you might want to send this to a monitoring service
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        // Simulating error reporting to a service
        console.info('Error would be reported to monitoring service in production');
        
        // Example of what real reporting might look like:
        // fetch('/api/log-error', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         component: componentName,
        //         message: error.message,
        //         stack: error.stack,
        //         timestamp: new Date().toISOString()
        //     })
        // }).catch(err => console.error('Failed to report error:', err));
    }
    
    // Return a generic error message that can be displayed to the user
    return {
        message: 'Something went wrong. Please try again.',
        timestamp: new Date().toISOString()
    };
}

// Export the reportError function to be used in components
window.reportError = reportError;