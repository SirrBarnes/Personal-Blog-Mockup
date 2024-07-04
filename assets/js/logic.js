// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggle = document.querySelector('#toggle');
const container = document.querySelector('.card')
const aside = document.querySelector('aside');
const themeMode = document.querySelector('body')


toggle.addEventListener('click', function() {
  themeMode.setAttribute('class', localStorage.getItem('themeMode'));
  
  if (themeMode.classList.contains('dark')) {
    themeMode.setAttribute('class', 'light');
    // aside.setAttribute('style', 'background: linear-gradient(var(--light-accent), var(#0f104b), var(--dark-accent);)')
    localStorage.setItem('themeMode', 'light');
  } else {
    themeMode.setAttribute('class', 'dark');
    //aside.setAttribute('--circle-color', '#ffb100')
    localStorage.setItem('themeMode', 'dark');
  }
});

// TODO: Create a function that reads from local storage and returns the data. If no data exists, return an empty array.
const formData = [];
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
  formData.push(object);
  
  localStorage.setItem('formItems', JSON.stringify(formData));
  
}

function storeTheme() {
  if (themeMode.classList.contains('dark')) {
    localStorage.setItem('themeMode', 'dark');
    themeMode.setAttribute('class', 'dark');
  } else {
    localStorage.setItem('themeMode', 'light');
    themeMode.setAttribute('class', 'light');
  }
}


// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};