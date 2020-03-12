var colorchecker = true;
     var countercolumnone = 0 ;
     var countercolumntwo = 0 ;
     var countercolumnthree = 0 ;
     var countercolumnfour = 0 ;
     var countercolumnfive = 0 ;
     var countercolumnsix = 0 ;
     var countercolumnseven = 0 ;
var currentID
var gamearray=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
   /*  var ffirst = document.getElementById("g6").style.backgroundColor="magenta";
     var fsecond = document.getElementById("g5").style.backgroundColor="magenta";
     
     
     
     
//the variables that end in s mean that they are magenta
//var afirsts = document.getElementById("a1")
//this first array would go to all td tags that have the id of a 
/*var verticalrow1=[x]
//this goes to the b id's and etc.








/*var verticalrow2=[x]{}
var verticalrow3=[x]{}
var verticalrow4=[x]{}
var verticalrow5=[x]{}
var verticalrow6=[x]{}
var verticalrow7=[x]{}*/


//this just states who's turn it is 

//this just states who's turn it is !(not working)!
if(colorchecker==true){
   //  document.getElementById("turn").innerHTML=("Cyan's turn");
}
else if(colorchecker==false){
     document.getElementById("turn").innerHTML=("Magenta's turn");
}
//not sure what this was supposed to do
//var start = 1
function gamex(x)
{
     var currentID = x.id;
     console.log(currentID);
}
function clicker(x){
     if(colorchecker==true){
          currentID.style.backgroundColor="cyan"
          colorchecker=false
     }
     else if(colorchecker==false){
         document.getElementById(currentID).style.backgroundColor="magenta"
     }
}
function abutton(){
//the countercolumnone is just the same as  abutton the onclick  

     //the s at the end of a variable means it is magenta while the first letter indicates the row with  A being the first column and B being the second ETC.

     if(colorchecker == true){     
          //for(countercolumnone=1;countercolumnone<=6;countercolumnone++){
               if(countercolumnone==1){
                    var afirst = document.getElementById("a6").style.backgroundColor="cyan";
                    console.log(countercolumnone);
                    colorchecker=false;
                    gamearray [0][0]=8;
               }
              else if(countercolumnone==2){
                    var asecond = document.getElementById("a5").style.backgroundColor="cyan";
                    console.log(countercolumnone)
                    colorchecker=false;
                    gamearry [1][0]=8;
               }
               else if(countercolumnone==3){
                    var athird = document.getElementById("a4").style.backgroundColor="cyan";
                    console.log(countercolumnone)
                    colorchecker=false
                    gamearray [2][0]=8;
               }
               else if(countercolumnone==4){
                    var afourth = document.getElementById("a3").style.backgroundColor="cyan";
                    console.log(countercolumnone)
                    colorchecker=false
                    gamearray [3][0] =8;
               }
               else if(countercolumnone==5){
                    var afith = document.getElementById("a2").style.backgroundColor="cyan";
                    console.log(countercolumnone)
                    colorchecker=false
                    gamearray[4][0]=8;
               }
               else if(countercolumnone==6){
                    var asixth = document.getElementById("a1").style.backgroundColor="cyan";
                    console.log(countercolumnone)
                    colorchecker=false
                    gamearray[5][0]=8;
               }
               else if(countercolumnone>=7){
                    alert("column 1 is full")
               }
         // }
     }
     else if(colorchecker == false){
          
               if(countercolumnone==1){
                    var afirsts = document.getElementById("a6").style.backgroundColor="magenta";
                    console.log(countercolumnone)
                    colorchecker=true
                    gamearray[][]=9;
               }
               else if(countercolumnone==2){
                    var aseconds = document.getElementById("a5").style.backgroundColor="magenta";
                    console.log(countercolumnone)
                    colorchecker=true
                    gamearray[][]=9;

               }
               else if(countercolumnone==3){
                    var athirds = document.getElementById("a4").style.backgroundColor="magenta";
                    console.log(countercolumnone)
                    colorchecker=true
                    gamearray[][]=9;

               }
               else if(countercolumnone==4){
                    var afourths = document.getElementById("a3").style.backgroundColor="magenta";
                    console.log(countercolumnone)
                    colorchecker=true
                    gamearray[][]=9;

               }
               else if(countercolumnone==5){
                    var afiths = document.getElementById("a2").style.backgroundColor="magenta";
                    console.log(countercolumnone)
                    colorchecker=true
                    gamearray[][]=9;

               }
               else if(countercolumnone==6){
                    var asixths = document.getElementById("a1").style.backgroundColor="magenta";
                    console.log(countercolumnone)
                    colorchecker=true
                    gamearray[][]=9;

               }
               else if(countercolumnone>=7){
                    alert("column 1 full ")
               }
              /*if(colorchecker==false){
          colorchecker=true;
     } 
     else if(colorchecker==true){
          colorchecker=false
     } */
     }

     countercolumnone+=1
}

