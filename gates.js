
// display_list is the array that will hold the instantiated HTML that will be
// pushed to the svg canvas
display_list = [];

// prototype of the gates and/or wires: two inputs one output. This is setup as an AND gate
function wire(x,y,r,state) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.fill = "";
    this.input_state_01 = 0;
    this.input_state_02 = 0;
    this.input_01 = [];
    this.input_02 = [];
    this.output = [];
    this.state = state;

    if (this.input_state_01 == 1 && this.input_state_02 == 1) {
        this.state = 1;
    }

    if (this.input_01 == 0 || this.input_02 ==0) {
      this.state == 0;
    }

    if (this.state == 0) {
      this.fill = "blue";
    }

    if (this.state == 1) {
      this.fill = "red";
    }

    if (this.state ==0) {
        this.output
    }
    this.body = "<svg id= \"screen\"><circle cx = \"" + this.x + "\" cy=\"" + this.y + "\" r=\"" + this.r + "\" fill=\"" + this.fill + "\"></svg>";
     //this.body = "<circle cx = \"" + this.x + "\" cy=\"" + this.y + "\" r=\"" + this.r + "\" fill=\"" + this.fill + "\">";


    display_list.push(this.body);

    control();


};