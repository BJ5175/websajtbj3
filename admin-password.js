document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginActionAdmin');
    const passwordInput = document.getElementById('password-admin');
    const statusMsg = document.getElementById('status-msg');

    // Postavi željenu lozinku ovde
    const correctPassword = "4578"; 

    const handleLogin = () => {
        const enteredPassword = passwordInput.value;

        if (enteredPassword === correctPassword) {
            statusMsg.textContent = "Uspešna prijava! Učitavanje...";
            statusMsg.style.color = "#00ff00"; // Zelena za uspeh
            
            // Opciono: Preusmeri korisnika nakon 1 sekunde
             setTimeout(() => { window.location.href = "/html/admin.html"; }, 1000);
        } else {
            statusMsg.textContent = "Pogrešna lozinka!";
            statusMsg.style.color = "#ff4d4d"; // Crvena za grešku
        }
    };

    // Event listener za klik na dugme
    loginButton.addEventListener('click', handleLogin);

    // Event listener za taster Enter u polju za lozinku
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleLogin();
        }
    });
});