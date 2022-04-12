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

let hrs = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

//Seattle Location
const seattle = {
  locationName: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  getRandomCookiesPerHour: [],
  totalCookiesSold: 0,
  generateRandomCookiesPerHour: function () {
    //generate values to populate getRandomCookiesPerHour
    //array should have slots for 6am through 7pm
    let total = 0;
    for (let i = 0; i < hrs.length; i++){
      const randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
      const cookiesSold = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
      this.getRandomCookiesPerHour[i] = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
  render: function () {
    const parentElement = document.getElementById('SalesDataSeattle');

    const h2 = document.createElement('h2');
    parentElement.appendChild(h2);
    h2.textContent = this.locationName;

    const ul = document.createElement('ul');
    parentElement.appendChild(ul);

    for (let i = 0; i < this.getRandomCookiesPerHour.length; i++) {
      const li = document.createElement('li');
      ul.appendChild(li);
      const timeSlot = hrs[i];
      const cookiesSoldThisHour = this.getRandomCookiesPerHour[i];
      li.textContent = `${timeSlot} ${cookiesSoldThisHour} cookies`;
    }
    const li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `Total: ${this.totalCookiesSold} cookies`;
  }
};

let randomInRange = function(min, max){
  let span = max - min + 1;
  let randomInSpan =  Math.floor(Math.random() * span);
  return min + randomInSpan;
};

seattle.generateRandomCookiesPerHour();
seattle.render();
console.log(seattle.getRandomCookiesPerHour);

//Tokyo Location
const tokyo = {
  locationName: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPerCustomer: 1.2,
  getRandomCookiesPerHour: [],
  totalCookiesSold: 0,
  generateRandomCookiesPerHour: function () {
    let total = 0;
    for (let i = 0; i < hrs.length; i++){
      const randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
      const cookiesSold = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
      this.getRandomCookiesPerHour[i] = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
  render: function () {
    const parentElement = document.getElementById('SalesDataSeattle');

    const h2 = document.createElement('h2');
    parentElement.appendChild(h2);
    h2.textContent = this.locationName;

    const ul = document.createElement('ul');
    parentElement.appendChild(ul);

    for (let i = 0; i < this.getRandomCookiesPerHour.length; i++) {
      const li = document.createElement('li');
      ul.appendChild(li);
      const timeSlot = hrs[i];
      const cookiesSoldThisHour = this.getRandomCookiesPerHour[i];
      li.textContent = `${timeSlot} ${cookiesSoldThisHour} cookies`;
    }
    const li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `Total: ${this.totalCookiesSold} cookies`;
  }
};

tokyo.generateRandomCookiesPerHour();
tokyo.render();
console.log(tokyo.getRandomCookiesPerHour);

//Dubai Location
const dubai = {
  locationName: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesPerCustomer: 3.7,
  getRandomCookiesPerHour: [],
  totalCookiesSold: 0,
  generateRandomCookiesPerHour: function () {
    let total = 0;
    for (let i = 0; i < hrs.length; i++){
      const randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
      const cookiesSold = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
      this.getRandomCookiesPerHour[i] = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
  render: function () {
    const parentElement = document.getElementById('SalesDataSeattle');

    const h2 = document.createElement('h2');
    parentElement.appendChild(h2);
    h2.textContent = this.locationName;

    const ul = document.createElement('ul');
    parentElement.appendChild(ul);

    for (let i = 0; i < this.getRandomCookiesPerHour.length; i++) {
      const li = document.createElement('li');
      ul.appendChild(li);
      const timeSlot = hrs[i];
      const cookiesSoldThisHour = this.getRandomCookiesPerHour[i];
      li.textContent = `${timeSlot} ${cookiesSoldThisHour} cookies`;
    }
    const li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `Total: ${this.totalCookiesSold} cookies`;
  }
};

dubai.generateRandomCookiesPerHour();
dubai.render();
console.log(dubai.getRandomCookiesPerHour);

//Paris Location
const paris = {
  locationName: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiesPerCustomer: 2.3,
  getRandomCookiesPerHour: [],
  totalCookiesSold: 0,
  generateRandomCookiesPerHour: function () {
    let total = 0;
    for (let i = 0; i < hrs.length; i++){
      const randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
      const cookiesSold = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
      this.getRandomCookiesPerHour[i] = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
  render: function () {
    const parentElement = document.getElementById('SalesDataSeattle');

    const h2 = document.createElement('h2');
    parentElement.appendChild(h2);
    h2.textContent = this.locationName;

    const ul = document.createElement('ul');
    parentElement.appendChild(ul);

    for (let i = 0; i < this.getRandomCookiesPerHour.length; i++) {
      const li = document.createElement('li');
      ul.appendChild(li);
      const timeSlot = hrs[i];
      const cookiesSoldThisHour = this.getRandomCookiesPerHour[i];
      li.textContent = `${timeSlot} ${cookiesSoldThisHour} cookies`;
    }
    const li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `Total: ${this.totalCookiesSold} cookies`;
  }
};

paris.generateRandomCookiesPerHour();
paris.render();
console.log(dubai.getRandomCookiesPerHour);

//Lisbon Location
const lisbon = {
  locationName: 'Lisbon',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiesPerCustomer: 4.6,
  getRandomCookiesPerHour: [],
  totalCookiesSold: 0,
  generateRandomCookiesPerHour: function () {
    let total = 0;
    for (let i = 0; i < hrs.length; i++){
      const randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
      const cookiesSold = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
      this.getRandomCookiesPerHour[i] = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
  render: function () {
    const parentElement = document.getElementById('SalesDataSeattle');

    const h2 = document.createElement('h2');
    parentElement.appendChild(h2);
    h2.textContent = this.locationName;

    const ul = document.createElement('ul');
    parentElement.appendChild(ul);

    for (let i = 0; i < this.getRandomCookiesPerHour.length; i++) {
      const li = document.createElement('li');
      ul.appendChild(li);
      const timeSlot = hrs[i];
      const cookiesSoldThisHour = this.getRandomCookiesPerHour[i];
      li.textContent = `${timeSlot} ${cookiesSoldThisHour} cookies`;
    }
    const li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `Total: ${this.totalCookiesSold} cookies`;
  }
};

lisbon.generateRandomCookiesPerHour();
lisbon.render();
console.log(dubai.getRandomCookiesPerHour);
