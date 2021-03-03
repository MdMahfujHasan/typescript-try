let Money = 50;
Money = 10;
Money = 0;

let myAge: number;
myAge = 23;

let myName: string;
myName = 'Mahfuj'

const isHappy: boolean = true;

let isAngry: boolean;
isAngry = false;

function add (num1: number , num2: number){
    return num1 + num2;
}
add (2,3);

function fullName (firstName: string, lastName: string): string{
    return firstName + " " + lastName;
}
const user: string = fullName("Mahfuj", "Hasan");
console.log(user);

function doubleItAndConsole(num: number): void{
    const result = num * 2;
    console.log(result);
}
const output = doubleItAndConsole(5);
console.log(output);

const multiply = (x: number, y: number): number => x * y;
console.log(multiply(6, 7));

let multiply2: (x: number, y: number) => number;
multiply2 = (x, y) => x * y;

const numbers: number[] = [1, 2, 3, 4, 5];
numbers.push(6);

const friends: string[] = ["Md.", "Mahfuj", "Hasan"];
let megaName: string = "";
for (let i = 0; i < friends.length; i++) {
    const friend: string = friends[i];
    if (friend.length > megaName.length){
        megaName = friend;
    }
}
console.log("largest name", megaName);

// object
const friendInfo = {
    fName: "Rahim",
    fAge: 24
}
friendInfo.fAge = 25;

let player: {
    pName: string,
    pSalary: number
} = {
    pName: "Moin Ali",
    pSalary: 12500 
}