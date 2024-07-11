// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggle = document.querySelector('#toggle');
const container = document.querySelector('.card')
const aside = document.querySelector('aside');
const themeMode = document.querySelector('body')


toggle.addEventListener('click', function() {
  themeMode.setAttribute('class', localStorage.getItem('themeMode'));
  
  if (themeMode.classList.contains('dark')) {
    themeMode.setAttribute('class', 'light');
    document.documentElement.style.setProperty('--circle-color', '#ffb100');
    localStorage.setItem('themeMode', 'light');
    toggle.textContent = "☀️";
  } else {
    themeMode.setAttribute('class', 'dark');
    document.documentElement.style.setProperty('--circle-color', '#19408a');
    localStorage.setItem('themeMode', 'dark');
    toggle.textContent = "🌙";
  }
});

// TODO: Create a function that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage (){
  const localData = JSON.parse(localStorage.getItem('formItems'));

  if (localData == null) {
    return;
  } else {
    return localData;
  }
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(object) {
  const formData = [];

  formData.push(object);
  
  localStorage.setItem('formItems', JSON.stringify(formData));
}  

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};






// document.getElementById("check").onclick = function() {
//   let allAreFilled = true;
//   document.getElementById("myForm").querySelectorAll("[required]").forEach(function(i) {
//     if (!allAreFilled){ 
//       return;
//     }
//     if (i.type === "radio") {
//       let radioValueCheck = false;
//       document.getElementById("myForm").querySelectorAll(`[name=${i.name}]`).forEach(function(r) {
//         if (r.checked) {
//           radioValueCheck = true;
//         }
//       })
//       allAreFilled = radioValueCheck;
//       return;
//     }
//     if (!i.value) { 
//       allAreFilled = false;  return; 
//     }
//   })
//   if (!allAreFilled) {
//     alert('Fill all the fields');
//   }
// };