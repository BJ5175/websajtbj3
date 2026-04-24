// ✅ PROVJERAVA LOCALSTORAGE 'prijavljeniKorisnik'
function azurirajPrijavljenog() {
    const el = document.getElementById('ispisprijavljenog');
    if (!el) return;
    
    const trenutniKorisnik = localStorage.getItem('prijavljeniKorisnik');
    
    if (trenutniKorisnik) {
        el.innerHTML = `Dobrodošao, <strong style="color:#025370">${trenutniKorisnik}</strong>!
                        <a href="#" onclick="odjaviSe()" style="font-size:0.8rem;color:#025370;text-decoration:none;margin-left:8px;">Odjavi</a>`;
    } else {
        el.innerHTML = 'Odjavljeni ste.';
    }
}

function odjaviSe() {
    localStorage.removeItem('prijavljeniKorisnik');
    azurirajPrijavljenog();
    window.location.href = '../index.html';
}

document.addEventListener('DOMContentLoaded', azurirajPrijavljenog);