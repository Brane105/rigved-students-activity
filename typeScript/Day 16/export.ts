export class Employee {
    id: number;
    firstName: string;
    lastName: string;

    constructor(id: number, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return this.id+' '+ this.firstName + ' ' + this.lastName;
    }
}


