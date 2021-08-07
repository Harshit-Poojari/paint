canvas = document.getElementById("myCanvas");
var mouseEvent = "empty";
var lastPositionofx,lastPositionofy;
ctx = canvas.getContext('2d');
var color = "blue";
var widthLine = 1;
var radius = 1;
var mouseEvent = "mousedown"
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    widthLine = document.getElementById("widthline").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mousedown";

}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
         currentPositionofmousex = e.clientX - canvas.offsetLeft;
         currentPositionofmousey = e.clientY - canvas.offsetTop;
        if (mouseEvent == "mousedown") {
            console.log(currentPositionofx , currentPositionofy);
            console.log("x = " + currentPositionofmousex + "y="+ currentPositionofmousey);
           ctx.beginPath();
           ctx.strokeStyle = color;
           ctx.lineWidth = widthofLine;
           ctx.arc(currentPositionofmousex,currentPositionofmousey,radius,0,2*Math.PI);
            ctx.stroke();}
   

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
    mouseEvent ="mouseleave";
}
function clearArea() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}


