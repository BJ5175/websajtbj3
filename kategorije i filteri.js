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