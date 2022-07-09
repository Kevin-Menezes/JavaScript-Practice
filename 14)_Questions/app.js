// Traversing the dom method
// const btns = document.querySelectorAll('.question-btn');  // Selecting all + buttons at once using 'All'

// btns.forEach(function (item) { // Traversing each button
    
//     item.addEventListener('click', function (e) {
        
//         const question = e.currentTarget.parentElement.parentElement; // Accessing the parent ka parent element...ie. the main 'questions' section
//         question.classList.toggle('show-text');
//     })
// })

// Using selectors inside the element
const questions = document.querySelectorAll('.question'); // Selecting all qts in one shot

questions.forEach(function (question) { // Traversing each question one by one

    const btn = question.querySelector('.question-btn'); // Accessing each + button
    
    btn.addEventListener('click', function () {

        questions.forEach(function (item) {
            if (item !== question) { // Closing rest of the questions when another button is clicked
                item.classList.remove('show-text')
            }
        })

        question.classList.toggle('show-text');
    })


})