const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 9,
    title: "Yummy choco",
    category: "chocolates",
    price: 10.99,
    img: "./images/item-9.jpeg",
    desc: `This is the newly added category to test if butons are displayed dynamically`,
  },

];

const sectionCenter = document.querySelector('.section-center'); // Selecting the parent of the menu items

const container = document.querySelector(".btn-container");

// When the window loads -> automatically this function gets called
window.addEventListener('DOMContentLoaded', function () {
  
  displayMenuItems(menu); // Passing the array as argument
  displayMenuButtons(); // Calling to dynamically display menu buttons
});

// Function to display all the menu items
function displayMenuItems(menuItems) {
  
  // Using map function
  let displayMenu = menuItems.map(function (item) {

    // console.log(item);

    return `<article class="menu-item">
              <img src="${item.img}" class="photo" alt="${item.title}">
              <div class="item-info">
                <header>
                  <h4>${item.title}</h4>
                  <h4 class="price">${item.price}</h4>
                </header>
                <p>${item.desc}</p>
              </div>
            </article>`

  });

  displayMenu = displayMenu.join(''); // This is to remove the commas between the objects and make them as 1 whole string
  sectionCenter.innerHTML = displayMenu;
}

// Function to dynamically display the Menu Buttons
function displayMenuButtons() {
  
  // Making the categories unique , so that we can dynamically print the buttons
  const categories = menu.reduce(function (values, item) {

    if (!values.includes(item.category)) { // If the category is not in the values array, then we push it there
      values.push(item.category);
    }

    return values; // When we use reduce we always have to return the array (ie.values)

  }, ['all']);

  const categoryBtns = categories.map(function (category) {

    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`

  }).join(" ");

  container.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll('.filter-btn'); // Selecting the filter buttons after they are added dynamically to the HTML


  // Filtering items
  filterBtns.forEach(function (btn) {

    btn.addEventListener('click', function (e) { // Adding event listener for each button

      const category = e.currentTarget.dataset.id; // Getting the data-id values of the 4 buttons

      const menuCategory = menu.filter(function (menuItem) {

        if (menuItem.category === category) { // If the category of the array matches the category of the data-id 
          return menuItem;
        }
      });

      if (category === 'all') { // Displaying all items
        displayMenuItems(menu);
      }
      else {
        displayMenuItems(menuCategory); // Displaying based on a particular category
      }

    });

  });


}