// ======================================
// UNIVERSALNI SMOOTH SCROLL ZA NAVBAR
// ======================================
document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const targetId = href.substring(1).replace('-', '_'); // o-nama -> o_nama
    const section = document.getElementById(targetId);
    
    if (section) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 10;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ======================================
// SCROLL TO TOP DUGME - POPRAVLJENO
// ======================================
let mybutton = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

mybutton.addEventListener("click", scrollToTop);

// ======================================
// INICIJALIZACIJA NAKON UČITAVANJA
// ======================================
document.addEventListener('DOMContentLoaded', function() {
  // Osiguraj da su svi elementi spremni
  console.log('DOM učitan, scroll funkcionalnosti aktivne');
});
