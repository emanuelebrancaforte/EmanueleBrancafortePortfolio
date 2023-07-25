/*Intro animation*/
const intro = document.querySelector(".intro");
const logo = document.querySelector(".logo-header");
const logoSpan = document.querySelectorAll(".logo");


var header = document.getElementById('head');

var headerHeight = header.offsetHeight;

window.addEventListener('scroll', function() {
  if (window.scrollY > headerHeight) {
    header.classList.add('header-with-bg');
  } else {
    header.classList.remove('header-with-bg');
  }
});



window.onscroll = function() {functionScrollBar()};

function functionScrollBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

window.addEventListener("DOMContentLoaded", () => {
  logoSpan.forEach((span, idx) => {
    setTimeout(() => {
      span.classList.add("appear");
    }, (idx + 1) * 90);
  });

  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.remove("appear");
        span.classList.add("fade");
      }, (idx + 1) * 80);
    });
  }, 2000);

  setTimeout(() => {
    intro.style.top = "-100vh";
  }, 1500);
});

window.addEventListener('DOMContentLoaded', (event) => {
		  var audio = document.getElementById("audio_keyboard");
		  audio.play();
		});

/*Show menu*/
const showMenu = (toggleId, navID) => {
  const toggle = document.getElementById(toggleId);
  nav = document.getElementById(navID);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show_menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

//----------ACTIVE LINK NAV BAR ON SCROLL-------------//
const links = document.querySelectorAll('.nav_link');
let activeLink = null;

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    
    if (entry.intersectionRatio >= 0.5) {
      const correspondingLink = document.querySelector(`.nav_link[href="#${id}"]`);
      
      // Controlla se l'elemento corrente è la sezione Home
      if (id === 'home') {
        // Rimuovi la classe "active" da tutti i link
        links.forEach(link => link.classList.remove('active'));
      } else {
        // Rimuovi la classe "active" dal link precedente, se presente
        if (activeLink) {
          activeLink.classList.remove('active');
        }
        // Aggiungi la classe "active" al link corrispondente
        correspondingLink.classList.add('active');
      }
      activeLink = correspondingLink;
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('section[id]').forEach(section => {
  observer.observe(section);
});

//-----------------------//


/*Active and remove menu*/
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*This is for removing menu on click on mobile*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show_menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*Auto write text*/

var app = document.getElementById("autoWrite");

var welcome = document.getElementById("welcome");

var typewriter = new Typewriter(app, {
  strings: [
    "A CREATIVE","A SOFTWARE DEVELOPER", "A COMPUTER ENGINEER", "A PHOTOGRAPHY ENTHUSIAST"],
  loop: true,
  autoStart: true,
  pauseFor: 200,
  delay: 100,
});

var typewriterWelcome = new Typewriter(welcome, {
  strings: "< WELCOME >",
  loop: false,
  autoStart: true,
  delay: 50,
});


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  distance: "40px",
  duration: 1200,
  reset: true,
});

// Variabile per tenere traccia del primo caricamento
let isFirstLoad = true;

// Funzione per far partire le animazioni con il ritardo iniziale
function startAnimationsWithDelay() {
    sr.reveal(".home_title", {  origin: 'left' });
    sr.reveal(".fade-r", {  interval: 50 });
    sr.reveal("#autowrite", { origin: 'left', distance: "10px" });
    sr.reveal(".home_social-icon", { delay: 600, interval: 200 });
    sr.reveal(".l-header", {origin: 'bottom', delay: 400 });
}

// Funzione per far partire le animazioni senza ulteriori ritardi
function startAnimationsWithoutDelay() {
    sr.reveal(".home_title", { origin: 'left' });
    sr.reveal(".fade-r", { interval: 50 });
    sr.reveal("#autowrite", { origin: 'left', delay: 600, distance: "10px" });
    sr.reveal(".home_social-icon", { delay: 600, interval: 200 });
    sr.reveal(".l-header", {origin: 'bottom', delay: 400 });
}

// Aspetta che la pagina sia completamente caricata
document.addEventListener("DOMContentLoaded", function() {
    // Avvia le animazioni con il ritardo solo al primo caricamento
    if (isFirstLoad) {
        // Aggiungi il ritardo solo al caricamento iniziale della pagina
        setTimeout(function() {
            startAnimationsWithDelay();
        }, 1700); // Aggiungi un ritardo di 2,5 secondi (2500 millisecondi) solo al caricamento iniziale

        // Imposta la variabile isFirstLoad su false dopo il primo caricamento
        isFirstLoad = false;
    } else {
        // Avvia le animazioni senza ulteriori ritardi
        startAnimationsWithoutDelay();
    }
});

// Aggiungi un listener per l'evento di scroll
window.addEventListener("scroll", function() {
    // Quando avviene il primo scroll, imposta la variabile isFirstLoad su false
    if (isFirstLoad) {
        isFirstLoad = false;
    }
});



/*SCROLL HOME*/


/*SCROLL ABOUT*/
sr.reveal(".about_img", {origin: 'left'});
sr.reveal(".about_subtitle", { delay: 400 });
sr.reveal(".about_text", { delay: 400 });
sr.reveal(".interest_data", { origin: 'left', interval: 200, delay: 600 });

/*SCROLL SKILLS*/
sr.reveal(".skills_subtitle", {});
sr.reveal(".skills_text", {});
sr.reveal(".skills_data", { interval: 100 });
sr.reveal(".soft-skills_data", { interval: 100, delay: 400 });
sr.reveal(".skills_img", { interval: 200 });

sr.reveal(".progress-value", { origin: 'left'});

/*SCROLL WORK*/
sr.reveal(".work_img", { origin: 'right', delay: 200});

/*SCROLL PROJECT*/
sr.reveal(".project_img", { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal(".contact_container div", {delay: 200, interval: 200 });

/*Toggle dark mode*/
const toggleDarkMode = document.getElementById("toggle");

toggleDarkMode.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  document.getElementById("head").classList.toggle("dark");
});
document.body.classList.toggle("dark");
document.getElementById("head").classList.toggle("dark");

/*Particles.js*/
particlesJS.load("particles-js", "assets/particles.json");

const divThree = document.querySelector(".three");
const spans = document.querySelectorAll("span");


