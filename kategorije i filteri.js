/**
 * **KOMPLETAN SISTEM - FILTER + SORT + SLIDER + TABOVI + SPASI DUGME**
 * Sve od maloprije u jednom fajlu
 */

function osvjeziSveFiltere(sortBy = null, sortDir = 'asc') {
    const slider = document.getElementById('range4');
    const maxCijena = slider ? parseFloat(slider.value) : 4000;
    const checkedBrands = Array.from(document.querySelectorAll('.form-check-input:checked'))
        .map(cb => cb.id.toLowerCase());

    // SVI proizvodi na stranici
    const proizvodi = document.querySelectorAll('.col-sm-3[data-brand], .product-item[data-brand]');

    proizvodi.forEach(proizvod => {
        proizvod.style.display = '';

        const priceElem = proizvod.querySelector('.item-price');
        const cijena = priceElem ? parseFloat(priceElem.getAttribute('data-price')) : 0;
        const brend = proizvod.getAttribute('data-brand')?.toLowerCase() || '';

        const passPrice = cijena <= maxCijena;
        const passBrand = checkedBrands.length === 0 || checkedBrands.includes(brend);

        if (!passPrice || !passBrand) {
            proizvod.style.display = 'none';
        }
    });

    // Sortiranje
    if (sortBy) {
        const visible = Array.from(document.querySelectorAll('.col-sm-3[data-brand]:not([style*="none"]), .product-item[data-brand]:not([style*="none"])'));
        const container = visible[0]?.parentNode;
        if (container) {
            visible.sort((a, b) => {
                if (sortBy === 'brand') {
                    const brandA = a.getAttribute('data-brand')?.toLowerCase() || '';
                    const brandB = b.getAttribute('data-brand')?.toLowerCase() || '';
                    return sortDir === 'asc' ? brandA.localeCompare(brandB) : brandB.localeCompare(brandA);
                } else {
                    const priceA = parseFloat(a.querySelector('.item-price')?.getAttribute('data-price')) || 0;
                    const priceB = parseFloat(b.querySelector('.item-price')?.getAttribute('data-price')) || 0;
                    return sortDir === 'asc' ? priceA - priceB : priceB - priceA;
                }
            });
            visible.forEach(item => container.appendChild(item));
        }
    }
}

function openCity(evt, cityName) {
    const tabcontent = document.getElementsByClassName('tabcontent');
    const tablinks = document.getElementsByClassName('tablinks');

    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = cityName === 'Sve' ? 'block' : 'none';
    }
    if (cityName !== 'Sve') {
        document.getElementById(cityName).style.display = 'block';
    }

    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
    }
    evt?.currentTarget.classList.add('active');

    osvjeziSveFiltere();
}

function sortirajProizvode(by, direction) {
    osvjeziSveFiltere(by, direction);
}

// INIT
document.addEventListener('DOMContentLoaded', function () {
    // Spasi dugme
    document.getElementById('spasiBtn')?.addEventListener('click', () => osvjeziSveFiltere());

    // Slider
    const slider = document.getElementById('range4');
    const numInput = document.getElementById('numInput');
    if (slider && numInput) {
        slider.addEventListener('input', () => {
            numInput.value = slider.value;
            osvjeziSveFiltere();
        });
        numInput.addEventListener('input', () => {
            slider.value = numInput.value;
            osvjeziSveFiltere();
        });
    }

    // Checkbox filter
    document.addEventListener('change', (e) => {
        if (e.target.matches('.form-check-input')) {
            osvjeziSveFiltere();
        }
    });

    // Dropdown ne zatvaraj
    document.querySelector('.dropdown-menu')?.addEventListener('click', (e) => e.stopPropagation());

    // POCETNO STANJE: SVI VIDLJIVI
    document.querySelectorAll('.col-sm-3[data-brand], .product-item[data-brand]').forEach(p => {
        p.style.display = '';
    });

    // Aktiviraj prvi tab
    setTimeout(() => openCity(null, 'Laptopi'), 100); // promijeni 'Laptopi'
});
