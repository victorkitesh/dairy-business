function liters(shedA){

    document.writeln("Your production in Shed A "+ shedA +" liters per day");
    document.write("<hr>");
    
};

 function secondshed (shedB){
    document.writeln("Your production in Shed B "+ shedB +" liters per day");
    document.write("<hr>");
};
function thirdshed (shedC){
    document.write("Your production in Shed C "+ shedC +" liters per day");
    document.write("<hr>");
};
function forthshed (shedD){
    document.write("Your production in Shed D "+ shedD +" liters per day");
    document.write("<hr>");
};
function allshed (total){
    document.write("The total production is " + total +" litres per day")
    document.write("<hr>");
}
liters(510)
secondshed(308)
thirdshed(486)
forthshed(572)
allshed(510+308+486+572)


var header= document.getElementById('header')
header.style.color="blue"



function income(){
    document.write("<h1>income over time</h1>")
}
income();

function incomeOverTime(){
    
    var sellingprice =45;
    var litersweakly=1876*7;
   var totallirets=litersweakly;
     var income =totallirets*45 ;
     var weeksinayear =52.1;
     var yearlyincom =income*weeksinayear;
     
  
    document.write("your weekly income will be ksh "+income);
    document.write("<hr>");
    document.write("your yearly income will be ksh "+yearlyincom);
    document.write("<hr>");
}
incomeOverTime();

function recored (){
    document.write("<h1> Report of each month in a leap year.</h1>")
}
recored()