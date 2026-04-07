/**
 * LOGIN.JS - Logika za prijavu korisnika
 * Koristi localStorage za simulaciju baze podataka
 */

// 1. Selektovanje elemenata iz HTML-a
const userInp = document.getElementById('username');
const passInp = document.getElementById('password');
const loginBtn = document.getElementById('loginAction');
const regRedirectBtn = document.getElementById('registerAction');
const msg = document.getElementById('status-msg');

/**
 * Pomoćna funkcija za prikazivanje vizuelnih poruka korisniku
 * @param {string} text - Tekst poruke
 * @param {string} color - Hex kod boje (npr. #4dcfff)
 */
function showMessage(text, color) {
    if (msg) {
        msg.innerText = text;
        msg.style.color = color;
        // Automatsko brisanje poruke nakon 4 sekunde
        setTimeout(() => {
            msg.innerText = "";
        }, 4000);
    }
}

// 2. Event Listener za dugme "Uloguj se"
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        const username = userInp.value.trim();
        const password = passInp.value;

        // Provera da li su polja prazna
        if (!username || !password) {
            showMessage("Molimo popunite sva polja!", "#e11d48"); // Crvena
            return;
        }

        // Pokušaj dobavljanja podataka iz pretraživača
        const rawData = localStorage.getItem(username);

        if (rawData) {
            try {
                /* POKUŠAJ: Novi sistem (JSON format)
                   Register.js sada čuva podatke kao: {"password": "...", "firstName": "..."}
                */
                const userData = JSON.parse(rawData);

                if (userData && userData.password === password) {
                    // Uspešna prijava sa novim profilom
                    const ime = userData.firstName || username;
                    showMessage(`Dobrodošli nazad, ${ime}!`, "#10b981"); // Zelena

                    // Preusmeravanje na početnu stranicu nakon 1.2 sekunde
                    setTimeout(() => {
                        window.location.href = "../index.html";
                    }, 1200);

                } else {
                    showMessage("Netačna lozinka!", "#e11d48");
                }

            } catch (error) {
                /* REZERVA: Stari sistem (Običan tekst)
                   Ako JSON.parse pukne, znači da je u memoriji samo obična lozinka (stari nalog).
                */
                if (rawData === password) {
                    showMessage("Uspešna prijava (stari profil)!", "#10b981");

                    setTimeout(() => {
                        window.location.href = "../index.html";
                    }, 1200);
                } else {
                    showMessage("Netačna lozinka!", "#e11d48");
                }
            }
        } else {
            // Korisnik uopšte ne postoji u bazi
            showMessage("Korisnik nije pronađen. Registrujte se!", "#f59e0b"); // Narandžasta
        }
    });
}

// 3. Event Listener za dugme "Registruj se" (Preusmeravanje)
if (regRedirectBtn) {
    regRedirectBtn.addEventListener('click', () => {
        // Vodi korisnika na stranicu za registraciju
        window.location.href = "register.html";
    });
}

// Opciono: Omogući prijavu pritiskom na taster "Enter" dok je fokus u polju za lozinku
if (passInp) {
    passInp.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            loginBtn.click();
        }
    });
}