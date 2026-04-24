document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.getElementById('loginAction');
    const msg = document.getElementById('status-msg');
    const usernameInp = document.getElementById('username');
    const passwordInp = document.getElementById('password');

    // Glavna funkcija za prijavu
    function handleLogin() {
        const username = usernameInp.value.trim();
        const password = passwordInp.value;

        // Resetovanje poruka
        msg.innerText = '';
        msg.style.color = '';

        // 1. Validacija praznih polja
        if (!username || !password) {
            updateStatus("Unesite korisničko ime i lozinku!", "#ff4d4d");
            return;
        }

        // 2. Provjera za Admina (Hardkodirani "backdoor")
        if (username === "Admin" && password === "admin123") {
            processLoginSuccess("Admin");
            return;
        }

        // 3. Provjera u LocalStorage za registrovane korisnike
        const userDataRaw = localStorage.getItem(username);

        if (userDataRaw) {
            const userData = JSON.parse(userDataRaw);

            if (userData.password === password) {
                processLoginSuccess(userData.firstName || username);
            } else {
                updateStatus("Pogrešna lozinka!", "#ff4d4d");
            }
        } else {
            updateStatus("Korisnik ne postoji!", "#ffaa00");
        }
    }

    // Pomoćna funkcija za uspješnu prijavu
    function processLoginSuccess(displayName) {
        localStorage.setItem('prijavljeniKorisnik', displayName);
        updateStatus(`Uspješno ulogovan, ${displayName}!`, "#00ff88");

        setTimeout(() => {
            window.location.href = '/html/login_prijavljen.html';
        }, 1000);
    }

    // Pomoćna funkcija za ispis poruka
    function updateStatus(text, color) {
        msg.innerText = text;
        msg.style.color = color;
    }

    // Event Listeneri
    loginBtn.addEventListener('click', handleLogin);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') handleLogin();
    });
});