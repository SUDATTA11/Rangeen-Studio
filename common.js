// --------------NAVBAR-ACTIVE-PILL-----------------
const activePage = window.location.pathname;
console.log(activePage);

const navlinks = document.querySelectorAll(".nav-links a:not(:last-child)");
navlinks.forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});

// --------------NAVBAR-HAMBURGER-----------------
const hamCont = document.querySelector(".ham-cont");
const navLinksCont = document.querySelector(".nav-links");
const navSocials = document.querySelector(".nav-socials");
const navLinks = document.querySelectorAll(".nav-links a");

const ham = document
  .querySelector(".ham-icon")
  .addEventListener("click", () => {
    hamCont.classList.toggle("active");
    navLinksCont.classList.toggle("active");
    navSocials.classList.toggle("active");
  });
navLinks.forEach((navlink) => {
  navlink.addEventListener("click", () => {
    hamCont.classList.remove("active");
    navLinksCont.classList.remove("active");
    navSocials.classList.remove("active");
  });
});
document.addEventListener("click", (e) => {
  if (!hamCont.contains(e.target)) {
    hamCont.classList.remove("active");
    navLinksCont.classList.remove("active");
    navSocials.classList.remove("active");
  }
});

// --------------FOOTER-CONTACT-FORM-----------------
const form = document.querySelector("form");
const formName = document.getElementById("form-name");
const formEmail = document.getElementById("form-email");
const formMessage = document.getElementById("form-message");

function sendEmail() {
  const message = `Full Name: ${formName.value}</br>
                     Email id: ${formEmail.value}</br>
                     Message: ${formMessage.value}</br>`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "username",
    Password: "password",
    To: "them@website.com",
    From: formEmail.value,
    Subject: "Rangeen-Studio Contact",
    Body: message,
  }).then((message) => alert("Your message has been sent"));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();

  form.reset();
  return false;
});

// -----------NAVBAR-HIDE-ON-SCROLL-------------
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector("nav").style.top = "0";
//   } else {
//     document.querySelector("nav").style.top = "-100px";
//   }
//   prevScrollpos = currentScrollPos;
// }