function bbutton(){
     /*var bfirst = document.getElementById("b6").style.backgroundColor="cyan";
     var bsecond = document.getElementById("b5").style.backgroundColor="cyan";
     var bthird = document.getElementById("b4").style.backgroundColor="cyan";
     var bfourth = document.getElementById("b3").style.backgroundColor="cyan";
     var bfith = document.getElementById("b2").style.backgroundColor="cyan";
     var bsixth = document.getElementById("b1").style.backgroundColor="cyan";

     var bfirsts = document.getElementById("b6").style.backgroundColor="magenta";
     var bseconds = document.getElementById("b5").style.backgroundColor="magenta";
     var bthirds = document.getElementById("b4").style.backgroundColor="magenta";
     var bfourths = document.getElementById("b3").style.backgroundColor="magenta";
     var bfiths = document.getElementById("b2").style.backgroundColor="magenta";
     var bsixths = document.getElementById("b1").style.backgroundColor="magenta";*/
     if(colorchecker == true){
          
          
          
          
          
         
          
               if(countercolumntwo==1){
                    var bfirst = document.getElementById("b6").style.backgroundColor="cyan";
                    console.log(countercolumntwo)
                    colorchecker=false;
                    gamearray[][]=8;

               }
               else if(countercolumntwo==2){
                    var bsecond = document.getElementById("b5").style.backgroundColor="cyan";
                    console.log(countercolumnone)
                    colorchecker=false;
                    gamearray[][]=8;

               }
               else if(countercolumntwo==3){
                    var bthird = document.getElementById("b4").style.backgroundColor="cyan";
                    console.log(countercolumnone)
                    colorchecker=false;
                    gamearray[][]=8;

               }
               else if(countercolumntwo==4){
                    var bfourth = document.getElementById("b3").style.backgroundColor="cyan";
                    console.log(countercolumnone)
                    colorchecker=false;
                    gamearray[][]=8;

               }
               else if(countercolumntwo==5){
                    var bfith = document.getElementById("b2").style.backgroundColor="cyan";
                    console.log(countercolumnone)
                    colorchecker=false;
                    gamearray[][]=8;

               }
               else if(countercolumntwo==6){
                    var bsixth = document.getElementById("b1").style.backgroundColor="cyan";
                    console.log(countercolumnone)
                    colorchecker=false;
                    gamearray[][]=8;

               }
               else if(countercolumntwo>=7){
                    alert("column 2 is full")
               }
          
     }
     else if(colorchecker == false){

               if(countercolumntwo==1){
                    var bfirsts = document.getElementById("b6").style.backgroundColor="magenta";
                    console.log(countercolumnone)
                    colorchecker=true;
                    gamearray[][]=9;

               }
               else if(countercolumntwo==2){
                    var bseconds = document.getElementById("b5").style.backgroundColor="magenta";
                    console.log(countercolumntwo)
                    colorchecker=true;
                    gamearray[][]=9;

               }
               else if(countercolumntwo==3){
                    var bthirds = document.getElementById("b4").style.backgroundColor="magenta";
                    console.log(countercolumntwo)
                    colorchecker=true;
                    gamearray[][]=9;

               }
               else if(countercolumntwo==4){
                    var bfourths = document.getElementById("b3").style.backgroundColor="magenta";
                    console.log(countercolumntwo)
                    colorchecker=true;
                    gamearray[][]=9;

               }
               else if(countercolumntwo==5){
                    var bfiths = document.getElementById("b2").style.backgroundColor="magenta";
                    console.log(countercolumntwo)
                    colorchecker=true;
                    gamearray[][]=9;

               }
               else if(countercolumntwo==6){
                    var bsixths = document.getElementById("b1").style.backgroundColor="magenta";
                    console.log(countercolumntwo)
                    colorchecker=true;
                    gamearray[][]=9;

               }
               else if(countercolumntwo>=7){
                    alert("column 2 full ")
               }
          
     }
       
     countercolumntwo+=1
}

