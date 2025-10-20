// Display current time
function displayTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    timeElement.textContent = now.toLocaleString();
}

// Update time when page loads
displayTime();
