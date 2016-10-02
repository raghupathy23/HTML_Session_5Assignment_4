// Created 5 different employee objects 
var employee = [ 
	{
		name: "Steve", age:45, salary: 2000000, 	
		address: {
			city: "Seattle",
			state: "Washington",
			pincode: 97150
		}
	}, 
	{
		name: "Johnson", age:40, salary: 1500000, 	
		address: {
			city: "Chicago",
			state: "Illinois",
			pincode: 94199
		}
	},	
	{
		name: "Clarke", age:35, salary: 1200000, 	
		address: {
			city: "New York",
			state: "New York",
			pincode: 10005
		}
	},	
	{
		name: "Findale", age:30, salary: 1000000, 	
		address: {
			city: "Los Angeles",
			state: "California",
			pincode: 90210
		}
	},	
	{
		name: "Stephen", age:25, salary: 900000, 	
		address: {
			city: "Phoenix",
			state: "Arizona",
			pincode: 85001
		}
	},
	];
// To display array object property of Fourth Employee
console.log(employee[3]);
// To display values of Fourth Employee in an array using Employee object
console.log("Name : "+employee[3].name);
console.log("Age : "+employee[3].age);
console.log("Salary : "+employee[3].salary);
console.log("Address : "+employee[3].address.city);
console.log("State : "+employee[3].address.state);
console.log("Address : "+employee[3].address.pincode);