function cbutton(){
   /*  var cfirst = document.getElementById("c6").style.backgroundColor="cyan";
     var csecond = document.getElementById("c5").style.backgroundColor="cyan";
     var cthird = document.getElementById("c4").style.backgroundColor="cyan";
     var cfourth = document.getElementById("c3").style.backgroundColor="cyan";
     var cfith = document.getElementById("c2").style.backgroundColor="cyan";
     var csixth = document.getElementById("c1").style.backgroundColor="cyan";

     var cfirsts = document.getElementById("c6").style.backgroundColor="magenta";
     var cseconds = document.getElementById("c5").style.backgroundColor="magenta";
     var cthirds = document.getElementById("c4").style.backgroundColor="magenta";
     var cfourths = document.getElementById("c3").style.backgroundColor="magenta";
     var cfiths = document.getElementById("c2").style.backgroundColor="magenta";
     var csixths = document.getElementById("c1").style.backgroundColor="magenta";*/
     if(colorchecker == true){

               if(countercolumnthree==1){
                    var cfirst = document.getElementById("c6").style.backgroundColor="cyan";
                    console.log(countercolumnthree)
                    colorchecker=false;
                    gamearray[][]=8;

               }
               else if(countercolumnthree==2){
                    var csecond = document.getElementById("c5").style.backgroundColor="cyan";
                    console.log(countercolumnthree)
                    colorchecker=false;
                    gamearray[][]=8;

               }
               else if(countercolumnthree==3){
                    var cthird = document.getElementById("c4").style.backgroundColor="cyan";
                    console.log(countercolumnthree)
                    colorchecker=false;
                    gamearray[][]=8;

               }
               else if(countercolumnthree==4){
                    var cfourth = document.getElementById("c3").style.backgroundColor="cyan";
                    console.log(countercolumnthree)
                    colorchecker=false;
                    gamearray[][]=8;

               }
               else if(countercolumnthree==5){
                    var cfith = document.getElementById("c2").style.backgroundColor="cyan";
                    console.log(countercolumnthree)
                    colorchecker=false;
                    gamearray[][]=8;

               }
               else if(countercolumnthree==6){
                    var csixth = document.getElementById("c1").style.backgroundColor="cyan";
                    console.log(countercolumnthree)
                    colorchecker=false;
                    gamearray[][]=8;

               }
               else if(countercolumnthree>=7){
                    alert("column 3 is full")
               }
          
     }
     else if(colorchecker == false){
          
          //for(countercolumnthree=0;countercolumnthree<=6;countercolumnthree++){
               if(countercolumnthree==1){
                    var cfirsts = document.getElementById("c6").style.backgroundColor="magenta";
                    console.log(countercolumnthree)
                    colorchecker=true;
                    gamearray[][]=9;

               }
               else if(countercolumnthree==2){
                    var cseconds = document.getElementById("c5").style.backgroundColor="magenta";
                    console.log(countercolumnthree)
                    colorchecker=true ;
                    gamearray[][]=9;
   
               }
               else if(countercolumnthree==3){
                    var cthirds = document.getElementById("c4").style.backgroundColor="magenta";
                    console.log(countercolumnthree)
                    colorchecker=true;
                    gamearray[][]=9;

               }
               else if(countercolumnthree==4){
                    var cfourths = document.getElementById("c3").style.backgroundColor="magenta";
                    console.log(countercolumnthree)
                    colorchecker=true;
                    gamearray[][]=9;

               }
               else if(countercolumnthree==5){
                    var cfiths = document.getElementById("c2").style.backgroundColor="magenta";
                    console.log(countercolumnthree)
                    colorchecker=true;
                    gamearray[][]=9;

               }
               else if(countercolumnthree==6){
                    var csixths = document.getElementById("c1").style.backgroundColor="magenta";
                    console.log(countercolumnthree)
                    colorchecker=true;
                    gamearray[][]=9;

               }
               else if(countercolumnthree>=7){
                    alert("column 3 full ")
               }
          //}
     }
     countercolumnthree+=1

}











