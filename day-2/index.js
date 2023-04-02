//built in data type: number - string - boolean - void - null - undefiend
var userId;
var firstName;
var lastName;
var fullName;
var isActivated;
userId = 101;
firstName = "Taifur";
lastName = " islam";
isActivated = true;
fullName = firstName.concat(lastName);
console.log("userid ".concat(userId, " - fullName ").concat(fullName, " - isActivated ").concat(isActivated));
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
function display() {
    console.log("Hi I am display");
}
display();
