function createCollapsible(){
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
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

 
    function changeMe(sel)
    {
      sel.style.color = "#000";              
    }


function navBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  
function populateRooms(sel)
{
  let roomNumbers = document.getElementById("roomNumbers")
  let rooms = document.getElementById("roomsToDisplay")
  rooms.innerHTML = ""; //in order to delete the previous student rendered
  let roomsNr = roomNumbers.options[roomNumbers.selectedIndex].value;
  let stringRooms = "";
  for(let i = 0;i < roomsNr;++i)
  {
    stringRooms += ` 
    <div class="ex">
    <form id="aNumber" name="adultsNumber">
    <div class="col-25">
        <label for="room" style="color:lightgray">Room ${[i+1]}</label>
     </div>
    <p><label for="room" style="color:lightgray">Adults</label></p> 
  <select onchange="changeMe(this)" id="aNumber" name="adultsNumber" >
    <option  selected disabled value="">Please select</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
  </select>
  </form>
  <form class="ey"  id="chNumber" name="childrenNumber" >
  <p><label for="room" style="color:lightgray">Children</label> </p>
  <select onchange="changeMe(this)" id="chNumber" name="childrenNumber" >
  <option selected disabled value="">Please select</option>
  <option value="1">1</option>
  <option value="2">2</option>
</select> </form> </div> <br> `;

  }
  rooms.insertAdjacentHTML('beforeend', stringRooms);
  changeMe(sel);

}