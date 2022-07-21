// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.querySelector('#grocery');

const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// Edit option
let editElement;
let editFlag = false;
let editId = '';


// ****** EVENT LISTENERS **********
// Submit Form
form.addEventListener('submit', addItem);
// Clear items
clearBtn.addEventListener('click', clearItems);
// Load items
window.addEventListener('DOMContentLoaded', setupItems);


// ********* FUNCTIONS *************
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString(); // This turns the current time in ms....so we get a unique id every time
    
    // Adding new item
    if (value && !editFlag) {
        createListItem(id, value);
        
        // Display alert
        displayAlert("item added to the list", "success");
        // Show container
        container.classList.add('show-container');
        // Add to local storage
        addToLocalStorage(id, value);
        // Set back to default
        setBackToDefault();
        
    }
    else if (value && editFlag) {

        editElement.innerHTML = value;
        displayAlert('value changed', 'success');
        // Edit local storage
        editLocalStorage(editId, value);
        setBackToDefault();
    }
    else {
        displayAlert("please enter value", "danger");
    }

}

// Display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // Remove alert
    setTimeout(function () {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
        
    },1000)
}

// Clear items
function clearItems() {
    const items = document.querySelectorAll('.grocery-item');
    if (items.length > 0) {
        items.forEach(function (item) {
            list.removeChild(item);
        });
    }
    container.classList.remove("show-container");
    displayAlert("empty list", "danger");
    setBackToDefault();
    localStorage.removeItem('list');
}

// Delete function
function deleteItem() {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if (list.children.length === 0) {
        container.classList.remove("show-container");
    }
    displayAlert("item removed", "danger");
    setBackToDefault();
}

// Edit function
function editItem() {
    const element = e.currentTarget.parentElement.parentElement;

    // Set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;

    // Set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editId = element.dataset.id;
    submitBtn.textContent = "edit";
}

// Set back to default
function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editId = "";
    submitBtn.textContent = "submit";
}


// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
    const grocery = { id: id, value: value };
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem('list', JSON.stringify(items));
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage();
    items = items.filter(function (item) {
        if (item.id !== id) {
            return item;
        }
    });
    localStorage.setItem('list', JSON.stringify(items));
}

function editLocalStorage(id, value) {
    let items = getLocalStorage();
    items = items.map(function (item) {
        if (item.id === id) {
            item.value = value;
        }
        return item;
    });
    localStorage.setItem('list', JSON.stringify(items));
}

function getLocalStorage() {
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}

// ****** SETUP ITEMS **********
function setupItems() {
    
    let items = getLocalStorage();
    if (items.length > 0) {
        items.forEach(function (item) {
            createListItem(item.id,item.value)
        });
        container.classList.add("show-container");
    }
}

function createListItem(id, value) {
    const element = document.createElement('article'); // creating element
    element.classList.add('grocery-item'); // setting class for element
    const attr = document.createAttribute('data-id'); // setting id for element
    attr.value = id;
    element.setAttribute(attr);
    element.innerHTML = `<p class="title">${value}</p>

            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fa fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fa fa-trash"></i>
              </button>
            </div>`;

    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');

    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItem);

    // Append child
    list.appendChild(element);
}