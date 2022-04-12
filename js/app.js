'use strict';
// Collaborated with Ben and Katharine
//Seattle Location
const seattle = {
  locationS: 'Seattle',
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
    for (let i = 0; i < 15; i++) {
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
  locationT: 'Tokyo',
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
  locationD: 'Dubai',
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
  locationP: 'Paris',
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
  locationL: 'Lima',
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

lima.dailyLCookies = lima.dailyCookies();
console.log(lima.dailyLCookies);

//Display the values of each array as unordered lists in the browser

let hrArray = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

const seattleParent = document.getElementById('SalesDataSeattle');

const h2 = document.createElement('h2');
h2.textContent = seattle.locationS;
seattleParent.appendChild(h2);

const ul = document.createElement('ul');
seattleParent.appendChild(ul);

for (let i = 0; i < 15; i++) {
  const li = document.createElement('li');
  ul.appendChild(li);
  li.textContent = hrArray[i] + seattle.dailySCookies[0][0+i][1] + ' cookies';
}

//Tokyo
const tokyoParent = document.getElementById('SalesDataTokyo');

const h2Tok = document.createElement('h2');
h2Tok.textContent = tokyo.locationT;
tokyoParent.appendChild(h2Tok);

const ulTok = document.createElement('ul');
tokyoParent.appendChild(ulTok);

for (let j = 0; j < 15; j++) {
  const liTok = document.createElement('li');
  liTok.textContent = hrArray[j] + tokyo.dailyTCookies[0][0+j][1] + ' cookies';
  ulTok.appendChild(liTok);
}
//Dubai
const dubaiParent = document.getElementById('SalesDataDubai');

const h2Dub = document.createElement('h2');
h2Dub.textContent = dubai.locationD;
dubaiParent.appendChild(h2Dub);

const ulDub = document.createElement('ul');
dubaiParent.appendChild(ulDub);

for (let k = 0; k < hrArray.length; k++) {
  const liDub = document.createElement('li');
  liDub.textContent = hrArray[k] + dubai.dailyDCookies[0][0+k][1] + ' cookies';
  ulDub.appendChild(liDub);
}

//Paris
const parisParent = document.getElementById('SalesDataParis');

const h2Par = document.createElement('h2');
h2Par.textContent = paris.locationP;
parisParent.appendChild(h2Par);

const ulPar = document.createElement('ul');
parisParent.appendChild(ulPar);

for (let l = 0; l < 15; l++) {
  const liPar = document.createElement('li');
  liPar.textContent = hrArray[l] + paris.dailyPCookies[0][0+l][1] + ' cookies';
  ulPar.appendChild(liPar);
}

//Lima
const limaParent = document.getElementById('SalesDataLima');

const h2Lim = document.createElement('h2');
h2Lim.textContent = lima.locationL;
limaParent.appendChild(h2Lim);

const ulLim = document.createElement('ul');
limaParent.appendChild(ulLim);

for (let m = 0; m < 15; m++) {
  const liLim = document.createElement('li');
  liLim.textContent = hrArray[m] + lima.dailyLCookies[0][0+m][1] + ' cookies';
  ulLim.appendChild(liLim);
}
//Calculating the sum of these hourly totals
