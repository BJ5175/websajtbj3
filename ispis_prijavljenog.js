// ✅ PROVJERAVA LOCALSTORAGE 'prijavljeniKorisnik'
function azurirajPrijavljenog() {
    const el = document.getElementById('ispisprijavljenog');
    if (!el) return;
    
    const trenutniKorisnik = localStorage.getItem('prijavljeniKorisnik');
    
    if (trenutniKorisnik) {
        el.innerHTML = `Dobrodošao, <strong style="color:#025370">${trenutniKorisnik}</strong>!
                        <a href="#" onclick="odjaviSe()" style="font-size:0.8rem;color:#025370;text-decoration:none;margin-left:8px;">Odjavi</a>`;
    } else {
        el.innerHTML = 'Odjavljeni ste. <a href="/html/login.html" style="font-size:0.8rem;color:#025370;text-decoration:none;margin-left:8px;">Prijavite se</a>';
    }
}

function odjaviSe() {
    localStorage.removeItem('prijavljeniKorisnik');
    azurirajPrijavljenog();
    onclick.window.location.href = '/html/login.html';
}

document.addEventListener('DOMContentLoaded', azurirajPrijavljenog);