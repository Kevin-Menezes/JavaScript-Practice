const IncrementBtn = document.querySelector("#increment"); // Increment Button
const DecrementBtn = document.querySelector("#decrement"); // Decrement Button
const counterEl = document.getElementById("counter"); // Fetch the counter number

const ulEl = document.getElementById("list-items"); // Fetching the ul tag

let counter = 0;

// When we click the increment button the counter increments
IncrementBtn.addEventListener('click', function () {

    counter++;
    counterEl.innerText = counter;

    const liEl = document.createElement('li'); // Creating element li

    // Creating a Text Node for li
    // const TextNode = document.createTextNode("Sentence " + counter); 
    // liEl.appendChild(TextNode); // Appending the Text Node to li

    liEl.setAttribute('data-counter', counter); // This helps in the decrement part

    if (counter % 2 == 0) {
        liEl.setAttribute('class', 'yellow'); // If even number -> bg = yellow
    }
    else { 
        liEl.style.background = 'red'; // We can access css classes directly also
        liEl.style.padding = '10px';
    }

    liEl.innerHTML = '<b>Sentence bold </b>' + counter; // We can use .innerHtml also instead of the above 3 lines

    ulEl.appendChild(liEl); // Appending element li to ul
});

// When we click the decrement button the counter decrements
DecrementBtn.addEventListener('click', function () {

    const li = document.querySelector('[data-counter="' + counter + '"]'); // Deleting using the data-counter attribute
    li.remove();

    counter--;
    counterEl.innerText = counter;
});