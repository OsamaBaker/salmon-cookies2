'use strict';


let allShops = [];

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Shop(shopName, minHourlyCustomers, maxHourlyCustomers, avgCookies) {
    this.shopName = shopName,
        this.minHourlyCustomers = minHourlyCustomers,
        this.maxHourlyCustomers = maxHourlyCustomers,
        this.avgCookies = avgCookies,
        this.customersPerHour = [],
        this.cookiesEachHour = [],
        this.cookiesPerDay = 0,


        allShops.push(this);


}


Shop.prototype.calcCustomersPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.customersPerHour.push(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers);
    }
}


Shop.prototype.calcCookiesEachHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.cookiesEachHour.push(Math.floor((this.customersPerHour[i] * this.avgCookies)));
        this.cookiesPerDay += this.cookiesEachHour[i];
    }
}
// cookiesEachHour();
// new instances
let Seattle = new Shop('Seattle', 23, 65, 6.3);
let Tokyo = new Shop('Tokyo', 3, 24, 1.2);
let Dubai = new Shop('Dubai', 11, 38, 3.7);
let Paris = new Shop('Paris', 20, 38, 2.3);
let Lima = new Shop('Lima', 2, 16, 4.6);

Seattle.calcCustomersPerHour();
Tokyo.calcCustomersPerHour();
Dubai.calcCustomersPerHour();
Paris.calcCustomersPerHour();
Lima.calcCustomersPerHour();


Seattle.calcCookiesEachHour();
Tokyo.calcCookiesEachHour();
Dubai.calcCookiesEachHour();
Paris.calcCookiesEachHour();
Lima.calcCookiesEachHour();


let tableDiv = document.getElementById('tableDiv');
let table = document.createElement('table');
tableDiv.appendChild(table);

function makingHeader() {
    let headingRow = document.createElement('tr');
    table.appendChild(headingRow);
    let firstTh = document.createElement('th');
    headingRow.appendChild(firstTh);
    firstTh.textContent = 'name';

    // for loop for displaying hours

    for (let i = 0; i < hours.length; i++) {
        let thElement = document.createElement('th');
        headingRow.appendChild(thElement);
        thElement.textContent = `${hours[i]}`

    }

    let finalTh = document.createElement('th');
    headingRow.appendChild(finalTh);
    finalTh.textContent = 'Daily Location Total'
}

makingHeader();

Shop.prototype.render = function () {
    let shopRow = document.createElement('tr');
    table.appendChild(shopRow);
    let tdElement = document.createElement('td');
    shopRow.appendChild(tdElement);

    tdElement.textContent = this.shopName;

    for (let i = 0; i < hours.length; i++) {
        let cookiesTd = document.createElement('td');
        shopRow.appendChild(cookiesTd);
        cookiesTd.textContent = this.cookiesEachHour[i];

    }
    let totalTd = document.createElement('td');
    shopRow.appendChild(totalTd);
    totalTd.textContent = this.cookiesPerDay;

}

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();


let footerRow = document.createElement('tr');
table.appendChild(footerRow);

function makingFooter() {
    let footerTh = document.createElement('td')
    footerRow.appendChild(footerTh);
    footerTh.textContent = `Totals`

    let megaTotal = 0;
    let totalEachHourAllShops = 0;

    //making totals
    for (let i = 0; i < hours.length; i++) {
        let footerTd = document.createElement('td');
        footerRow.appendChild(footerTd);

        totalEachHourAllShops = 0;

        for (let j = 0; j < allShops.length; j++) {
            totalEachHourAllShops += allShops[j].cookiesEachHour[i]

        }
        footerTd.textContent = totalEachHourAllShops;
        megaTotal += totalEachHourAllShops;
    }
        let megaTotalTd = document.createElement('td');
        footerRow.appendChild(megaTotalTd);
        megaTotalTd.textContent = megaTotal;
}

makingFooter();














// Seattle.calcCookiesEachHour();
// console.log(allShops)





// function generate(){
//     for(let i=0; i < hours.length; i++){
//         allShops[i].calcCustomersPerHour();
//         allShops[i].calcCookiesEachHour();
//     }
// }

// generate();

// Shop.prototype.showList = function (){
//     // Seattle.customersPerHour();
//     for(let i = 0; i < hours.length; i++){

//         let shopsDiv = document.getElementById('shops');
//         let list = document.createElement('li');
//         shopsDiv.appendChild(list);
//         list.textContent=`${hours[i]}: ${this.cookiesEachHour[i]} cookies`


//     }
// }


// Seattle.showList();


