// This file contains the functions that setup and display the objects (gates/wires)
//


// this array stores the x and y coordinates to be fed into the circle creation function
// var coord_hopper = [];

// This variable is a string that gets built from the gates objects this.body
// method.
var display_hopper = "";

// display_list holds all the extant objects to be displayed.
//var display_list = [];

// control() iterates through the display_list and gathers the HTML that will be
// displayed on the screen.
// TODO: Add in code that will add in any handlers needed.
function control() {

 display_hopper = "";
 var display = document.getElementById("stage");

    //display.innerHTML = "";

   for (var i=0; i<display_list.length;i++) {
       display_hopper += display_list[i].body;
   }

  display.innerHTML = "<svg id=\"screen\">" + display_hopper + "</svg>";


}