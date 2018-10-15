var schedule = [
  {
    "id": "session-1",
    "title": "Registration1",
    "tracks": [1,2]
  },
  {
    "id": "session-2",
    "title": "Volgende onderwerp2",
    "tracks": [1,2]
  },
  {
  "id": "session-3",
  "title": "Volgende onderwerp3",
  "tracks": [1]
  },
  {
  "id": "session-4",
  "title": "Volgende onderwerp4",
  "tracks": [2]
  }
];
//get schedule list element from the document
var list = document.getElementById("schedule");
//get checkbox element from the document
var track1CheckBox = document.getElementById("show-track-1");
var track2CheckBox = document.getElementById("show-track-2");

function createSessionElement(session) {
// create li element for the session
  var li = document.createElement("li");
// add the session title as the <li> text content
  li.textContent = session.title;
// return the <li> element
  return li;
};

function clearList() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

function displaySchedule() {
  clearList();
  // loop through the schedule array
  for (var i = 0; i < schedule.length; i++) {
/*  // create session elements
    var li = createSessionElement(schedule[i]);
  // append the elements to the List
    list.appendChild(li);*/

// changed body for loop ivm checkboxes
    var tracks = schedule[i].tracks;
    var isCurrentTrack = (track1CheckBox.checked && tracks.indexOf(1) >= 0) ||(track2CheckBox.checked && tracks.indexOf(2) >= 0);
    if (isCurrentTrack) {
    var li = createSessionElement(schedule[i]);
    list.appendChild(li);
    }
  }
}

displaySchedule();

// checkbox  event listerners
track1CheckBox.addEventListener("click", displaySchedule, false);
track2CheckBox.addEventListener("click", displaySchedule, false);
