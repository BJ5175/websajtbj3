const userInp = document.getElementById('username');
const passInp = document.getElementById('password');
const loginBtn = document.getElementById('loginAction');
const regRedirectBtn = document.getElementById('registerAction');
const msg = document.getElementById('status-msg');

// --- DODAVANJE ADMIN NALOGA ---
// Proveravamo da li admin već postoji, ako ne, kreiramo ga u formatu koji tvoj sistem očekuje
if (!localStorage.getItem('admin')) {
    const adminData = {
        firstName: "Administrator",
        lastName: "Sistema",
        birthDate: "1990-01-01",
        password: "admin123"
    };
    localStorage.setItem('admin', JSON.stringify(adminData));
    console.log("Admin nalog je uspešno kreiran u pozadini.");
}

function showMessage(text, color) {
    if (msg) {
        msg.innerText = text;
        msg.style.color = color;
        setTimeout(() => { msg.innerText = ""; }, 4000);
    }
}

// LOGIKA ZA LOGIN
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        const username = userInp.value.trim();
        const password = passInp.value;

        if (!username || !password) {
            showMessage("Molimo popunite sva polja!", "#e11d48");
            return;
        }

        const rawData = localStorage.getItem(username);

        if (rawData) {
            try {
                const userData = JSON.parse(rawData);

                if (userData && userData.password === password) {
                    showMessage(`Dobrodošli nazad, ${userData.firstName || username}!`, "#10b981");
                    setTimeout(() => {
                        window.location.href = "../index.html";
                    }, 1200);
                } else {
                    showMessage("Netačna lozinka!", "#e11d48");
                }
            } catch (error) {
                // Podrška za stare naloge koji nisu JSON
                if (rawData === password) {
                    showMessage("Uspešna prijava!", "#10b981");
                    setTimeout(() => { window.location.href = "../index.html"; }, 1200);
                } else {
                    showMessage("Netačna lozinka!", "#e11d48");
                }
            }
        } else {
            showMessage("Korisnik nije pronađen!", "#f59e0b");
        }
    });
}

// PREUSMERAVANJE NA REGISTRACIJU
if (regRedirectBtn) {
    regRedirectBtn.addEventListener('click', () => {
        window.location.href = "register.html"; 
    });
}