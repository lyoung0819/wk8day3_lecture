function addNums(num1:number, num2:number):number {
    return num1+num2
}

let myNumber: number = 12
let yourNumber:number = 20

let ourNumber = addNums(myNumber,yourNumber);

console.log('Together our numbers make ', ourNumber)

type Student = {
    firstName: string,
    lastName: string,
    finalGrade?: number
}

let student1: Student = {
    firstName: 'Lexie',
    lastName: 'Young'
};

student1.finalGrade = 10;
console.log(student1)

console.log(student1.firstName.toUpperCase())