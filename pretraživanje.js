document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('input[type="search"]');
    const searchBtn = document.querySelector('.btn-outline-success');

    // Funkcija koja filtrira
    const filtrirajProizvode = () => {
        const pojam = searchInput.value.toLowerCase();
        // Ovdje stavi klasu koju imaju tvoji proizvodi (npr. .card ili .item)
        const proizvodi = document.querySelectorAll('.card');

        proizvodi.forEach(proizvod => {
            const tekst = proizvod.innerText.toLowerCase();
            if (tekst.includes(pojam)) {
                proizvod.style.display = ""; // Prikazuje (vraća na default)
            } else {
                proizvod.style.display = "none"; // Skriva
            }
        });
    };

    // Pokreni na klik gumba
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        filtrirajProizvode();
    });

    // Pokreni dok korisnik tipka (opcionalno, za bržu pretragu)
    searchInput.addEventListener('input', filtrirajProizvode);
});