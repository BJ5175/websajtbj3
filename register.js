// Selektovanje elemenata
const registerBtn = document.getElementById('registerBtn');
const msg = document.getElementById('status-msg');

if (registerBtn) {
    registerBtn.addEventListener('click', () => {
        // Hvatanje vrednosti iz tvojih ID-jeva
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const username = document.getElementById('username').value.trim();
        const birthDate = document.getElementById('birthDate').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // 1. Provera da li su polja prazna
        if (!firstName || !lastName || !username || !password) {
            msg.innerText = "Sva polja su obavezna!";
            msg.style.color = "#ff4d4d";
            return;
        }

        // 2. Provera da li se lozinke podudaraju
        if (password !== confirmPassword) {
            msg.innerText = "Lozinke se ne podudaraju!";
            msg.style.color = "#ff4d4d";
            return;
        }

        // 3. Kreiranje objekta sa podacima
        const userData = {
            firstName: firstName,
            lastName: lastName,
            password: password,
            birthDate: birthDate
        };

        // 4. Čuvanje u localStorage (Username je ključ)
        localStorage.setItem(username, JSON.stringify(userData));

        msg.innerText = "Uspešna registracija! Preusmeravanje...";
        msg.style.color = "#00ff88";

        // Preusmeravanje na login nakon 1.5 sekunde
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1500);
    });
}