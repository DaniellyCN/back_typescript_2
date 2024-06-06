// functions
function add (a : number, b : number) : number{
    return a + b;
}
let numbersAdded = (a : number, b : number) => {
    return a + b
};
let hero : string;
function getHero() {
    return "thor";
}

hero = getHero();
let heros = ["spiderman", "volwerine", "superman"]
heros.map((hero : string)  => {
    return `The hero is ${hero}`
})

function consoleError(erromsg :  string) {
    heros.map((hero : string)  => {
        return `The hero is ${hero}`
    })
}

// objects

function createCourse() :{name : string, price : number} {
    return {name : "react", price: 70};
}

type User = {
    readonly id : string,
    name :  string,
    email : string,
    isActive : boolean
}

function createUser(user : User) {}

type cardNumber = {
    cardNumber : string
}

type cardDate = {
    cardDate : string
}

type cardDetails = cardNumber & cardDate & {
    cvv : number
}

const superHeros : string[] = []
superHeros.push("superman");

const MLModels : number[][] = [
    [255, 2],
    [5, 9, 0]
];

type Admin = {
    username : string,
    id : number
}

let maria : User | Admin = {
    username : "maria",
    id: 123
}

const user2 : (string | number)[] = ["1", 1, "ola"] ;

// enum

//interfaces
interface User3 {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId ?: string,
    //startTrail : () => string
    startTrail (): string
}

const dani : User3 = {
    dbId: 20,
    email: "dani@gmail.com",
    userId: 123,
    startTrail : () => {
        return "trail started"
    }
}

interface UserMaster {
    githubToken : string
}

interface AdminMaster extends UserMaster {
    role: "admin" | "leader"
}