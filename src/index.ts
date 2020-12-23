// const name = "Gain",
//     age = 25,
//     gender = "female";

const sayHi = (name:string, age:number, gender:string): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

// sayHi(name, age, gender);
console.log(sayHi("Gain", 25, "female"));

export {};