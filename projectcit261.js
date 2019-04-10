// create the collapsible for the room when the user click a room, the photos of that room will come down  
function createCollapsible() {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}


function changeMe(sel) {
  sel.style.color = "#000";
}

//  NAV BAR
function navBar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// populate rooms, the user is asked to select the number of rooms he 
//want to check and this function will expand the form and will show the amount 
//of rooms depends on the user selection and for each room will ask about 
//how many adults and children will stay in each room
function populateRooms(sel) {
  let roomNumbers = document.getElementById("roomNumbers")
  let rooms = document.getElementById("roomsToDisplay")
  rooms.innerHTML = "";
  let roomsNr = roomNumbers.options[roomNumbers.selectedIndex].value;
  let stringRooms = "";
  for (let i = 0; i < roomsNr; ++i) {
    stringRooms += ` 
    <div class="ex">
    <form id="aNumber" name="adultsNumber">
    <div class="col-25">
        <p><label for="room" style="color:lightgray">Room ${[i + 1]}</label></p>
     </div>
    <p><label for="room" style="color:lightgray">Adults</label></p> 
  <select onchange="changeMe(this)" id="aNumber" name="adultsNumber" >
    <option  selected disabled value="">Please select</option>
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
  </form> 
  <form class="ey" id="chNumber" name="childrenNumber" >
  <p><label for="room" style="color:lightgray">Children</label> </p>
  <select onchange="changeMe(this)" id="chNumber" name="childrenNumber" >
  <option selected disabled value="">Please select</option>
  <option value="0">0</option>
  <option value="1">1</option>
  <option value="2">2</option>
</select> </form> </div> <br> `;

  }
  rooms.insertAdjacentHTML('beforeend', stringRooms);
  changeMe(sel);

}

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}



window.onload = function () {
  // Add active class to the current button (highlight it)
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("button");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("activestaff");
      current[0].className = current[0].className.replace(" activestaff", "");
      this.className += " activestaff";
    });
  }
}

//creating an array of objects that contains information for each room (a little bit hardcoded since we are working only with front end)
const roomsInfo = [{ type: "Executive Deluxe", startDate: new Date("04/01/2019"), endDate: new Date("04/12/2019"), cost: 75 },
  { type: "Colonial Deluxe", startDate: new Date("04/14/2019"), endDate: new Date("04/26/2019") , cost: 80 },
  { type: "Colonial Suite", startDate: new Date("04/05/2019"), endDate: new Date("04/20/2019") , cost: 90 },
  { type: "Colonial Superior", startDate: new Date("04/25/2019"), endDate: new Date("04/30/2019"), cost: 120 }]

function roomAvailability() {
  var fname =  document.getElementById("fname").value;
  var lname =  document.getElementById("lname").value;

  //Get the value of the name of the room the user has selected and also the date
  var typeRoomSel = document.getElementById("roomType").value;
  //convert the date into format yyyy/mm/dd
  var dateSel = new Date(document.getElementById("myDate").value);
  
  var startDate;
  var endDate; 
  var cost;

  //find the ype that the user has selected and get all information from array for that room
  for(let i = 0; i < roomsInfo.length; i++)
  {
   if (roomsInfo[i].type == typeRoomSel)
   {
   startDate = roomsInfo[i].startDate;
   endDate   = roomsInfo[i].endDate;
   cost      = roomsInfo[i].cost;
   break;
   }
  }
//display message depends on the date the user has selected
  if (dateSel.getTime() >= startDate.getTime() && dateSel.getTime() <= endDate.getTime()) {
    document.getElementById("availability").innerHTML =  "Hello " + fname + " " + lname + ", this room is busy from " + startDate.getFullYear() +
      "/" + (startDate.getMonth() + 1) + "/" + startDate.getDate() + "  to  "
      + endDate.getFullYear() + "/" + (endDate.getMonth() + 1) + "/" + endDate.getDate() + ". Contact to one of our staff members to get more information.";
  }
  else {
    document.getElementById("availability").innerHTML = typeRoomSel + " is free during the date you selected and" + " cost " +  cost + "$. " + "If you want to reserve it contact to one of our staff members" ;
  }
  return false;
}
