//* Objects

/* const user = {
	name: 'unknown',
	age: 0,

	setName(newName) {
		this.name = newName;
	},
	setAge(newAge) {
		this.age = newAge;
	},

	aboutUser(city, country) {
		setTimeout(() => {
			console.log(
				`Hi, I am ${this.name} and I'm ${this.age} years old. and I live in ${city}, ${country}.`
			);
		}, 2000);
	},
};

user.setName('Ishmael');
user.setAge(27);

//* call apply and bind

function greet(city, country) {
	console.log(
		`Hi, I am ${this.name} and I'm ${this.age} years old and I live in ${city}, ${country}.`
	);
}

greet.call(user, 'Tabriz', 'Iran');
greet.apply(user, ['Tabriz', 'Iran']);
greet.bind(user)('Tabriz', 'Iran');

user.aboutUser('Tabriz', 'Iran'); */

//* 1402/12/06 Don't Give Up

// const fruits = [
// 	{ name: 'apple', price: 10, color: 'red' },
// 	{ name: 'banana', price: 15, color: 'yellow' },
// 	{ name: 'orange', price: 12, color: 'orange' },
// 	{ name: 'grape', price: 8, color: 'purple' },
// 	{ name: 'mango', price: 20, color: 'yellow' },
// ];

// // const result = fruits.filter(item => item.name == 'banana');
// // const result = fruits.sort((a, b) => a.price - b.price);
// // const result = fruits.reduce((total, item) => total + item.price, 0);

// // sort by name
// const result = fruits.sort((a, b) => {
// 	if (a.name < b.name) {
// 		return -1;
// 	} else if (a.name > b.name) {
// 		return 1;
// 	} else {
// 		return 0;
// 	}
// });

// console.log(result);



