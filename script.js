$(function () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    
    var x = 150;
    var y = 225;
    var z = 0;
    
    context.beginPath();
    context.moveTo(y,z) ;
    context.lineTo(y,canvas.height);
    context.strokeStyle = "green";
    context.stroke();
    
    context.beginPath();
    context.moveTo(z,x) ;
    context.lineTo(canvas.width,x);
    context.strokeStyle = "red";
    context.stroke();
     });