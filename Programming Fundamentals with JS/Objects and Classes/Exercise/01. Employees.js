function employees(arr) {
    class Emplyees {
        constructor(emplyeeName, personalNumber) {
            this.emplyeeName = emplyeeName;
            this.personalNumber = personalNumber;
            this.print = () => {
                console.log(`Name: ${emplyeeName} -- Personal Number: ${personalNumber}`);
            }
        }
    }
    let personalData = [];
    for (let person of arr) {
        let personalNum = person.length;
        let newPerson = new Emplyees(person, personalNum);
        personalData.push(newPerson);
    }

    personalData.forEach(i => {
        i.print();
    });

}