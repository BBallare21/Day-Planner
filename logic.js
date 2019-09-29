$(document).ready(function() {
// Set the date to the jumbo-tron
let date = moment().format('LL');
$('#currentDay').text(date);

// Set the time to the jumbo-tron
let time = moment().format('LT');
$('#currentTime').text(time);

let current = moment().format('ha');
console.log(current);
let setTime = $('.hour').text();
console.log(setTime);

function getClass() {
    if (setTime === current) {
        $('textarea').addClass('present')
    }
    else if (setTime < current) {
        $('textarea').addClass('past')
    }
    else {
        $('textarea').addClass('future')
    
        }    
};

getClass();



$('.saveBtn').on('click', function (event) {
event.preventDefault();

let area1 = $('#area1');
let area2 = $('#area2');
let area3 = $('#area3');
let area4 = $('#area4');
let area5 = $('#area5');
let area6 = $('#area6');
let area7 = $('#area7');
let area8 = $('#area8');
let area9 = $('#area9');


let air1 = area1.value;
let air2 = area2.value;
let air3 = area3.value;
let air4 = area4.value;
let air5 = area5.value;
let air6 = area6.value;
let air7 = area7.value;
let air8 = area8.value;
let air9 = area9.value;

console.log(air1);
localStorage.setItem('air1', JSON.stringify(air1));
// console.log(air2);
// console.log(air3);
// console.log(air4);
// console.log(air5);
// console.log(air6);
// console.log(air7);
// console.log(air8);
// console.log(air9);
// localStorage.setItem('info', info);

// localStorage.getItem(info)
})
});