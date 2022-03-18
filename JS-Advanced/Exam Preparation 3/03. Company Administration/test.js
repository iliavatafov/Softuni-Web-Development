const { expect } = require(`chai`);
const companyAdministration = require(`./companyAdministration`);

describe("Company Administration", function() {

    describe("hiringEmployee function", function() {
        it("throw error when position from input is different from Programmer", function() {
            expect(() => companyAdministration.hiringEmployee(`Orhan Murad`, `Singer`, 20)).to.throw(`We are not looking for workers for this position.`);
        });

        it("when yearExperiance is greater or equal then 3 return the correct text", function() {
            expect(companyAdministration.hiringEmployee(`George Ivanov`, `Programmer`, 3)).to.equal(`George Ivanov was successfully hired for the position Programmer.`)
        });


        it("when yearExperiance is lower then 3 return the correct text", function() {
            expect(companyAdministration.hiringEmployee(`George Petrov`, `Programmer`, 2)).to.equal(`George Petrov is not approved for this position.`);
        });
    });

    describe("calculateSalary ", function() {
        it("workers receive qual pay per hour", function() {
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
            expect(companyAdministration.calculateSalary(1)).to.equal(15);
            expect(companyAdministration.calculateSalary(3)).to.equal(45);
        });

        it("recive bonus if work more then 160 hours", function() {
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
            expect(companyAdministration.calculateSalary(162)).to.equal(3430);
        });

        it("throw error when input is different from number or negative numbre", function() {
            expect(() => companyAdministration.calculateSalary(`161`)).to.throw(`Invalid hours`);
            expect(() => companyAdministration.calculateSalary(-1)).to.throw(`Invalid hours`);
        });
    });

    describe("firedEmployee ", function() {

        it("throw errror when invalud input", function() {
            expect(() => companyAdministration.firedEmployee({}, 1)).to.throw(`Invalid input`);
            expect(() => companyAdministration.firedEmployee([`Petar`, `George`, `Ivan`], -1)).to.throw(`Invalid input`);
            expect(() => companyAdministration.firedEmployee([`Petar`, `George`, `Ivan`], 3)).to.throw(`Invalid input`);
            expect(() => companyAdministration.firedEmployee([`Petar`, `George`, `Ivan`], [1])).to.throw(`Invalid input`);
            expect(() => companyAdministration.firedEmployee([], 0)).to.throw(`Invalid input`);
            expect(() => companyAdministration.firedEmployee(`a`)).to.throw(`Invalid input`);
            expect(() => companyAdministration.firedEmployee(1, 1)).to.throw(`Invalid input`);
        });

        it("remove index recived as parameter and return result as string joined by comma and space", function() {
            expect(companyAdministration.firedEmployee([`Petar`, `George`, `Ivan`], 0)).to.equal(`George, Ivan`);
            expect(companyAdministration.firedEmployee([`Petar`, `George`, `Ivan`], 1)).to.equal(`Petar, Ivan`);
            expect(companyAdministration.firedEmployee([`Petar`, `George`, `Ivan`], 2)).to.equal(`Petar, George`);
        });

    });


});