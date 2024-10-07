// ------------FILTER-CODE--------------
const filterCont = document.querySelector(".gallery-filters");
const filters = filterCont.querySelectorAll(".filter-btn");
const frames = document.querySelectorAll(".img-cont");
const gallery = document.querySelector(".gallery");

fitlerCategories("general");

filters.forEach((filter) => {
  filter.addEventListener("click", (e) => {
    const filterdata = e.target.getAttribute("data-filter");

    // toggle active class
    changeactive(e.target);
    fitlerCategories(filterdata);
  });
});

function changeactive(newButton) {
  // find the current active button
  const currentActive = filterCont.querySelector(".active");

  // if there is an active button, remove the active class
  if (currentActive) {
    currentActive.classList.remove("active");
  }
  // add active to the new button
  newButton.classList.add("active");
}

function fitlerCategories(filterdata) {
  // get category, and check if filter matches category
  // if matches show, if not hide
  frames.forEach((frame) => {
    const frameCategory = frame.getAttribute("data-category");
    if (filterdata === "all" || filterdata === frameCategory) {
      frame.style.display = "flex";
    } else {
      frame.style.display = "none";
    }
  });
}

//POP-UP CODE-----------------------
// const popupCont = document.querySelector(".gallery-popups");
// const popups = document.querySelectorAll(".popup");
// const popupContent = document.querySelector(".popup-content");
// const imgCont = document.querySelectorAll(".img-cont");

// // popupCont.addEventListener("click", () => {
// // });

// imgCont.forEach((imglol) => {
//   imglol.addEventListener("click", () => {
//     let imgName = imglol.getAttribute("data-name");

//     popups.forEach((popup) => {

//       popupCont.addEventListener("click", () => {
//         popup.classList.remove("active");
//         popupCont.style.display = "none";
//       });

//       let popupName = popup.getAttribute("data-popup");
//       if (imgName == popupName) {
//         popup.classList.add("active");
//         popupCont.style.display = "flex";
//       }
//     });
//   });
// });


var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true
  },
  spaceBetween: 60,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});