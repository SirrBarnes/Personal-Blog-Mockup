// TODO: Create a variable that selects the form element
const formEl = document.querySelector('form');
const userNameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const errorMessage = document.getElementById('error');


// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function formSubmission(event) {
  event.preventDefault();
  
  const formObj = {
    userName: userNameInput.value,
    title: titleInput.value,
    content: contentInput.value.trim()
  };
  
  storeLocalStorage(formObj);
  redirectPage('./blog.html');
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
formEl.addEventListener('submit', formSubmission);