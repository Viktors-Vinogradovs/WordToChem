let timerInterval;
let isPaused = false;
let timeLeft = 0;

function countdown(initialTimeLeft) {
    timeLeft = initialTimeLeft;
    updateTimerDisplay(timeLeft);

    // Clear any existing interval before starting a new one
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (!isPaused) {
            timeLeft--;
            updateTimerDisplay(timeLeft);

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                window.location.href = '/time_out';
            }
        }
    }, 1000);
}

function updateTimerDisplay(timeLeft) {
    const timerElement = document.getElementById('timer');
    if (!timerElement) return;

    if (timeLeft <= 0) {
        timerElement.innerHTML = '⏰ Laiks ir beidzies!';
        timerElement.style.color = '#e74c3c';
    } else if (timeLeft <= 10) {
        timerElement.innerHTML = `⚠️ Atlikušais laiks: ${timeLeft} sekundes`;
        timerElement.style.color = '#e74c3c';
        // Add pulse animation when time is critical
        timerElement.style.animation = 'pulse 1s infinite';
    } else if (timeLeft <= 30) {
        timerElement.innerHTML = `⏱️ Atlikušais laiks: ${timeLeft} sekundes`;
        timerElement.style.color = '#f39c12';
        timerElement.style.animation = '';
    } else {
        timerElement.innerHTML = `⏱️ Atlikušais laiks: ${timeLeft} sekundes`;
        timerElement.style.color = '#3498db';
        timerElement.style.animation = '';
    }
}

function togglePause() {
    const pauseButton = document.getElementById('pauseButton');
    if (!pauseButton) return;

    isPaused = !isPaused;
    pauseButton.innerHTML = isPaused ? '▶️ Atsākt' : '⏸️ Pauze';

    if (isPaused) {
        clearInterval(timerInterval);
        updateRemainingTimeOnServer();
        // Visual feedback for pause
        pauseButton.style.background = 'linear-gradient(135deg, #27ae60, #219a52)';
    } else {
        countdown(timeLeft);
        // Reset button style
        pauseButton.style.background = 'linear-gradient(135deg, #2c3e50, #34495e)';
    }
}

function updateRemainingTimeOnServer() {
    fetch('/update_timer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ remaining_time: timeLeft }),
    }).catch(error => {
        console.warn('Failed to update timer on server:', error);
    });
}

// Enhanced keyboard navigation
document.addEventListener('keydown', function(e) {
    // Enter key submission (when not focused on a button)
    if (e.key === 'Enter' && e.target.tagName !== 'BUTTON') {
        e.preventDefault();
        const form = document.querySelector('form');
        if (form) {
            form.submit();
        }
    }

    // Space key to pause/unpause (when not typing in input)
    if (e.key === ' ' && e.target.tagName !== 'INPUT') {
        e.preventDefault();
        togglePause();
    }

    // Escape key functionality removed since hint button is removed
    if (e.key === 'Escape') {
        // Could be used for other functionality in the future
    }
});

// Auto-focus input fields when page loads
document.addEventListener("DOMContentLoaded", function() {
    // Focus the main input field
    const mainInput = document.getElementById('guessInput') || document.querySelector('input[type="text"]');
    if (mainInput) {
        mainInput.focus();

        // Add subtle focus animation
        mainInput.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
        });

        mainInput.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
    }
});

// Hint functionality removed for cleaner interface

// Enhanced visual feedback for buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button, .button');

    buttons.forEach(button => {
        // Add click animation
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);