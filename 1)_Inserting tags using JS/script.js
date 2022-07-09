// Creating object
const courses = [

    {
        name: "React JS",
        price: "$5"
    },

    {
        name: "Java",
        price: "$7"
    },

    {
        name: "Python",
        price: "$4"
    },

    {
        name: "SQL",
        price: "$8"
    },

    {
        name: "Mongo DB",
        price: "$2"
    }

];

function generateList() {

    const ul = document.querySelector(".list-group"); // Selecting the list-group tag
    ul.innerHTML = "";

    // Traversing the object
    courses.forEach((course) => {

        const li = document.createElement("li"); // This creates <li></li>
        li.classList.add("list-group-item"); // This creates <li class="list-group-item"></li>
        const name = document.createTextNode(course.name); // This creates <li class="list-group-item">React JS</li>
        li.appendChild(name);

        const span = document.createElement("span"); // <span></span>
        span.classList.add("float-end"); // <span class="float-end"></span>
        const price = document.createTextNode(course.price); // <span class="float-end">$5</span>
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);

        // This creates <li class="list-group-item">React JS</li><span class="float-end">$5</span>



    }) 
}
window.addEventListener("load", generateList); //  Calling the function

const button = document.querySelector(".sort-btn");

button.addEventListener("click", () => { // Sorting the courses based on their price
    
    courses.sort((a, b) => a.price - b.price );
    console.log("HIEEE");
    generateList();
})