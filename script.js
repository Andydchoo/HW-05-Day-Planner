//An array for the time slot's data
const times = [
    {
        id: "09AM",
        time: "09",
        ofDay: "AM",
        event: ""
    },

    {
        id: "10AM",
        time: "10",
        ofDay: "AM",
        event: ""
    },

    {
        id: "11AM",
        time: "11",
        ofDay: "AM",
        event: ""
    },

    {
        id: "12PM",
        time: "12",
        ofDay: "PM",
        event: ""
    },

    {
        id: "01PM",
        time: "13",
        ofDay: "PM",
        event: ""
    },

    {
        id: "02PM",
        time: "14",
        ofDay: "PM",
        event: ""
    },

    {
        id: "03PM",
        time: "15",
        ofDay: "PM",
        event: ""
    },

    {
        id: "04PM",
        time: "16",
        ofDay: "PM",
        event: ""
    },

    {
        id: "05PM",
        time: "17",
        ofDay: "PM",
        event: ""
    }
]

//A function for generating the different time slots
function fillSlots() {

    var currentTime = moment().hour();

    for (let i = 0; i < times.length; i++) {
        var container = document.querySelector('.container');
        var id = times[i].id;
        var time = times[i].time;
        var tenseClass = "";

        if (time < currentTime) {
            tenseClass = "past";

        } else if (time == currentTime) {
            tenseClass = "present";
            
        } else {
            tenseClass = "future";
        }

        $('.container').append(`
        <div class="${id} input-group mb-3 timeSlot">
        <span class="input-group-text">${id}</span>
        <input type="text" id="input${id}" class="form-control ${tenseClass}" value="${localStorage.getItem(`input${id}`) || ""}"></input>
        <button class="btn btn-outline-secondary saveBtn" type="button" id="${id}btn">Add</button>
        </div>`);
    }
};

//function for displaying current time at top of site
$(document).ready(function () {

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));
})

fillSlots();

//Function listening for savebtn click
$(".saveBtn").click(function(event) {
    var currentInput = $(this).parent('.timeSlot').find('input')[0];
    var id = currentInput.id;

    window.localStorage.setItem(id, currentInput.value);

  });