var saveEl = $('.saveBtn');
var textEl = $('.text');
var hours = [$('#text09'), $('#text10'), $('#text11'), $('#text12'), $('#text01'), $('#text02'), $('#text03'), $('#text04'),$('#text05')]
var currentTime = parseInt(moment().format('HH'));

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));   

var colors = function ()  {
    for (i=0; i < hours.length; i++) {
        console.log(currentTime - 9)
        if ((currentTime - 9) > i) {
            hours[i][0].style.backgroundColor = 'lightgray'
        } else if ((currentTime - 9) === i) {
            hours[i][0].style.backgroundColor = 'red'
        } else {
            hours[i][0].style.backgroundColor = 'lightgreen'
        }
    }
}



colors();