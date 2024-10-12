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

async function hello(event) {
  event.preventDefault();
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

  const reqBody = {
      "name": document.getElementById("form-name").value,
      "email": document.getElementById("form-email").value,
      "message": document.getElementById("form-message").value
  };

  const url = 'https://studio-rangeen-backend.onrender.com/send-email';

  try {
      const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(reqBody),
      });

      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;



  } catch (error) {
      console.error('Error sending email:', error);
      throw error;
  }
}
// document.querySelectorAll(".nav-links a:not(:last-child)").forEach((link)=>{
//   console.log(link);
  
//   console.log(link.href, window.location.href);
  
// if (link.href === window.location.href) {
//   link.classList.add("active")
// }

// })

// function hello(){
// const reqBody = {"name": document.getElementById("form-name").value,
// "email": document.getElementById("form-email").value,
// "message": document.getElementById("form-message").value
//   };

//     const url = 'https://studio-rangeen-backend.onrender.com/send-email';
  
//     try {
//         const response = fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(reqBody),
//         });
  
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
  
//         const data = response.json();
//         return data; // Return the response data
//     } catch (error) {
//         console.error('Error sending email:', error);
//         throw error;
//     }
  
// }

// async function hello() {
//   const reqBody = {
//       "name": document.getElementById("form-name").value,
//       "email": document.getElementById("form-email").value,
//       "message": document.getElementById("form-message").value
//   };

//   const url = 'https://studio-rangeen-backend.onrender.com/send-email';

//   try {
//       const response = await fetch(url, {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(reqBody),
//       });

//       if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json(); // Await the response.json() call
//       return data; // Return the response data
//   } catch (error) {
//       console.error('Error sending email:', error);
//       throw error; // Rethrow the error after logging it
//   }
// }




// Example usage:
// hello()
//     .then(response => console.log('Email sent successfully:', response))
//     .catch(error => console.error('Failed to send email:', error));



// const msgSubmit = querySelector(".msgbox-submit").addEventListener('click', ()=>{
// })

// function world(){
//   hello()
//       .then(response => console.log('Email sent successfully:', response))
//       .catch(error => console.error('Failed to send email:', error));
// }



// function sendMsg(String fName, String email, String msg) {
//   const reqBody = requestBody;
// }