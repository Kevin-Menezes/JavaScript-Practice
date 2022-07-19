const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2022, 6, 24, 18, 30, 0); //  Instead of hardcoding this line, we do the bottom line
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 18, 30, 0)
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

let month = futureDate.getMonth(); // This returns a number from 0 to 11
month = months[month]; // We access the names using the array

const date = futureDate.getDate();

let weekday = futureDate.getDay(); // This returns a number from 0 to 6
weekday = weekdays[weekday];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hours}:${mins}pm`;

// Future time in ms
const futureTime = futureDate.getTime();

// Function to print the live countdown
function getRemainingTime() {
  
  const today = new Date().getTime();
  const t = futureTime - today;

  // Values in ms
  const oneDay = 24 * 60 * 60 * 1000; // 1 day = 24hrs | 1hr = 60mins | 1min = 60s | 1s = 1000ms
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // Calculate all values
  let days = t / oneDay;
  days = Math.floor(days);

  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // Set values array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  // Adds innerHTML 
  items.forEach(function (item, index) {
    item.innerHTML = values[index];
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }
}

// Countdown
let countdown = setInterval(getRemainingTime, 1000); // Calling the function again and again every second
getRemainingTime();