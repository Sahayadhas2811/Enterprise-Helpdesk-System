const { object } = require("joi");

const user = {
    name: "John",
    age: 30,
    city: "Chennai"
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const employee = {
    name: "Sam",
    department: "IT",
    salary: 60000
};

const keys = Object.keys(employee); //[name, dep, sal]

const values = keys.map(val => employee[val]);
console.log(values);

const scores = {
    math: 90,
    science: 80,
    english: 95,
    history: 85
};

const valSet = Object.values(scores).reduce((scc, mark) => {
    return scc + mark
},0)
console.log(valSet);

const newSet = Object.values(scores).filter(val => val>= 90);
console.log(newSet);

const employee1 = {
    name: "John",
    department: "IT",
    salary: 50000
};

const valS = Object.entries(employee1).map(val => `${val[0]} : ${val[1]}`);
console.log(valS);

const scores1 = {
    math: 90,
    science: 80,
    english: 95,
    history: 70
};

const result = Object.entries(scores1).filter(val => val[1] >= 90);
console.log(result);

const prices = {
    laptop: 50000,
    mouse: 1000,
    keyboard: 2000
};

const data = Object.entries(prices).map((val) => [val[0], val[1] + ((10 / 100) * val[1])])
console.log(Object.fromEntries(data));

const employees = {
    John: {
        department: "IT",
        salary: 50000
    },
    Sam: {
        department: "HR",
        salary: 60000
    },
    Alex: {
        department: "IT",
        salary: 80000
    }
};

const key = 'name';
const va = Object.entries(employees).map((val) => [['name' , val[0]], Object.entries(val[1])] );
console.log(va)
console.log(Object.fromEntries(va))
