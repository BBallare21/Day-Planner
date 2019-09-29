$(document).ready(function() {
// Set the date to the jumbo-tron
let date = moment().format('LL');
$('#currentDay').text(date);

// Set the time to the jumbo-tron
let time = moment().format('LT');
$('#currentTime').text(time);

let current = parseInt(moment().format('HH'));
console.log(current);

    if (9 === current) {
        $('#area1').addClass('present')
    }
    else if (9 < current) {
        $('#area1').addClass('past')
    }
    else {
        $('#area1').addClass('future')
    }

    if (10 === current) {
        $('#area2').addClass('present')
    }
    else if (10 < current) {
        $('#area2').addClass('past')
    }
    else {
        $('#area2').addClass('future')
    }

    if (11 === current) {
        $('#area3').addClass('present')
    }
    else if (11 < current) {
        $('#area3').addClass('past')
    }
    else {
        $('#area3').addClass('future')
    }

    if (12 === current) {
        $('#area4').addClass('present')
    }
    else if (12 < current) {
        $('#area4').addClass('past')
    }
    else {
        $('#area4').addClass('future')
    }

    if (13 === current) {
        $('#area5').addClass('present')
    }
    else if (13 < current) {
        $('#area5').addClass('past')
    }
    else {
        $('#area5').addClass('future')
    }

    if (14 === current) {
        $('#area6').addClass('present')
    }
    else if (14 < current) {
        $('#area6').addClass('past')
}
    else {
        $('#area6').addClass('future')
    }

    if (15 === current) {
        $('#area7').addClass('present')
    }
    else if (15 < current) {
        $('#area7').addClass('past')
    }
    else {
        $('#area7').addClass('future')
    }

    if (16 === current) {
        $('#area8').addClass('present')
    }
    else if (16 < current) {
        $('#area8').addClass('past')
    }
    else {
        $('#area8').addClass('future')
    }

    if (17 === current) {
        $('#area9').addClass('present')
    }
    else if (17 < current) {
        $('#area9').addClass('past')
    }
    else {
        $('#area9').addClass('future')
    }


// $('.saveBtn').on('click', function (event) {
// event.preventDefault();

// let area1 = $('#area1');
// let area2 = $('#area2');
// let area3 = $('#area3');
// let area4 = $('#area4');
// let area5 = $('#area5');
// let area6 = $('#area6');
// let area7 = $('#area7');
// let area8 = $('#area8');
// let area9 = $('#area9');


// let air1 = area1.value;
// let air2 = area2.value;
// let air3 = area3.value;
// let air4 = area4.value;
// let air5 = area5.value;
// let air6 = area6.value;
// let air7 = area7.value;
// let air8 = area8.value;
// let air9 = area9.value;

// console.log(air1);
// localStorage.setItem('air1', JSON.stringify(air1));
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
// })
});