class Employee {
    constructor(
        private firstName: string,
        private lastName: string,
        private adress: string,
        private salary: number
    ) { }

    displayEmployee(): any {
        let emptystr = ''
        emptystr += `
        <ul>
        <li><u>First Name</u>: ${this.firstName} </li>
        <li><u>Last Name</u>: ${this.lastName} </li>
        <li><u>Adress</u>: ${this.adress} </li>
        <li><u>Salary</u>: ${this.salary} NIS</li>
        </ul>
        `
        document.write(emptystr)
    }

    displaySalaryAfterTax(): any {
        let salaryAfterTax = this.salary * 0.10
        return salaryAfterTax
    }
}