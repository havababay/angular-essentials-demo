import { PhoneNumber } from "./phone-number"

export class Person {
    public phones : PhoneNumber[] = [];

    constructor(public id: number,
        public firstName: string,
        public lastName: string,
        public email : string,
        public age?: number) {
    }

    fullName():string{
        return this.firstName + " " + this.lastName
    } 
}