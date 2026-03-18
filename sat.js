function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('hr-HR', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });
    const clockElement = document.getElementById("clock");
    if(clockElement) {
        clockElement.innerHTML = '<i class="far fa-clock me-2"></i>' + timeString;
    }
}

// Pokretanje sata
setInterval(updateClock, 1000);
updateClock();