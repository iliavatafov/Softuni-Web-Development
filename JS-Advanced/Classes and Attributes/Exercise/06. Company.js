class Company {

    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {

        let parameters = [name, salary, position, department];

        parameters.map(x => {
            if (x === `` || x === `undefinex` || x === null) {
                throw new Error(`Invalid input!`)
            }
        });

        if (salary < 0) {
            throw new Error(`Invalid input!`);
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }
        this.departments[department].push({
            name,
            salary,
            position,
        });
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartment = ``;
        let bestAverageSalary = 0;

        for (let [key, value] of Object.entries(this.departments)) {

            let currentAverageSalary = 0
            let totalEmployees = value.length;

            value.map(x => currentAverageSalary += x.salary);
            currentAverageSalary /= totalEmployees;

            bestAverageSalary = currentAverageSalary > bestAverageSalary ? currentAverageSalary : bestAverageSalary;
            bestDepartment = bestAverageSalary === currentAverageSalary ? key : bestDepartment;
        }

        const listOfSortedEmployees = this.departments[bestDepartment]
            .sort((a, b) => a.name.localeCompare(b.name))
            .sort((a, b) => b.salary - a.salary);

        let result = `Best Department is: ${bestDepartment}\n` + `Average salary: ${bestAverageSalary.toFixed(2)}\n`;
        listOfSortedEmployees.map(x => result += `${x.name} ${x.salary} ${x.position}\n`);

        return result.substring(0, result.length - 1);
    }
}