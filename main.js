
// 1. შექმენით ცვლადები და მიანიჭეთ მარტივი ტიპები (Primitive types).
// გამოიყენეთ ყველა მარტივი ტიპი რაც ვისწავლეთ.

let name = "Smart"  
let number = 12		
let isHappy = true	
let x   
let y = null  

console.log(name + " is " + typeof name)       //string
console.log(number + " is " + typeof number)   // number
console.log(isHappy + " is " + typeof isHappy) // boolean
console.log(typeof x)   // undefined
console.log(typeof y)   // null



 // 2. შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის ობიექტი, რომელსაც გააჩნია name  და age property.

let users = [
	{
		name: "Karol",
		age: 50
	},
	{
		name: "Maria",
		age: 26
	},
	{
		name: "John",
		age: 60
	},
	{
		name: "Agatha",
		age: 36
	},
	{
		name: "Richard",
		age: 45
	}

]

console.log(users)



// 3. შექმენით ობიექტი რომელსაც გააჩნია შემდეგი ველები (properties):
// firstName - სტრინგ ტიპის მნიშვნელობა
// lastName - სტრინგ ტიპის მნიშვნელობა
// nicknames - სტრინგების მასივი
// age - რიცხვითი მნიშვნელობა
// monthlyIncome - რიცხვითი მნიშვნელობა
// isAdult - *მეთოდი, რომელიც აბრუნებს true -ს თუ age მეტია ან ტოლი 18 ზე.
// getAnnualIncome - *მეთოდი, რომელიც აბრუნებს წლიურ შემოსავალს

let userAccount = {
	firstName: "Agatha",
	lastName: "Cristie",
	nicknames: ["Duchess of Death", "Mistress of Mystery", "Queen of Crime"],
	age: 85,
	monthlyIncome: 1000000,

	isAdult: function(){
		if (this.age >= 18){
			return this.isAdult = true
		}
	},

	getAnnualIncome: function() {
		return this.getAnnualIncome = this.monthlyIncome * 12
	}
}

console.log(userAccount)