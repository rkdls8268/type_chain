class Human {
    public name: string;
    private age: number;
    public gender: string;
    constructor(name: string, age: number, gender?: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    // get 키워드 사용해서 getter 함수 역할
    get getAge() {
        return this.age;
    }
    // set 키워드 사용해서 setter 함수 역할
    set setAge(age2) {
        this.age = age2;
    }
}

const lala = new Human("Lala", 25, "female");

const person = {
    name: "Gain",
    gender: "female",
    age: 25
};

const sayHi = (person: Human): string => {
    console.log(`Current age: ${person.getAge}`);
    // setAge는 함수가 아니므로 setAge()와 같이 호출하면 안됨.
    person.setAge = 20;

    return `Hello ${person.name}, you are ${person.getAge}, you are a ${person.gender}`;
};

console.log(sayHi(lala));

export {};