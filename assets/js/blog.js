// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainEl = document.querySelector('main');
const backButt = document.querySelector('#back')

// TODO: Create a function that builds an element and appends it to the DOM
function buildElement() {
    const formD = readLocalStorage();
    console.log(formData);

    for (let i = 0; i < formD.length; i++) {
        let art = document.createElement('article');
        let head = document.createElement('h2');
        let block = document.createElement('blockquote');
        let par = document.createElement('p');

        let currentTitle = formD[i]['title'];
        let currentContent = formD[i]['content'];
        let currentUser = formD[i]['userName'];

        art.classList.add('card');

        head.textContent = currentTitle;
        block.textContent = currentContent;
        par.textContent = `Created by: ${currentUser}`;

        art.appendChild(head);
        art.appendChild(block);
        art.appendChild(par);

        mainEl.appendChild(art);
    }
}

// TODO: Create a function that handles the case where there are no blog posts to display
function noBlogPost() {
    

}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    const formD = readLocalStorage();

    if (formD !== null) {
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