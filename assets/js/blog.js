// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainEl = document.querySelector('main');
const backButt = document.querySelector('#back')

// TODO: Create a function that builds an element and appends it to the DOM
function buildElement() {
    

    const art = document.createElement('article');
    const head = document.createElement('h2');
    const block = document.createElement('blockquote');
    const par = document.createElement('p');

    mainEl.appendChild(art);
    art.appendChild(head);
    art.appendChild(block);
    art.appendChild(par);
    // mainEl.appendChild(el);
    
}

// TODO: Create a function that handles the case where there are no blog posts to display
function noBlogPost() {
    

}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    console.log(readLocalStorage());
    if (formData !== null) {
        buildElement();
    } else {
        noBlogPost();
    }
}

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
function redirect() {
    redirectPage('./index.html') 
}

backButt.addEventListener('click', redirect);