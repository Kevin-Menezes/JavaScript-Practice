const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    
    let hexColor = '#'; // Making the first element of the string as #

    for (let i = 0; i < 6; i++){
        
        hexColor += hex[getRandomNumber()]; // Concatenating random 6 values to the sting

    }

    color.textContent = hexColor;
    document.body.style.background = hexColor;

    function getRandomNumber() {
        
        const random = Math.random() * hex.length; // Math.random returns numbers only between 0 to 1...so we multiply it by the array length in order to access the array
        console.log(random);

        return Math.floor(random); // We remove the decimal
        
    }
})