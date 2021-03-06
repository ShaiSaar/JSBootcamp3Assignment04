interface IUser {
    id: string
    name: string
    password: string
    age: number

    getId(): string
    getName(): string
    getPassword(): string
    getAge(): number
    setPassword(password: string): void
    setAge(age: number): void
    toString(): string
}

class User implements IUser {
    public id: string
    public name: string
    public password: string
    public age: number

    constructor(id: string, name: string, password: string, age: number) {
        this.id = id
        this.name = name
        this.password = password
        this.age = age
    }

    public getId(): string {
        return this.id
    }
    public getName(): string {
        return this.name
    }
    public getPassword(): string {
        return this.password
    }
    public getAge(): number {
        return this.age
    }
    public setPassword(password: string) {
        this.password = password
    }
    public setAge(age: number) {
        this.age = age
    }

    public toString(): string {
        return this.name
    }
}

export { User, IUser }
