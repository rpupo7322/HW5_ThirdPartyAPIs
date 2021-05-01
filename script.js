//declarations
var save = $('.saveBtn');
var hours = [$('#text09'), $('#text10'), $('#text11'), $('#text12'), $('#text01'), $('#text02'), $('#text03'), $('#text04'),$('#text05')]
var currentTime = parseInt(moment().format('HH'));

//update the colors on entries based on current time
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

//save entries to local storage
function saveButton() {
    var existingEntries = [];
    for (i=0; i < hours.length; i++) {
        var entry = {
            "name": i+9,
            "entry": hours[i][0].value
        };
        existingEntries.push(entry);
    }   
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
}

//adding event listeners to each of the save buttons
function addListeners() {
    for(i=0; i<save.length;i++) {
        save[i].addEventListener("click", saveButton)
    }
}

//load current set of entries from local storage upon page load
function loadEntries() {
    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    if(existingEntries == null) {existingEntries = [];}
    for (i=0; i < hours.length; i++) {
        hours[i][0].textContent = existingEntries[i].entry;
        console.log(existingEntries[i].entry)
    }   
}




$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));   //set current day on the jumbotron

//set up the page
addListeners();
colors();
loadEntries();