function dbutton(){
     /*var dfirst = document.getElementById("d6").style.backgroundColor="cyan";
     var dsecond = document.getElementById("d5").style.backgroundColor="cyan";
     var dthird = document.getElementById("d4").style.backgroundColor="cyan";
     var dfourth = document.getElementById("d3").style.backgroundColor="cyan";
     var dfith = document.getElementById("d2").style.backgroundColor="cyan";
     var dsixth = document.getElementById("d1").style.backgroundColor="cyan";

     var dfirsts = document.getElementById("d6").style.backgroundColor="magenta";
     var dseconds = document.getElementById("d5").style.backgroundColor="magenta";
     var dthirds = document.getElementById("d4").style.backgroundColor="magenta";
     var dfourths = document.getElementById("d3").style.backgroundColor="magenta";
     var dfiths = document.getElementById("d2").style.backgroundColor="magenta";
     var dsixths = document.getElementById("d1").style.backgroundColor="magenta";*/
     if(colorchecker == true){
   
          
          
          
               if(countercolumnfour==1){
                    var dfirst = document.getElementById("d6").style.backgroundColor="cyan";
                    console.log(countercolumnfour)
                    colorchecker=false;
                    gamearray[][]=8;

               }
               else if(countercolumnfour==2){
                    var dsecond = document.getElementById("d5").style.backgroundColor="cyan";
                    console.log(countercolumnfour)
                    colorchecker=false;
                    gamearray[][]=8;


               }
               else if(countercolumnfour==3){
                    var dthird = document.getElementById("d4").style.backgroundColor="cyan";
                    console.log(countercolumnfour)
                    colorchecker=false;
                    gamearray[][]=8;

               }
               else if(countercolumnfour==4){
                    var dfourth = document.getElementById("d3").style.backgroundColor="cyan";
                    console.log(countercolumnfour)
                    colorchecker=false;
                    gamearray[][]=8;


               }
               else if(countercolumnfour==5){
                    var dfith = document.getElementById("d2").style.backgroundColor="cyan";
                    console.log(countercolumnfour)
                    colorchecker=false;
                    gamearray[][]=8;

               }
               else if(countercolumnfour==6){
                    var dsixth = document.getElementById("d1").style.backgroundColor="cyan";
                    console.log(countercolumnfour)
                    colorchecker=false;
                    gamearray[][]=8;


               }
               else if(countercolumnfour>=7){
                    alert("column 4 is full")
               }
          
     }
     else if(colorchecker == false){
          
               if(countercolumnfour==1){
                    var dfirsts = document.getElementById("d6").style.backgroundColor="magenta";
                    console.log(countercolumnfour)
                    colorchecker=true;
                    gamearray[][]=9;


               }
               else if(countercolumnfour==2){
                    var dseconds = document.getElementById("d5").style.backgroundColor="magenta";
                    console.log(countercolumnfour)
                    colorchecker=true;
                    gamearray[][]=9;


               }
               else if(countercolumnfour==3){
                    var dthirds = document.getElementById("d4").style.backgroundColor="magenta";
                    console.log(countercolumnfour)
                    colorchecker=true;
                    gamearray[][]=9;


               }
               else if(countercolumnfour==4){
                    var dfourths = document.getElementById("d3").style.backgroundColor="magenta";
                    console.log(countercolumnfour)
                    colorchecker=true;
                    gamearray[][]=9;


               }
               else if(countercolumnfour==5){
                    var dfiths = document.getElementById("d2").style.backgroundColor="magenta";
                    console.log(countercolumnfour)
                    colorchecker=true;
                    gamearray[][]=9;


               }
               else if(countercolumnfour==6){
                    var dsixths = document.getElementById("d1").style.backgroundColor="magenta";
                    console.log(countercolumnfour)
                    colorchecker=true;
                    gamearray[][]=9;


               }
               else if(countercolumnfour>=7){
                    //the following is just to check if row one has been filled
                    alert("column 4 full ")
               }
          
     }
     countercolumnfour+=1

}
















