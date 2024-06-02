function updateTime() {
    const now = new Date();

    // Delhi (India Standard Time)
    const options = {
        timeZone: "Asia/Kolkata",
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const timeDelhi = new Intl.DateTimeFormat('en-IN', options).format(now);

    const timeParts = timeDelhi.split(', ');
    const day = timeParts[0];
    const date = timeParts[1];
    const time = timeParts[2];

    document.getElementById('time-delhi').textContent = time;
    document.getElementById('date-delhi').textContent = date;
    document.getElementById('day-delhi').textContent = day;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to set the time immediately when the page loads
updateTime();
