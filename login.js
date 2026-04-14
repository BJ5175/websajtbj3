document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginAction');
    const msg = document.getElementById('status-msg');
    const usernameInp = document.getElementById('username');
    const passwordInp = document.getElementById('password');

    loginBtn.addEventListener('click', function() {
        const username = usernameInp.value.trim();
        const password = passwordInp.value;
        msg.innerText = '';
        msg.style.color = '';

        if (!username || !password) {
            msg.innerText = "Unesite korisničko ime i lozinku!";
            msg.style.color = "#ff4d4d";
            return;
        }

        // ✅ IZVLAČI IZ LOCALSTORAGE
        const userDataRaw = localStorage.getItem(username);
        
        if (userDataRaw) {
            const userData = JSON.parse(userDataRaw);
            
            if (userData.password === password) {
                // ✅ SPREMA IME ZA NAVBAR
                localStorage.setItem('prijavljeniKorisnik', userData.firstName || username);
                
                msg.innerText = `Uspješno ulogovan, ${userData.firstName || username}!`;
                msg.style.color = "#00ff88";
                
                // Redirect na index.html
                setTimeout(() => {
                    window.location.href = '/html/login_prijavljen.html';
                }, 1000);
            } else {
                msg.innerText = "Pogrešna lozinka!";
                msg.style.color = "#ff4d4d";
            }
        } else {
            msg.innerText = "Korisnik ne postoji!";
            msg.style.color = "#ffaa00";
        }
    });

    // Enter key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') loginBtn.click();
    });
});