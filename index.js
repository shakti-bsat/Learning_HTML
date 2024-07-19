//console.log("Hello World");
window.alert(`Intro to Javascript`);
let nameStudent="P S Shaktivel";            
nameStudent ="P.S.Shaktivel";
console.log(nameStudent);       //camel notation where first letter is small and the second word is in caps
const name="Hi";                // here the const keeps the variable constant
//Variable rules                                //datatypes
//case sensitive                                //String
//no space or hyphen                            //boolean
                                                //undefined
 //hi                                             //null
                                                //number 
                                               
let nameStudents = "P S Shaktivel";            //string literal
let age = 18;                                  //number literal
let schooling = false;                        //Boolean literal
let firstname = "Shaktivel";                     //undefined literal
let selectedColor = null;                      //null--->> this datatype is used to add value to variable if the user enter the input
let rollno = 98;

console.log(nameStudent +"age" + age +"is it approved",firstname ,"first name",firstname,selectedColor)
//so object can be defined such that all the attributes of a object can be added
let student = {
    name:"P S Shaktivel",                                       // so if there is a abject declared as a variable using let then you don't need to specify let for all the variable in the object
    age : 18,
    rollno : 98,
    school : "false"
                                                //if any zero before it should be a decimal number
};

console.log(student);
console.log(typeof(student));
//to access the values or data we use the dot operator or pointer
//so there is referance type of datatypes
//this reference type consist of objects, array, 

student.name ="Prabhakar Sangeetha Shaktivel";
let selection = `rollno`;
selection[selection] = 2023412524321146;

let selectedStudents = ["P.S.Shaktivel","Diveesha"];                      //here the []--> is the array literals
selectedStudents[2]="Dev";
console.log(selectedStudents[1]);
console.log(selectedStudents[0]);
console.log(selectedStudents);


//document.getElementById("myH1").textContent =`Hello`;
//document.getElementById("myP",textContent) =`I love adventure`;

let hi =`shakti`;
console.log(`my name is ${hi}`);
let g =`shaktivel.prabhakar@gmail.com`;
console.log(`Please contact me for more information using ${g}`);
document.getElementById("p1").textContent =`my name is ${nameStudent}`;
document.getElementById("p2").textContent = `${nameStudent}'s age is ${age} with roll no ${rollno}`;


let students=60;
console.log(`${students}`);
document.getElementById("demo").innerHTML = `Hello JavaScript`

document.getElementById("name").textContent = ``

let username;
username = window.prompt("What is ur username");

document.getElementById("Enter");onclick = function()
{
    username=document.getElementById(`connect`).value;
    document.getElementById(`hey`).textContent=`Hey! ${connect}`;
}

//obtain value from user 
let a = `Enter the value`;
console.log(a);

let shakti=["hi",123,"start"];
console.log(shakti);

let sha=prompt("Enter ur name")
con= console.log(sha);
document.getElementById("hey").textContent= `Welcome ${sha}`;

//check bolean values
let str2=false;
let str1=true;
let can = str1 && str2;
console.log(can);

//arrays 
let arr=[[1,"Hey"],[2,"Sure"]];
arr.shift();
console.log(arr);

let arra=[[1,"Hey"],[2,"Sure"]];
arr.unshift("Wakanda");
console.log(arra);

//functions with input using prompt()
function tesval(con,cons)
{
    if(typeof(con)==typeof(cons))
    {
        return "Equal";
    }
    return "Not Equal";
}

con=prompt("Enter the number to check");
cons=prompt("Enter the second num");
console.log(tesval(con,cons));
console.log(typeof(con));


function checks(prop)
{
    if(student.hasOwnProperty(prop))
    {
        return student[prop];
    }
    else
    {
        return "not found";
    }
}

console.log(checks("schooling"));


//multiple array or nested array
let organisms =[
    {
        plants:
        [
            "forest plants",
            "plain plants",
            "sea plants"
        ]
    },
    {
        animals:
        [
            "Wild animals",
            "Domestic animals"
        ]
    }
]

console.log(organisms);

let y=12;
let z=1;