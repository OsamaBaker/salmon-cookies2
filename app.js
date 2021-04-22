'use strict';


let allShops = [];

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Shop(shopName,minHourlyCustomers, maxHourlyCustomers, avgCookies){
    this.shopName = shopName,
    this.minHourlyCustomers = minHourlyCustomers,
    this.maxHourlyCustomers = maxHourlyCustomers,
    this.avgCookies = avgCookies,
    this.customersPerHour = [],
    this.cookiesEachHour = [],
    

    allShops.push(this);


}

Shop.prototype.calcCustomersPerHour = function(){
    for(let i = 0; i < hours.length; i++){
     this.customersPerHour.push(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) ) + this.minHourlyCustomers);
}
}


Shop.prototype.calcCookiesEachHour = function (){
    for(let i=0; i < hours.length; i++){
     this.cookiesEachHour.push(Math.floor((this.customersPerHour[i] * this.avgCookies)));
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



// Seattle.calcCookiesEachHour();
// console.log(allShops)





// function generate(){
//     for(let i=0; i < hours.length; i++){
//         allShops[i].calcCustomersPerHour();
//         allShops[i].calcCookiesEachHour();
//     }
// }

// generate();

Shop.prototype.showList = function (){
    // Seattle.customersPerHour();
    for(let i = 0; i < hours.length; i++){
        
        let shopsDiv = document.getElementById('shops');
        let list = document.createElement('li');
        shopsDiv.appendChild(list);
        list.textContent=`${hours[i]}: ${this.cookiesEachHour[i]} cookies`
        
        
    }
}


Seattle.showList();


