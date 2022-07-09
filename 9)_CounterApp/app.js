let count = 0; // Set initial count

const value = document.querySelector('#value');

const btns = document.querySelectorAll('.btn'); // Getting access to all buttons all at the same time

btns.forEach(function (item) {
    
    item.addEventListener('click', function (e) {
        
        const check = e.currentTarget.classList; // This returns an array of all the classes of that element

        if (check.contains('decrease')) // Checks the entire array for 'decrease' word
            count--;
        else if (check.contains('increase'))
            count++;
        else
            count = 0;
    
        if (count > 0)
            value.style.color = 'green';
        else if (count < 0)
            value.style.color = 'red';
        else
            value.style.color = 'black';
        
        value.textContent = count;

    })
})