function ebutton(){
    /* var efirst = document.getElementById("e6").style.backgroundColor="cyan";
     var esecond = document.getElementById("e5").style.backgroundColor="cyan";
     var ethird = document.getElementById("e4").style.backgroundColor="cyan";
     var efourth = document.getElementById("e3").style.backgroundColor="cyan";
     var efith = document.getElementById("e2").style.backgroundColor="cyan";
     var esixth = document.getElementById("e1").style.backgroundColor="cyan";

     var efirst = document.getElementById("e6").style.backgroundColor="magenta";
     var esecond = document.getElementById("e5").style.backgroundColor="magenta";
     var ethird = document.getElementById("e4").style.backgroundColor="magenta";
     var efourth = document.getElementById("e3").style.backgroundColor="magenta";
     var efith = document.getElementById("e2").style.backgroundColor="magneta";
     var esixth = document.getElementById("e1").style.backgroundColor="magenta";*/
     if(colorchecker == true){
     
          
               if(countercolumnfive==1){
                     var efirst = document.getElementById("e6").style.backgroundColor="cyan";
                     console.log(countercolumnfour)
                     colorchecker=false;
                     gamearray[][]=8;


               }
               else if(countercolumnfive==2){
                     var esecond = document.getElementById("e5").style.backgroundColor="cyan";
                     console.log(countercolumnfour)
                     colorchecker=false;
                     gamearray[][]=8;


               }
               else if(countercolumnfive==3){
                     var ethird = document.getElementById("e4").style.backgroundColor="cyan";
                     console.log(countercolumnfour)
                     colorchecker=false;
                     gamearray[][]=8;


               }
               else if(countercolumnfive==4){
                    var efourth = document.getElementById("e3").style.backgroundColor="cyan";
                    console.log(countercolumnfour)
                    colorchecker=false;
                    gamearray[][]=8;


               }
               else if(countercolumnfive==5){
                    var efith = document.getElementById("e2").style.backgroundColor="cyan";
                    console.log(countercolumnfour)
                    colorchecker=false;
                    gamearray[][]=8;


               }
               else if(countercolumnfive==6){
                    var esixth = document.getElementById("e1").style.backgroundColor="cyan";
                    console.log(countercolumnfour)
                    colorchecker=false;
                    gamearray[][]=8;


               }
               else if(countercolumnfive>=7){
                    alert("column 5 is full")
               }
          
     }
     else if(colorchecker == false){
          
          
     
               if(countercolumnfive==1){
                    var efirst = document.getElementById("e6").style.backgroundColor="magenta";
                    console.log(countercolumnfour)
                    colorchecker=true;
                    gamearray[][]=9;


               }
               else if(countercolumnfive==2){
                    var esecond = document.getElementById("e5").style.backgroundColor="magenta";
                    console.log(countercolumnfour)
                    colorchecker=true;
                    gamearray[][]=9;


               }
               else if(countercolumnfive==3){
                    var ethird = document.getElementById("e4").style.backgroundColor="magenta";
                    console.log(countercolumnfour)
                    colorchecker=true;
                    gamearray[][]=9;

               }
               else if(countercolumnfive==4){
                    var efourth = document.getElementById("e3").style.backgroundColor="magenta";
                    console.log(countercolumnfour)
                    colorchecker=true;
                    gamearray[][]=9;

               }
               else if(countercolumnfive==5){
                    var efith = document.getElementById("e2").style.backgroundColor="magenta";
                    console.log(countercolumnfour)
                    colorchecker=true;
                    gamearray[][]=9;


               }
               else if(countercolumnfive==6){
                    var esixth = document.getElementById("e1").style.backgroundColor="magenta";
                    console.log(countercolumnfour)
                    colorchecker=true;
                    gamearray[][]=9;


               }
               else if(countercolumnfive>=7){
                    //the following is just to check if row one has been filled
                    alert("column 5 full ")
               }
          
     }
     countercolumnfive+=1

}













