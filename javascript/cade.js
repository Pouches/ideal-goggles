var colorchecker=undefined//color checker will check what turn it is
var clickposition = undefined;//clickposition identifies where the puck should be placed
//cheatchecker checks if a space has already been chose and alert the person who chose it
/*
function startbutton(){
    colorchecker=true;
}

function playerbox(){
if(colorchecker=true){
    document.body.getElementById("playerindicator").innerHTML="Player: Cyan";
    console.log("Player:Cyan")
}
}
function mousepositionreset(){
    clickposition=undefined;
    console.log("variable called clickposition reset");
}

function cheatchecker(){
    if(){
        alert("Invalid Placement, Please try again");
    }
}
*/
var placeposition=undefined;
var gamegrid=[
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
];

function setpuckpositiona1(){
    gamegrid[0][0]=1;
      
}