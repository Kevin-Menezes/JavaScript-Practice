// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {

    // This is to adjust the visibility of the navbar links
    if (links.classList.contains('show-links')) {
        links.classList.remove('show-links'); // If show-links class is there then we remove it
    }
    else {
        links.classList.add('show-links'); // Else we add it
    }
    
    // links.classList.toggle('show-links'); // This line does the same thing as the top 4 lines
})