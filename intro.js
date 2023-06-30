 alert('Welcome to JMK')

function Trigger () {
    alert('SUCCESS');
}

            // variables
// A variable is a container. Variables are memory locations which hold values
// let a=5; integer datatype
// let b="Success"; string datatype 
// var c=false; boolean datatype 

let a=5;
var b=3;

let result= a+b;
alert('The result of 5+3='+ result)

         //conditional statement
     //JavaScript datatype

let c=7;
let d=20;

if (c > d) {
   document.write ('c is higher than d');
}

else {
    document.write( 'd is lesser than c <br/> <br/>')
}


// if (c > d) {
 // console.log ('c is higher than d'); }


//else {
// console.log( 'd is lesser than c') }


        //Ternary operation
var e=5
var f=50
console.log( e > f ?  "e is bigger" : 'e is lesser')



           //switch statement

// switch statement evaluates an expression, matching the expression value to a case clause and execute statement associated with that case.


let city="Lagos";

switch (city) {
    case 'Abuja':
    console.log("Abuja is the capital of Nigeria");
        break;
       
        case 'Lagos':
    console.log("Lagos is the state of excellence");
    break;
    
    case 'Ibadan':
    console.log("Ibadan is the largest city in west Africa");
   
 default:("selected is not available.");
        
  }


        //JavaScript operators              

   //Arithmetic operators 
//includes, +,-,*,/

   //Equality operators
//includes, ===(equals to), !==(not equal)
//example;
let g=10
let h=10

if (g===h){
console.log 
 ("The same numbers") }

else{
("They are different")    }

      //Unary operators
//includes, ++num, num++, +
//example
let year=1967
console.log(++year)

     //Relational operators
 //includes, <,>,=>,<=
 
//Logical operators
//includes, &&(and),||(or)


//Conditional operators
//includes, if, else, if...else, ? switch

//Assignment operators
//includes, *=, +=, -=, =



//working on all operators
//write a program to find the maximum of three numbers

let num1=31,num2=45, num3=70;

if (num1>num2 && num1>num3 ) {
console.log('Num 1 is the highest');
    }
 else if (num2>num3 && num2>num1){
    console.log('Num 2 is the highest');
   }
 else (num3>num2 && num3>num1) 
 {
console.log('Num 3 is the highest');
}



        //Loop
//A loop is a sequence of instructions that is continually repeated until a certain condition is met.

       //Types of loop

    //while loop

let count=1;
while (count <=10) {
    console.log(count,'.learning while loop <br />');
 //  count=count+ 1;
    //count++;
    count +=2 ;
}


//do while loop
let num=1;

do {
    document.write(num, ".Do while loop <br/>");
    num++
} while (num<10)
