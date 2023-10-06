//Let password = "marjorie"
let FirstName = "Marjorie";
let Last_name = "Altura";
let FN = FirstName + ' ' + Last_name;
console.log (FN);
console.log("BSCS-2A");
console.log("CS201_LAB3");


let password = prompt ("Enter your Password");
let I =(password.length);
if (I == 8){
    console.log ("Welcome");
}else if (I <= 8 && input === 1 ){
    console.log ("Password is too Short");
}else if (I >= 8){
    console.log("Password should be 8 in Characters");
}else if (I == 0){
    console.log("Please provide a Password");
}