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
    protected _courseCount = 1
    readonly city : string = "São Paulo"
    constructor(
        public email : string,
        public name : string
        ) {
    
    }

    get getAppleEmail() : string {
        return `apple ${this.email}`
    }

    get courseCount() : number {
        return this.courseCount;
    }

    set courseCount(courseNum) {
        if (courseNum <=1) {
            throw new Error("O número do curso não pode ser maior que 1")
        }
        this._courseCount = courseNum;
    }

    private deleteToken() {
        console.log("Token deletado")
    }
}

class SubUser extends User {
    isFamily : boolean = true
    changeCourseCount() {
        this._courseCount = 4;
    }
}

const maria = new User("maria@email.com", "Maria")
