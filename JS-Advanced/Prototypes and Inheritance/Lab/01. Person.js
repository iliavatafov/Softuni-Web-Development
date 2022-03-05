class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(v) {
        let [firstName, lastName] = v.split(` `);
        if (lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
}