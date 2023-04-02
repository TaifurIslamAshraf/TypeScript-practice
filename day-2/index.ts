//built in data type: number - string - boolean - void - null - undefiend

let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActivated: boolean;

userId = 101;
firstName = "Taifur";
lastName = " islam";
isActivated = true;
fullName = firstName.concat(lastName);

console.log(
  `userid ${userId} - fullName ${fullName} - isActivated ${isActivated}`
);

console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

function display(): void {
  console.log("Hi I am display");
}
display();
