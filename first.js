var Money = 50;
Money = 10;
Money = 0;
var myAge;
myAge = 23;
var myName;
myName = 'Mahfuj';
var isHappy = true;
var isAngry;
isAngry = false;
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
var user = fullName("Mahfuj", "Hasan");
console.log(user);
function doubleItAndConsole(num) {
    var result = num * 2;
    console.log(result);
}
var output = doubleItAndConsole(5);
console.log(output);
var multiply = function (x, y) { return x * y; };
console.log(multiply(6, 7));
var multiply2;
multiply2 = function (x, y) { return x * y; };
var numbers = [1, 2, 3, 4, 5];
numbers.push(6);
var friends = ["Md.", "Mahfuj", "Hasan"];
var megaName = "";
for (var i = 0; i < friends.length; i++) {
    var friend = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log("largest name", megaName);
// object
var friendInfo = {
    fName: "Rahim",
    fAge: 24
};
friendInfo.fAge = 25;
var player = {
    pName: "Moin Ali",
    pSalary: 12500
};
var Moin = {
    playerName: "Moin Ali",
    playerAge: 33,
    playerSalary: 12500,
    isPlaying: true
};
var Adil = {
    playerName: "Adil Rashid",
    playerAge: 33,
    playerSalary: 15500
};
// function getBonus(employee: {salary: Player}){
function getBonus(employee) {
    return employee.salary * 0.1;
}
var newEmployee = { salary: 7000 };
getBonus(newEmployee);
var Person = /** @class */ (function () {
    function Person(name, father) {
        this.name = name;
        this._partner = name;
        this.fatherName = name;
    }
    Person.prototype.getName = function () {
        return this.name + "" + this._partner;
    };
    return Person;
}());
var sam = new Person('Samuel', 'David');
console.log('name', sam.name, sam.fatherName);
var samName = sam.getName();
sam.name = "Ben";
