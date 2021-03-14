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
    document.write("<h1> Report of each month in a leap year.</h1>");
}
recored();
 
function recodinaleapyear (){
    var incomedaily =590940/7;
    var daily =incomedaily;
    var monthwith31days=daily*31;
    var monthwith30days =daily*30;
    var leapmonth =daily*29;

    var year ={
        name:2021,
       month:[
            {
           name:"January",
           amount:monthwith31days,
            },
            {
                name:"Febuary",
                amount:leapmonth,
                 },
                    {
                 name:"March",
                 amount:monthwith31days,
                  },
                  {
                 name:"April",
                amount:monthwith30days,
                     },
                     {
                 name:"May",
                amount:monthwith31days,
                         },
                     {
                name:"June",
                amount:monthwith30days,
                     },
                   {
                  name:"July",
                amount:monthwith31days,
                    },
                  {
                 name:"August",
                 amount:monthwith31days,
                },   
                 {
                name:"September",
                 amount:monthwith30days,
                      },
                 {
                 name:"October",
                amount:monthwith31days,
                      }, 
                 {
                  name:"november",
                 amount:monthwith30days,
                       }, 
                       {
                name:"December",
                  amount:monthwith31days,
                         },                       
                
       ]
     
     }
     document.write("your income for "+ year.month[0].name + " is " +year.month[0].amount) 
     document.write("<hr>");
     document.write("your income for "+ year.month[1].name + " is " +year.month[1].amount) 
     document.write("<hr>");
     document.write("your income for "+ year.month[2].name + " is " +year.month[2].amount) 
     document.write("<hr>");
     document.write("your income for "+ year.month[3].name + " is " +year.month[3].amount) 
     document.write("<hr>");
     document.write("your income for "+ year.month[4].name + " is " +year.month[4].amount) 
     document.write("<hr>");
     document.write("your income for "+ year.month[5].name + " is " +year.month[5].amount) 
     document.write("<hr>");
     document.write("your income for "+ year.month[6].name + " is " +year.month[6].amount) 
     document.write("<hr>");
     document.write("your income for "+ year.month[7].name + " is " +year.month[7].amount) 
     document.write("<hr>");
     document.write("your income for "+ year.month[8].name + " is " +year.month[8].amount) 
     document.write("<hr>");
     document.write("your income for "+ year.month[9].name + " is " +year.month[9].amount) 
     document.write("<hr>");
     document.write("your income for "+ year.month[10].name + " is " +year.month[10].amount) 
     document.write("<hr>");
     document.write("your income for "+ year.month[11].name + " is " +year.month[11].amount) 
     document.write("<hr>");
   
}


recodinaleapyear()