function fbutton(){
     /*var ffirst = document.getElementById("f6").style.backgroundColor="cyan";
     var fsecond = document.getElementById("f5").style.backgroundColor="cyan";
     var fthird = document.getElementById("f4").style.backgroundColor="cyan";
     var ffourth = document.getElementById("f3").style.backgroundColor="cyan";
     var ffith = document.getElementById("f2").style.backgroundColor="cyan";
     var fsixth = document.getElementById("f1").style.backgroundColor="cyan";

     var ffirsts = document.getElementById("f6").style.backgroundColor="magenta";
     var fseconds = document.getElementById("f5").style.backgroundColor="magenta";
     var fthirds = document.getElementById("f4").style.backgroundColor="magenta";
     var ffourths = document.getElementById("f3").style.backgroundColor="magenta";
     var ffiths = document.getElementById("f2").style.backgroundColor="magenta";
     var fsixths = document.getElementById("f1").style.backgroundColor="magenta";*/
     if(colorchecker == true){
               if(countercolumnsix==1){
                    var ffirst = document.getElementById("f6").style.backgroundColor="cyan";
                    console.log(countercolumnfour)
                    colorchecker=false;
                    gamearray[][]=8;


               }
               else if(countercolumnsix==2){
                    var fsecond = document.getElementById("f5").style.backgroundColor="cyan";
                    console.log(countercolumnfour)
                    colorchecker=false;
                    gamearray[][]=8;


               }
               else if(countercolumnsix==3){
                    var fthird = document.getElementById("f4").style.backgroundColor="cyan";
                    console.log(countercolumnfour)
                    colorchecker=false;
                    gamearray[][]=8;


               }
               else if(countercolumnsix==4){
                    var ffourth = document.getElementById("f3").style.backgroundColor="cyan";
                    console.log(countercolumnfour)
                    colorchecker=false;
                    gamearray[][]=8;


               }
               else if(countercolumnsix==5){
                    var ffith = document.getElementById("f2").style.backgroundColor="cyan";
                    console.log(countercolumnfour)
                    colorchecker=false;
                    gamearray[][]=8;


               }
               else if(countercolumnsix==6){
                    var fsixth = document.getElementById("f1").style.backgroundColor="cyan";
                    console.log(countercolumnfour)
                    colorchecker=false;
                    gamearray[][]=8;


               }
               else if(countercolumnsix>=7){
                    alert("column 6 is full")
               }
          
     }
     else if(colorchecker == false){
               if(countercolumnsix==1){
                    var ffirsts = document.getElementById("f6").style.backgroundColor="magenta";
                    console.log(countercolumnsix)
                    colorchecker=true;
                    gamearray[][]=9;


               }
               else if(countercolumnsix==2){
                    var fseconds = document.getElementById("f5").style.backgroundColor="magenta";
                    console.log(countercolumnsix)
                    colorchecker=true;
                    gamearray[][]=9;


               }
               else if(countercolumnsix==3){
                    var fthirds = document.getElementById("f4").style.backgroundColor="magenta";
                    console.log(countercolumnsix)
                    colorchecker=true;
                    gamearray[][]=9;


               }
               else if(countercolumnsix==4){
                    var ffourths = document.getElementById("f3").style.backgroundColor="magenta";
                    console.log(countercolumnsix)
                    colorchecker=true;
                    gamearray[][]=9;


               }
               else if(countercolumnsix==5){
                    var ffiths = document.getElementById("f2").style.backgroundColor="magenta";
                    console.log(countercolumnsix)
                    colorchecker=true;
                    gamearray[][]=9;


               }
               else if(countercolumnsix==6){
                    var fsixths = document.getElementById("f1").style.backgroundColor="magenta";
                    console.log(countercolumnsix)
                    colorchecker=true;
                    gamearray[][]=9;


               }
               else if(countercolumnsix>=7){
                    //the following is just to check if row one has been filled
                    alert("column 6 full ")
               }
          
     }
     countercolumnsix+=1

}











