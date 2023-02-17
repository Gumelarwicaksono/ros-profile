/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });

// ===== FUNCTION SEND EMAIL CONTACT ME ========//
// Mendapatkan elemen-elemen HTML dari halaman web
const nameInput = document.querySelector('.contact__input[type="text"]');
const emailInput = document.querySelector('.contact__input[type="email"]');
const messageInput = document.querySelector('.contact__input[type="textarea"]');
const sendButton = document.querySelector('.contact__button');

// Menambahkan event listener pada tombol "send"
sendButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Mengambil nilai input dari elemen-elemen HTML
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // Mengirim email menggunakan Node.js
  const nodemailer = require('nodemailer');

  // Konfigurasi SMTP transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'email_anda@gmail.com', // Masukkan alamat email Anda di sini
      pass: 'password_anda', // Masukkan password email Anda di sini
    },
  });

  // Konfigurasi email
  const mailOptions = {
    from: email,
    to: 'wulansarirosi9@gmail.com', // Masukkan alamat email penerima di sini
    subject: 'Pesan dari ' + name,
    text: message,
  };

  // Kirim email menggunakan transporter
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email berhasil dikirim: ' + info.response);
    }
  });

  // Mengosongkan nilai input setelah mengirim email
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
});
