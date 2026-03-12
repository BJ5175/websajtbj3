function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");

    if (cityName === 'Sve') {
        // Prikaži SVE sekcije
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "block";
        }
    } else {
        // Sakrij sve i prikaži samo odabranu
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        var selectedTab = document.getElementById(cityName);
        if (selectedTab) {
            selectedTab.style.display = "block";
            console.log("Prikazana kategorija: " + cityName);
        }
    }

    // Upravljanje aktivnom klasom na dugmićima
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    if (evt) {
        evt.currentTarget.classList.add("active");
    }
}

// OVO JE KLJUČNI DIO: Pokreće "Sve" čim se stranica učita
window.onload = function () {
    openCity(null, 'Sve');
    console.log("Stranica sve učitana.");
};

function sortirajProizvode(order) {
    // 1. Pronađi sve kolone koje sadrže kartice (.col-sm-3)
    let proizvodi = Array.from(document.querySelectorAll(".tabcontent .col-sm-3"));

    // 2. Sortiraj ih matematički
    proizvodi.sort((a, b) => {
        // Uzmi vrijednost iz data-price atributa
        let priceElemA = a.querySelector(".item-price");
        let priceElemB = b.querySelector(".item-price");

        // Ako nema elementa, postavi cijenu na 0
        let cijenaA = priceElemA ? Number(priceElemA.getAttribute("data-price")) : 0;
        let cijenaB = priceElemB ? Number(priceElemB.getAttribute("data-price")) : 0;

        if (order === 'asc') {
            return cijenaA - cijenaB; // Od 799 do 1590
        } else {
            return cijenaB - cijenaA; // Od 1590 do 799
        }
    });

    // 3. Isprazni trenutne redove i prikaži sve sortirano u prvom tabu
    let sviTabovi = document.querySelectorAll(".tabcontent");
    let glavniTab = sviTabovi[0];
    let glavniRow = glavniTab.querySelector(".row");

    // Sakrij sve tabove
    sviTabovi.forEach(tab => tab.style.display = "none");

    // Očisti glavni red i ubaci sortirane proizvode
    glavniRow.innerHTML = "";
    proizvodi.forEach(p => glavniRow.appendChild(p));

    // Prikaži taj tab sa svim proizvodima
    glavniTab.style.display = "block";
}