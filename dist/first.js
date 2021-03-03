"use strict";
let Money = 50;
Money = 10;
Money = 0;
let myAge;
myAge = 23;
let myName;
myName = 'Mahfuj';
const isHappy = true;
let isAngry;
isAngry = false;
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
const user = fullName("Mahfuj", "Hasan");
console.log(user);
function doubleItAndConsole(num) {
    const result = num * 2;
    console.log(result);
}
const output = doubleItAndConsole(5);
console.log(output);
const multiply = (x, y) => x * y;
console.log(multiply(6, 7));
let multiply2;
multiply2 = (x, y) => x * y;
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
const friends = ["Md.", "Mahfuj", "Hasan"];
let megaName = "";
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log("largest name", megaName);
// object
const friendInfo = {
    fName: "Rahim",
    fAge: 24
};
friendInfo.fAge = 25;
let player = {
    pName: "Moin Ali",
    pSalary: 12500
};
const Moin = {
    playerName: "Moin Ali",
    playerAge: 33,
    playerSalary: 12500,
    isPlaying: true
};
const Adil = {
    playerName: "Adil Rashid",
    playerAge: 33,
    playerSalary: 15500
};
// function getBonus(employee: {salary: Player}){
function getBonus(employee) {
    return employee.salary * 0.1;
}
const newEmployee = { salary: 7000 };
getBonus(newEmployee);
class Person {
    constructor(name, father) {
        this.name = name;
        this._partner = name;
        this.fatherName = name;
    }
    getName() {
        return this.name + "" + this._partner;
    }
}
const sam = new Person('Samuel', 'David');
console.log('name', sam.name, sam.fatherName);
const samName = sam.getName();
sam.name = "Ben";
