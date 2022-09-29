var canvas = document.getElementById("myCanvas");
var a = canvas.getContext("2d");

roverwidth = 101;
roverheight = 91;

roverx = 354;
rovery = 453;

nmi_array = ["m1.jpg", "m2.jpg", "m3.jpg", "m4.jpg", "m5.jpg", "m6.jpg", "mars.jpg"];
rn = Math.floor(Math.random()*7);

rimage = "rover.png";
bimage = nmi_array[rn];

function add()
{
    bg = new Image();
    bg.onload = uploadbg;
    bg.src = bimage;

    ri = new Image();
    ri.onload = uploadri;
    ri.src = rimage;
}

function uploadbg()
{
    a.drawImage(bg, 0, 0, canvas.width, canvas.height);
}

function uploadri()
{
    a.drawImage(ri, roverx, rovery, roverwidth, roverheight);
}



window.addEventListener("keydown", press);

function press(e)
{
    keyp = e.keyCode;
    if (keyp=='38')
    {
        up();
        console.log("up")
    }

    if (keyp=='40')
    {
        down();
        console.log("down")
    }

    if (keyp=='37')
    {
        left();
        console.log("left")
    }

    if (keyp=='39')
    {
        right();
        console.log("right")
    }
}

function up()
{
    if (rovery >= 0)
    {
        rovery = rovery - 11;
        console.log("when up arrow is pressed, x = " + roverx + " y = " + rovery);
        uploadbg();
        uploadri();

    }
}

function down()
{
    if (rovery <= 500)
    {
        rovery = rovery + 11;
        console.log("when down arrow is pressed, x = " + roverx + " y = " + rovery);
        uploadbg();
        uploadri();
        
    }
}

function right()
{
    if (roverx <= 700)
    {
        roverx = roverx + 11;
        console.log("when right arrow is pressed, x = " + roverx + " y = " + rovery);
        uploadbg();
        uploadri();
        
    }
}

function left()
{
    if (roverx >= 0)
    {
        roverx = roverx - 11;
        console.log("when left arrow is pressed, x = " + roverx + " y = " + rovery);
        uploadbg();
        uploadri();
        
    }
}

