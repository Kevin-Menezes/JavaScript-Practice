const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// On clicking the button
btn.addEventListener('click', function () {

    // Get random number between 0 - 3
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

    var y = document.getElementsByClassName('color'); // This returns an array of elements under class color
    console.log(y);
    y[0].style.color = colors[randomNumber]; // Accessing that particular element in the array
    
});

function getRandomNumber() {
    
    const random = Math.random() * colors.length; // Math.random returns numbers only between 0 to 1...so we multiply it by the array length in order to access the array
    console.log(random);

    return Math.floor(random); // We remove the decimal
}