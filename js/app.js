'use strict';
// Collaborated with Ben and Katharine
//Seattle Location
const seattle = {
  locationS: 'seattle',
  minSCustomers: 23,
  maxSCustomers: 65,
  avgSCookies: 6.3,
  dailySCookies: [],
  numCustomers: function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  dailyCookies: function() {
    let times = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let sumCookies = 0;
    for (let i = 0; i < times.length; i++) {
      let hourCookies = Math.floor(this.numCustomers(this.minSCustomers, this.maxSCustomers) * this.avgSCookies);
      sumCookies = sumCookies + hourCookies;
      times[i] = [i + 6, hourCookies];
    }
    return [times, sumCookies];
  },
};

seattle.dailySCookies = seattle.dailyCookies();
console.log(seattle.dailySCookies);

//Tokyo Location
const tokyo = {
  locationT: 'tokyo',
  minTCustomers: 3,
  maxTCustomers: 24,
  avgTCookies: 1.2,
  dailyTCookies: [],
  numCustomers: function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  dailyCookies: function() {
    let times = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let sumCookies = 0;
    for (let i = 0; i < times.length; i++) {
      let hourCookies = Math.floor(this.numCustomers(this.minTCustomers, this.maxTCustomers) * this.avgTCookies);
      sumCookies = sumCookies + hourCookies;
      times[i] = [i + 6, hourCookies];
    }
    return [times, sumCookies];
  },
};

tokyo.dailyTCookies = tokyo.dailyCookies();
console.log(tokyo.dailyTCookies);

//Dubai Location
const dubai = {
  locationD: 'dubai',
  minDCustomers: 11,
  maxDCustomers: 38,
  avgDCookies: 3.7,
  dailyDCookies: [],
  numCustomers: function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  dailyCookies: function() {
    let times = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let sumCookies = 0;
    for (let i = 0; i < times.length; i++) {
      let hourCookies = Math.floor(this.numCustomers(this.minDCustomers, this.maxDCustomers) * this.avgDCookies);
      sumCookies = sumCookies + hourCookies;
      times[i] = [i + 6, hourCookies];
    }
    return [times, sumCookies];
  },
};

dubai.dailyDCookies = dubai.dailyCookies();
console.log(dubai.dailyDCookies);

//Paris Location
const paris = {
  locationP: 'paris',
  minPCustomers: 20,
  maxPCustomers: 38,
  avgPCookies: 2.3,
  dailyPCookies: [],
  numCustomers: function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  dailyCookies: function() {
    let times = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let sumCookies = 0;
    for (let i = 0; i < times.length; i++) {
      let hourCookies = Math.floor(this.numCustomers(this.minPCustomers, this.maxPCustomers) * this.avgPCookies);
      sumCookies = sumCookies + hourCookies;
      times[i] = [i + 6, hourCookies];
    }
    return [times, sumCookies];
  },
};

paris.dailyPCookies = paris.dailyCookies();
console.log(paris.dailyPCookies);

//Lima Location
const lima = {
  locationL: 'lima',
  minLCustomers: 2,
  maxLCustomers: 16,
  avgLCookies: 4.6,
  dailyLCookies: [],
  numCustomers: function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  dailyCookies: function() {
    let times = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let sumCookies = 0;
    for (let i = 0; i < times.length; i++) {
      let hourCookies = Math.floor(this.numCustomers(this.minLCustomers, this.maxLCustomers) * this.avgLCookies);
      sumCookies = sumCookies + hourCookies;
      times[i] = [i + 6, hourCookies];
    }
    return [times, sumCookies];
  },
};

lima.dailySCookies = lima.dailyCookies();
console.log(lima.dailySCookies);
