'use strict';
// Collaborated with Ben and Katharine
// Each location object should contain: location name, min customers, max customers, avg cookies per customer
/*
{
  locationName: 'The City',
  minCustomers: integer,
  maxCustomers: integer,
  avgCookiesPerCustomer: float,
  generateRandomCookiesPerHour: function/method,
  getRandomCookiesPerHour: array of X items based on times/hrs
}
*/

let hrs = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

// Add Constructor Functions

function Cookies(locationName, minCustomers, maxCustomers, avgCookiesPerCustomer) {
  this.locationName = locationName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.getRandomCookiesPerHour = []; // total number of cookies per hour for each cookie stand
  this.generateRandomCookiesPerHour = this.generateRandomCookiesPerHour();
}

Cookies.prototype.generateRandomCookiesPerHour = function () {
  let total = 0;
  for (let i = 0; i < hrs.length; i++) {
    const randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
    const cookiesSold = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
    this.getRandomCookiesPerHour[i] = cookiesSold;
    total += cookiesSold;
  }
  this.totalCookiesSold = total;
};

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


//Add Render Method, updated with help from JB

Cookies.prototype.render = function () {

  const tr2 = document.createElement('tr');
  tbody.appendChild(tr2);
  const headings = document.createElement('th');
  tr2.appendChild(headings);
  headings.textContent = this.locationName;

  for (let i = 0; i < hrs.length; i++) {
    const cookieData = document.createElement('td');
    cookieData.textContent = this.getRandomCookiesPerHour[i];
    tr2.appendChild(cookieData);
  }
  const total = document.createElement('td');
  total.textContent = this.totalCookiesSold;
  tr2.appendChild(total);
};

// Create Table
const container = document.getElementById('SalesData');
const table = document.createElement('table');
container.appendChild(table);
const tbody = document.createElement('tbody');
table.appendChild(tbody);

function createHeaderRow() {
  // Create and add the header row to the table
  const thead = document.createElement('thead');
  table.appendChild(thead);
  const tr = document.createElement('tr');
  thead.appendChild(tr);
  const headth = document.createElement('th');
  tr.appendChild(headth);
  for (let i = 0; i < hrs.length; i++) {
    const timeSlots = document.createElement('th');
    tr.appendChild(timeSlots);
    timeSlots.textContent = hrs[i];
  }
  const dailyLocationTotal = document.createElement('th');
  tr.appendChild(dailyLocationTotal);
  dailyLocationTotal.textContent = 'Daily Location Total';
}
function getHourlySales(timeSlot){
  let hourlySales = 0;
  for (let i=0; i < cookieStands.length; i++){
    const currentCookieStand = cookieStands[i];
    hourlySales += currentCookieStand.getRandomCookiesPerHour[timeSlot];
  }
  return hourlySales; // loop through each cookie stand and sum up the hourlySales for each
}

function createFooterRow() {
  // Create and add the footer row to the table
  const tr7 = document.createElement('tr');
  tbody.appendChild(tr7);
  const totals = document.createElement('th');
  tr7.appendChild(totals);
  totals.textContent = 'Totals';

  for (let i = 0; i < hrs.length; i++) {
    const allCookiesEachHour = getHourlySales(i);
    const totalsData = document.createElement('td');
    totalsData.textContent = allCookiesEachHour;
    tr7.appendChild(totalsData);
  }

  const grandTotal = document.createElement('td');
  grandTotal.textContent = 'grand total goes here'; /// **Need to review this
  tr7.appendChild(grandTotal);
}

const cookieStands = [];

function createCookieStands() {
  const seattle = new Cookies('Seattle', 23, 65, 6.3);
  seattle.render();
  cookieStands.push(seattle);

  const tokyo = new Cookies('Tokyo', 3, 24, 1.2);
  tokyo.render();
  cookieStands.push(tokyo);

  const dubai = new Cookies('Dubai', 11, 38, 3.7);
  dubai.render();
  cookieStands.push(dubai);

  const paris = new Cookies('Paris', 20, 38, 2.3);
  paris.render();
  cookieStands.push(paris);

  const lima = new Cookies('Lima', 2, 16, 4.8);
  lima.render();
  cookieStands.push(lima);
}

createHeaderRow();
createCookieStands();
createFooterRow();