function gbutton(){
     /*var gfirst = document.getElementById("g6").style.backgroundColor="cyan";
     var gsecond = document.getElementById("g5").style.backgroundColor="cyan";
     var gthird = document.getElementById("g4").style.backgroundColor="cyan";
     var gfourth = document.getElementById("g3").style.backgroundColor="cyan";
     var gfith = document.getElementById("g2").style.backgroundColor="cyan";
     var gsixth = document.getElementById("g1").style.backgroundColor="cyan";
     
     var ffirst = document.getElementById("g6").style.backgroundColor="magenta";
     var fsecond = document.getElementById("g5").style.backgroundColor="magenta";
     var fthird = document.getElementById("g4").style.backgroundColor="magenta";
     var ffourth = document.getElementById("g3").style.backgroundColor="magenta";
     var ffith = document.getElementById("g2").style.backgroundColor="magenta";
     var fsixth = document.getElementById("g1").style.backgroundColor="magenta";*/
     if(colorchecker == true){
               if(countercolumnseven==1){
                    var gfirst = document.getElementById("g6").style.backgroundColor="cyan";
                    console.log(countercolumnfour)
                    colorchecker=false
                    gamearray[][]=8;
               }
               else if(countercolumnseven==2){
                    var gsecond = document.getElementById("g5").style.backgroundColor="cyan";
                    console.log(countercolumnfour)
                    colorchecker=false
                    gamearray[][]=8;

               }
               else if(countercolumnseven==3){
                    var gthird = document.getElementById("g4").style.backgroundColor="cyan";
                    console.log(countercolumnfour)
                    colorchecker=false
                    gamearray[][]=8;

               }
               else if(countercolumnseven==4){
                    var gfourth = document.getElementById("g3").style.backgroundColor="cyan";
                    console.log(countercolumnfour)
                    colorchecker=false
                    gamearray[][]=8;

               }
               else if(countercolumnseven==5){
                    var gfith = document.getElementById("g2").style.backgroundColor="cyan";
                    console.log(countercolumnfour)
                    colorchecker=false
                    gamearray[][]=8;

               }
               else if(countercolumnseven==6){
                    var gsixth = document.getElementById("g1").style.backgroundColor="cyan";
                    console.log(countercolumnfour)
                    colorchecker=false
                    gamearray[][]=8;

               }
               else if(countercolumnseven>=7){
                    alert("column 7 is full")
               }
          
     }
     else if(colorchecker == false){
               
               if(countercolumnseven==1){
                    var ffirst = document.getElementById("g6").style.backgroundColor="magenta";
                    console.log(countercolumnfour)
                    colorchecker=true
                    gamearray[][]=9;

               }
               else if(countercolumnseven==2){
                    var fsecond = document.getElementById("g5").style.backgroundColor="magenta";
                    console.log(countercolumnfour)
                    colorchecker=true
                    gamearray[][]=9;

               }
               else if(countercolumnseven==3){
                    var fthird = document.getElementById("g4").style.backgroundColor="magenta";
                    console.log(countercolumnfour)
                    colorchecker=true
                    gamearray[][]=9;

               }
               else if(countercolumnseven==4){
                    var ffourth = document.getElementById("g3").style.backgroundColor="magenta";
                    console.log(countercolumnfour)
                    colorchecker=true
                    gamearray[][]=9;

               }
               else if(countercolumnseven==5){
                    var ffith = document.getElementById("g2").style.backgroundColor="magenta";
                    console.log(countercolumnfour)
                    colorchecker=true
                    gamearray[][]=9;

               }
               else if(countercolumnseven==6){
                    var fsixth = document.getElementById("g1").style.backgroundColor="magenta";
                    console.log(countercolumnfour)
                    colorchecker=true
                    gamearray[][]=9;

               }
               else if(countercolumnseven>=7){
                    //the following is just to check if row one has been filled
                    alert("column 7 full ")
               }
          
     }
     countercolumnseven  +=1

}



//create somthing to check for a winner (unsure how to do)(ask later)
//create a functio that checks wheter the it has benn clicked before (done)
//create somthing to check for ties (done)
//


//this is to check if all the tiles have been filled with no winner
var tie=0
if(countercolumnone>=6){tie+=1};
if(countercolumntwo>=6){tie+=1};
if(countercolumnthree>=6){tie+=1};
if(countercolumnfour>=6){tie+=1};
if(countercolumnfive>=6){tie+=1};
if(countercolumnsix>=6){tie+=1};
if(countercolumnseven>=6){tie+=1};

if(tie==7){
     alert("I'm not sure how you managed this, but this match is a tie.")
}