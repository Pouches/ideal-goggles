var colorchecker = true;


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

if(colorchecker==true){
     document.getElementById("turn").nodeValue=("Cyan's turn");
}
else if(colorchecker==false){
     document.getElementById("turn").innerHTML=("Magenta's turn");
}

var start = 1
function abutton(){
     var counter = 0
     //the s at the end of a variable means it is magenta while the first letter indicates the row with  A being tghe first row and B being the second ETC.
//A
     var afirst = document.getElementById("a6").style.backgroundColor="cyan";
     var asecond = document.getElementById("a5").style.backgroundColor="cyan";
     var athird = document.getElementById("a4").style.backgroundColor="cyan";
     var afourth = document.getElementById("a3").style.backgroundColor="cyan";
     var afith = document.getElementById("a2").style.backgroundColor="cyan";
     var asixth = document.getElementById("a1").style.backgroundColor="cyan";

     var afirsts = document.getElementById("a6").style.backgroundColor="magenta";
     var aseconds = document.getElementById("a5").style.backgroundColor="magenta";
     var athirds = document.getElementById("a4").style.backgroundColor="magenta";
     var afourths = document.getElementById("a3").style.backgroundColor="magenta";
     var afiths = document.getElementById("a2").style.backgroundColor="magenta";
     var asixths = document.getElementById("a1").style.backgroundColor="magenta";
//B
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
     if(colorchecker == true){
          for(counter=0;counter<=6;counter++){
               if(counter==1){
                    var afirst //= document.getElementById("a1").style.backgroundColor="blue";
               }
               else if(counter==2){
                    var asecond
               }
               else if(counter==3){
                    var athird
               }
          }
     }
     else if(colorchecker == false){}
}
/*
bbutton(){}
cbutton(){}
dbutton(){}
ebutton(){}
fbutton(){}
gbutton(){}
*/

//create a functio that checks wheter the it has benn clicked before (done)