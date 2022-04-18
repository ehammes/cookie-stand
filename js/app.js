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

// Add Constructor Function

function CookieStand(locationName, minCustomers, maxCustomers, avgCookiesPerCustomer) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomers;
  this.maxCustomersPerHour = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.totalCookiesPerHourPerStand = []; // total number of cookies per hour for each cookie stand
  this.generateRandomCookiesPerHour = this.generateRandomCookiesPerHour();
}

// Method
CookieStand.prototype.generateRandomCookiesPerHour = function () {
  let total = 0;
  for (let i = 0; i < hrs.length; i++) {
    const randomCustomersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
    const cookiesSold = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
    this.totalCookiesPerHourPerStand[i] = cookiesSold;
    total += cookiesSold;
  }
  this.totalCookiesSold = total;
};

// Global Functions
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getHourlyCookiesSumAcrossCookieStands(timeSlot) {
  let totalHourlyCookiesAcrossCookieStands = 0;
  //console.log(cookieStands);
  for (let i = 0; i < cookieStands.length; i++) {
    const currentCookieStand = cookieStands[i];
    const HourlyCookiesPerStand = currentCookieStand.totalCookiesPerHourPerStand[timeSlot];
    totalHourlyCookiesAcrossCookieStands += HourlyCookiesPerStand;
  }
  return totalHourlyCookiesAcrossCookieStands; // loop through each cookie stand and sum up the hourly sales for each stand
}

// Add Render Method, updated with help from JB

CookieStand.prototype.render = function () {

  const rowElem = document.createElement('tr');
  tbody.appendChild(rowElem);
  const locationHeadingElem = document.createElement('td');
  rowElem.appendChild(locationHeadingElem);
  locationHeadingElem.textContent = this.locationName;

  // Total Cookies Per Hour for Each Cookie Stand
  for (let i = 0; i < hrs.length; i++) {
    const cookieData = document.createElement('td');
    cookieData.textContent = this.totalCookiesPerHourPerStand[i];
    rowElem.appendChild(cookieData);
  }

  // Daily Location Total for Each Cookie Stand
  const total = document.createElement('td');
  total.textContent = this.totalCookiesSold;
  rowElem.appendChild(total);
};

// Create Table
const container = document.getElementById('SalesData');
const table = document.createElement('table');
container.appendChild(table);
const tbody = document.createElement('tbody');
table.appendChild(tbody);
const footer = document.createElement('tfoot');
table.appendChild(footer);

// Header Row
function createHeaderRow() {
  // Create and add the header row to the table
  const theadElem = document.createElement('thead');
  table.appendChild(theadElem);
  const tr = document.createElement('tr');
  theadElem.appendChild(tr);
  const headerRowElem = document.createElement('th'); // this adds the blank for the first column
  tr.appendChild(headerRowElem);
  for (let i = 0; i < hrs.length; i++) {
    const hoursHeadingElem = document.createElement('th');
    tr.appendChild(hoursHeadingElem);
    hoursHeadingElem.textContent = hrs[i];
  }
  const dailyLocationTotalElem = document.createElement('th');
  tr.appendChild(dailyLocationTotalElem);
  dailyLocationTotalElem.textContent = 'Daily Location Total';
}

// Footer Row
function createFooterRow() {
  // Create and add the footer row to the table
  const footerRowElem = document.createElement('tr');
  footer.appendChild(footerRowElem);
  const totals = document.createElement('td');
  footerRowElem.appendChild(totals);
  totals.textContent = 'Totals';

  let grandTotal = 0;
  for (let i = 0; i < hrs.length; i++) {
    const allCookiesEachHour = getHourlyCookiesSumAcrossCookieStands(i);
    grandTotal += allCookiesEachHour;
    const totalsDataElem = document.createElement('td');
    totalsDataElem.textContent = allCookiesEachHour;
    footerRowElem.appendChild(totalsDataElem);
  }
  const grandTotalAmtElem = document.createElement('td');
  grandTotalAmtElem.textContent = grandTotal;
  footerRowElem.appendChild(grandTotalAmtElem);
}

const cookieStands = [];

function createCookieStands() {
  const seattle = new CookieStand('Seattle', 23, 65, 6.3);
  seattle.render();
  cookieStands.push(seattle);

  const tokyo = new CookieStand('Tokyo', 3, 24, 1.2);
  tokyo.render();
  cookieStands.push(tokyo);

  const dubai = new CookieStand('Dubai', 11, 38, 3.7);
  dubai.render();
  cookieStands.push(dubai);

  const paris = new CookieStand('Paris', 20, 38, 2.3);
  paris.render();
  cookieStands.push(paris);

  const lima = new CookieStand('Lima', 2, 16, 4.8);
  lima.render();
  cookieStands.push(lima);
}

// Invoke functions for table
createHeaderRow();
createCookieStands();
createFooterRow();


// Create Form Event Handling

function formValue(event) {
  event.preventDefault();
  const location = event.target.locationName.value;
  const minCustomers = parseInt(event.target.minCustomersPerHour.value);
  const maxCustomers = parseInt(event.target.maxCustomersPerHour.value);
  const avgCookies = parseFloat(event.target.avgCookiesPerCustomer.value);
  let newCookieStandData = new CookieStand(location, minCustomers, maxCustomers, avgCookies);
  // console.log(location, minCustomers, maxCustomers, avgCookies);

  // Calculate the data
  cookieStands.push(newCookieStandData);

  // Render to table
  newCookieStandData.render();
  footer.innerHTML = ''; // clearing data in footer
  createFooterRow();
}

const cookieStandFormElem = document.getElementById('cookieStandForm');
cookieStandFormElem.addEventListener('submit', formValue);
