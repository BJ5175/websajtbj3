document.getElementById('apply-changes').addEventListener('click', function() {
    const btn = this;
    const msg = document.getElementById('saving-msg');
    const frame = document.getElementById('preview-frame');
    const themeColor = document.getElementById('theme-color').value;

    // 1. Vizuelna simulacija učitavanja
    btn.disabled = true;
    btn.textContent = "Ažuriranje...";
    msg.style.display = "block";
    msg.textContent = "Povezivanje sa bazom podataka...";

    // 2. "Menjamo" nešto na samoj admin stranici (npr. boju okvira iframe-a)
    setTimeout(() => {
        msg.textContent = "Menjanje CSS varijabli...";
        frame.style.borderColor = themeColor;
        document.querySelector('.sidebar').style.borderLeft = `5px solid ${themeColor}`;
    }, 1000);

    // 3. Završetak simulacije
    setTimeout(() => {
        btn.disabled = false;
        btn.textContent = "Sačuvaj izmene";
        msg.textContent = "Izmene su uspešno primenjene (simulirano)!";
        msg.style.color = "#00ff00";

        // Sakrij poruku nakon 3 sekunde
        setTimeout(() => { msg.style.display = "none"; }, 3000);
    }, 2500);
});