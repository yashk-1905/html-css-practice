// let btn = document.querySelector('.select-button');
// let fullContainer = querySelector('.custom-select');
// let list = document.querySelectorAll('.select-dropdown li');
// let selectedVaue = document.querySelector('.selected-value')

// btn.addEventListener("click", () => {
//   fullContainer.flassList.toggle("active");
//   btn.setAttribute("aria-expanded",
//     btn.getAttribute("ara-expanded") === "true" ? "false" : "true"
//   )
// })

// list.forEach((li) => function handler(e){
//   if(e.type === "click"){
//     selectedVaue.textContent = this.textContent; 
//     fullContainer.classList.remove("active");
//   }
//   li.addEventListener("click", handler);
// })

let btn = document.querySelector('.select-button');
let fullContainer = document.querySelector('.custom-select');
let list = document.querySelectorAll('.select-dropdown li');
let selectedVaue = document.querySelector('.selected-value');

btn.addEventListener("click", () => {
  fullContainer.classList.toggle("active");
  btn.setAttribute("aria-expanded",
    btn.getAttribute("aria-expanded") === "true" ? "false" : "true"
  )
})

list.forEach((option) => {
  function handler(e) {
    if (e.type === "click") {
      selectedVaue.textContent = this.textContent;
      fullContainer.classList.remove("active");
    }
  }
  option.addEventListener("click", handler);
})


// //////////////////////
let btn_city = document.querySelector('.select-button.select-city');
let btn_state = document.querySelector('.select-button.select-state');
let btn_location = document.querySelector('.select-button.select-location');
let btn_language = document.querySelector('.select-button.select-language');
let fullContainer_city = document.querySelector('.custom-select.custom-select-city');
let fullContainer_state = document.querySelector('.custom-select.custom-select-state');
let fullContainer_location = document.querySelector('.custom-select.custom-select-location');
let fullContainer_language = document.querySelector('.custom-select.custom-select-language');
let list_city = document.querySelectorAll('.select-dropdown.select-city-dropdown li');
let list_state = document.querySelectorAll('.select-dropdown.select-state-dropdown li');
let list_location = document.querySelectorAll('.select-dropdown.select-location-dropdown li');
let list_language = document.querySelectorAll('.select-dropdown.select-language-dropdown li');
let selectedVaue_city = document.querySelector('.select-city .selected-value');
let selectedVaue_state = document.querySelector('.select-state .selected-value');
let selectedVaue_location = document.querySelector('.select-location .selected-value');
let selectedVaue_language = document.querySelector('.select-language .selected-value');

// btn_city.addEventListener("click",
//   runEvents(btn_city, list_city, selectedVaue_city, fullContainer_city)
// )
// btn_state.addEventListener("click",
//   runEvents(btn_state, list_state, selectedVaue_state, fullContaine_stater)
// )
// btn_location.addEventListener("click",
//   runEvents(btn_location, list_location, selectedVaue_location, fullContainer_location)
// )
// btn_language.addEventListener("click",
//   runEvents(btn_language, list_language, selectedVaue_language, fullContainer_language)
// )


// function runEvents(btn, list, selectedVaue, fullContainer) {
//   btn.addEventListener("click", () => {
//     fullContainer.classList.toggle("active");
//     btn.setAttribute("aria-expanded",
//       btn.getAttribute("aria-expanded") === "true" ? "false" : "true"
//     )
//   })

//   list.forEach((option) => {
//     function handler(e) {
//       if (e.type === "click") {
//         selectedVaue.textContent = this.textContent;
//         fullContainer.classList.remove("active");
//       }
//     }
//     option.addEventListener("click", handler);
//   })
// }

btn_city.addEventListener("click", () => {
    fullContainer_city.classList.toggle("active");
    btn_city.setAttribute("aria-expanded",
    btn_city.getAttribute("aria-expanded") === "true" ? "false" : "true"
  )
})

list_city.forEach((option) => {
  function handler(e) {
    if (e.type === "click") {
      selectedVaue_city.textContent = this.textContent;
      fullContainer_city.classList.remove("active");
    }
  }
  option.addEventListener("click", handler);
})