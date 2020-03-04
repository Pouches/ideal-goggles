var colorchecker = true;
     var countercolumnone = 0 ;
     var countercolumntwo = 0 ;
     var countercolumnthree = 0 ;
     var countercolumnfour = 0 ;
     var countercolumnfive = 0 ;
     var countercolumnsix = 0 ;
     var countercolumnseven = 0 ;
var tie = 0 

//the variables that end in s mean that they are magenta


//var afirsts = document.getElementById("a1")


//this first array would go to all td tags that have the id of a 
/*var verticalrow1=[x]
//this goes to the b id's and etc.
/* 
 the following is just an example of how i build the array but will not work with this one 

 function setvalue(x){
                if(check==true){ 
                     document.getElementById("caldis").innerHTML+=x;
                      num1=  document.getElementById("caldis").innerHTML;

        
*/
/*var verticalrow2=[x]{}
var verticalrow3=[x]{}
var verticalrow4=[x]{}
var verticalrow5=[x]{}
var verticalrow6=[x]{}
var verticalrow7=[x]{}*/


//this just states who's turn it is !(not working)!
if(colorchecker==true){
     document.getElementById("turn").value=("Cyan's turn");
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
function abutton(){

     //the s at the end of a variable means it is magenta while the first letter indicates the row with  A being the first column and B being the second ETC.
//A
     var afirst = document.getElementById("a6").style.backgroundColor="cyan";
     var asecond = document.getElementById("a5").style.backgroundColor="cyan";
     var athird = document.getElementById("a4").style.backgroundColor="cyan";
     var afourth = document.getElementById("a3").style.backgroundColor="cyan";
     var afith = document.getElementById("a2").style.backgroundColor="cyan";
     var asixth = document.getElementById("a1").style.backgroundColor="cyan";
/*
     var afirsts = document.getElementById("a6").style.backgroundColor="magenta";
     var aseconds = document.getElementById("a5").style.backgroundColor="magenta";
     var athirds = document.getElementById("a4").style.backgroundColor="magenta";
     var afourths = document.getElementById("a3").style.backgroundColor="magenta";
     var afiths = document.getElementById("a2").style.backgroundColor="magenta";
     var asixths = document.getElementById("a1").style.backgroundColor="magenta";
     */
//B
/*   var bfirst = document.getElementById("b6").style.backgroundColor="cyan";
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
     var bsixths = document.getElementById("b1").style.backgroundColor="magenta";
//C
     var cfirst = document.getElementById("c6").style.backgroundColor="cyan";
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
     var csixths = document.getElementById("c1").style.backgroundColor="magenta";
//D
     var dfirst = document.getElementById("d6").style.backgroundColor="cyan";
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
     var dsixths = document.getElementById("d1").style.backgroundColor="magenta";
//E
     var efirst = document.getElementById("e6").style.backgroundColor="cyan";
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
     var esixth = document.getElementById("e1").style.backgroundColor="magenta";
//f
     var ffirst = document.getElementById("f6").style.backgroundColor="cyan";
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
     var fsixths = document.getElementById("f1").style.backgroundColor="magenta";

//g
     var gfirst = document.getElementById("g6").style.backgroundColor="cyan";
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
          for(countercolumnone=1;countercolumnone<=6;countercolumnone++){
               if(countercolumnone==1){
                    var afirst //= document.getElementById("a1").style.backgroundColor="blue";
               }
               else if(countercolumnone==2){
                    var asecond
               }
               else if(countercolumnone==3){
                    var athird
               }
               else if(countercolumnone==4){
                    var afourth
               }
               else if(countercolumnone==5){
                    var afith
               }
               else if(countercolumnone==6){
                    var asixth
               }
               else if(countercolumnone>=7){
                    alert("column 1 is full")
               }
          }
     }
     else if(colorchecker == false){
          for(countercolumnone=1;countercolumnone<=6;countercolumnone++){
               if(countercolumnone==1){
                    var afirsts
               }
               else if(countercolumnone==2){
                    var aseconds
               }
               else if(countercolumnone==3){
                    var athirds
               }
               else if(countercolumnone==4){
                    var afourths
               }
               else if(countercolumnone==5){
                    var afiths
               }
               else if(countercolumnone==6){
                    var asixths
               }
               else if(countercolumnone>=7){
                    alert("column 1 full ")
               }
          }
     }
}











function bbutton(){
     var bfirst = document.getElementById("b6").style.backgroundColor="cyan";
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
     var bsixths = document.getElementById("b1").style.backgroundColor="magenta";
     if(colorchecker == true){
          for(countercolumntwo=0;countercolumntwo<=6;countercolumntwo++){
               if(countercolumntwo==1){
                    var bfirst 
               }
               else if(countercolumntwo==2){
                    var bsecond
               }
               else if(countercolumntwo==3){
                    var bthird
               }
               else if(countercolumntwo==4){
                    var bfourth
               }
               else if(countercolumntwo==5){
                    var bfith
               }
               else if(countercolumntwo==6){
                    var bsixth
               }
               else if(countercolumntwo>=7){
                    alert("column 2 is full")
               }
          }
     }
     else if(colorchecker == false){
          for(countercolumnone=0;countercolumnone<=6;countercolumnone){
               if(countercolumnone==1){
                    var bfirsts
               }
               else if(countercolumntwo==2){
                    var bseconds
               }
               else if(countercolumntwo==3){
                    var bthirds
               }
               else if(countercolumntwo==4){
                    var bfourths
               }
               else if(countercolumntwo==5){
                    var bfiths
               }
               else if(countercolumntwo==6){
                    var bsixths
               }
               else if(countercolumntwo>=7){
                    alert("column 2 full ")
               }
          }
     }
}













function cbutton(){
     var cfirst = document.getElementById("c6").style.backgroundColor="cyan";
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
     var csixths = document.getElementById("c1").style.backgroundColor="magenta";
     if(colorchecker == true){
          for(countercolumnthree=0;countercolumnthree<=6;countercolumnthree++){
               if(countercolumnthree==1){
                    var cfirst 
               }
               else if(countercolumnthree==2){
                    var csecond
               }
               else if(countercolumnthree==3){
                    var cthird
               }
               else if(countercolumnthree==4){
                    var cfourth
               }
               else if(countercolumnthree==5){
                    var cfith
               }
               else if(countercolumnthree==6){
                    var csixth
               }
               else if(countercolumnthree>=7){
                    alert("column 3 is full")
               }
          }
     }
     else if(colorchecker == false){
          for(countercolumnthree=0;countercolumnthree<=6;countercolumnthree){
               if(countercolumnthree==1){
                    var cfirsts
               }
               else if(countercolumnthree==2){
                    var cseconds
               }
               else if(countercolumnthree==3){
                    var cthirds
               }
               else if(countercolumnthree==4){
                    var cfourths
               }
               else if(countercolumnthree==5){
                    var cfiths
               }
               else if(countercolumnthree==6){
                    var csixths
               }
               else if(countercolumnthree>=7){
                    alert("column 3 full ")
               }
          }
     }
}











function dbutton(){
     var dfirst = document.getElementById("d6").style.backgroundColor="cyan";
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
     var dsixths = document.getElementById("d1").style.backgroundColor="magenta";
     if(colorchecker == true){
          for(countercolumnfour=0;countercolumnfour<=6;countercolumnfour++){
               if(countercolumnfour==1){
                    var dfirst 
               }
               else if(countercolumnfour==2){
                    var dsecond
               }
               else if(countercolumnfour==3){
                    var dthird
               }
               else if(countercolumnfour==4){
                    var dfourth
               }
               else if(countercolumnfour==5){
                    var dfith
               }
               else if(countercolumnfour==6){
                    var dsixth
               }
               else if(countercolumnfour>=7){
                    alert("column 4 is full")
               }
          }
     }
     else if(colorchecker == false){
          for(countercolumnfour=0;countercolumnfour<=6;countercolumnfour){
               if(countercolumnfour==1){
                    var dfirsts
               }
               else if(countercolumnfour==2){
                    var dseconds
               }
               else if(countercolumnfour==3){
                    var dthirds
               }
               else if(countercolumnfour==4){
                    var dfourths
               }
               else if(countercolumnfour==5){
                    var dfiths
               }
               else if(countercolumnfour==6){
                    var dsixths
               }
               else if(countercolumnfour>=7){
                    //the following is just to check if row one has been filled
                    alert("column 4 full ")
               }
          }
     }
}
















function ebutton(){
     var efirst = document.getElementById("e6").style.backgroundColor="cyan";
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
     var esixth = document.getElementById("e1").style.backgroundColor="magenta";
     if(colorchecker == true){
          for(countercolumfive=0;countercolumfive<=6;countercolumfive++){
               if(countercolumfive==1){
                    var efirst 
               }
               else if(countercolumfive==2){
                    var esecond
               }
               else if(countercolumfive==3){
                    var ethird
               }
               else if(countercolumfive==4){
                    var efourth
               }
               else if(countercolumfive==5){
                    var efith
               }
               else if(countercolumfive==6){
                    var esixth
               }
               else if(countercolumfive>=7){
                    alert("column 5 is full")
               }
          }
     }
     else if(colorchecker == false){
          for(countercolumfive=0;countercolumfive<=6;countercolumfive){
               if(countercolumnone==1){
                    var efirsts
               }
               else if(countercolumfive==2){
                    var eseconds
               }
               else if(countercolumfive==3){
                    var ethirds
               }
               else if(countercolumfive==4){
                    var efourths
               }
               else if(countercolumfive==5){
                    var efiths
               }
               else if(countercolumfive==6){
                    var esixths
               }
               else if(countercolumntwo>=7){
                    //the following is just to check if row one has been filled
                    alert("column 5 full ")
               }
          }
     }
}













function fbutton(){
     var ffirst = document.getElementById("f6").style.backgroundColor="cyan";
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
     var fsixths = document.getElementById("f1").style.backgroundColor="magenta";
     if(colorchecker == true){
          for(countercolumnsix=0;countercolumnsix<=6;countercolumnsix++){
               if(countercolumnsix==1){
                    var ffirst 
               }
               else if(countercolumnsix==2){
                    var fsecond
               }
               else if(countercolumnsix==3){
                    var fthird
               }
               else if(countercolumnsix==4){
                    var ffourth
               }
               else if(countercolumnsix==5){
                    var ffith
               }
               else if(countercolumnsix==6){
                    var fsixth
               }
               else if(countercolumnsix>=7){
                    alert("column 6 is full")
               }
          }
     }
     else if(colorchecker == false){
          for(countercolumnsix=0;countercolumnsix<=6;countercolumnsix){
               if(countercolumnsix==1){
                    var ffirsts
               }
               else if(countercolumnsix==2){
                    var fseconds
               }
               else if(countercolumnsix==3){
                    var fthirds
               }
               else if(countercolumnsix==4){
                    var ffourths
               }
               else if(countercolumnsix==5){
                    var ffiths
               }
               else if(countercolumnsix==6){
                    var fsixths
               }
               else if(countercolumnsix>=7){
                    //the following is just to check if row one has been filled
                    alert("column 6 full ")
               }
          }
     }
}











function gbutton(){
     var gfirst = document.getElementById("g6").style.backgroundColor="cyan";
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
     var fsixth = document.getElementById("g1").style.backgroundColor="magenta";
     if(colorchecker == true){
          for(countercolumnseven=0;countercolumnseven<=6;countercolumnseven++){
               if(countercolumnseven==1){
                    var gfirst 
               }
               else if(countercolumnseven==2){
                    var gsecond
               }
               else if(countercolumnseven==3){
                    var gthird
               }
               else if(countercolumnseven==4){
                    var gfourth
               }
               else if(countercolumnseven==5){
                    var gfith
               }
               else if(countercolumnseven==6){
                    var gsixth
               }
               else if(countercolumnseven>=7){
                    alert("column 2 is full")
               }
          }
     }
     else if(colorchecker == false){
          for(countercolumnseven=0;countercolumnseven<=6;countercolumnseven){
               if(countercolumnseven==1){
                    var gfirsts
               }
               else if(countercolumnseven==2){
                    var gseconds
               }
               else if(countercolumnseven==3){
                    var gthirds
               }
               else if(countercolumnseven==4){
                    var gfourths
               }
               else if(countercolumnseven==5){
                    var gfiths
               }
               else if(countercolumnseven==6){
                    var gsixths
               }
               else if(countercolumnseven>=7){
                    //the following is just to check if row one has been filled
                    alert("column 2 full ")
               }
          }
     }
}



//create somthing to check for a winner (unsure how to do)(ask later)
//create a functio that checks wheter the it has benn clicked before (done)
//create somthing to check for ties (done)
//


//this is to check if all the tiles have been filled with no winner
if(countercolumnone>=6){tie+1};
if(countercolumntwo>=6){tie+1};
if(countercolumnthree>=6){tie+1};
if(countercolumnfour>=6){tie+1};
if(countercolumnfive>=6){tie+1};
if(countercolumnsix>=6){tie+1};
if(countercolumnseven>=6){tie+1};

if(tie==7){
     alert("I'm not sure how you managed this, but this match is a tie.")
}