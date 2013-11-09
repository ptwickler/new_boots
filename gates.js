

function wire(x,y,r,fill) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = "<cirlce cx = \"" + this.x + "\" cy=\"" + this.y + " \" r=\"" + this.r + "\" fill=\"" + this.fill + "\">";
    var tube = document.getElementById("main_st");
    tube.innerHTML += this.body;
};