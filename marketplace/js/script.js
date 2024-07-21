

document.addEventListener('click', function (e) {
    const targetElement = e.target;
    if (targetElement.closest('.menu-icon')) {
        document.documentElement.classList.toggle('menu-open');
    }

    if (targetElement.closest('.header__link')) {
        document.documentElement.classList.remove('menu-open');
    }
});

function updateCountdown() {
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    let timeLeft = 59 * 60 * 60 + 59 * 60 + 59; // 59 hours, 59 minutes, 59 seconds

    setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(interval);
        }

        const hrs = Math.floor(timeLeft / 3600);
        const mins = Math.floor((timeLeft % 3600) / 60);
        const secs = timeLeft % 60;

        hours.textContent = String(hrs).padStart(2, '0');
        minutes.textContent = String(mins).padStart(2, '0');
        seconds.textContent = String(secs).padStart(2, '0');

        timeLeft--;
    }, 1000);
}

updateCountdown();
