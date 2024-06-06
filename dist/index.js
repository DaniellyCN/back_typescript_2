"use strict";
/* class User {
    public email : string
    private name : string
    readonly city : string = "São Paulo"
    constructor(email : string, name : string) {
        this.email = email;
        this.name = name;
    }
} */
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "São Paulo";
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this.courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("O número do curso não pode ser maior que 1");
        }
        this._courseCount = courseNum;
    }
    deleteToken() {
        console.log("Token deletado");
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const maria = new User("maria@email.com", "Maria");
