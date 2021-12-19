class Employee {
    constructor(firstName, lastName, adress, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.adress = adress;
        this.salary = salary;
    }
    displayEmployee() {
        let emptystr = '';
        emptystr += `
        <ul>
        <li><u>First Name</u>: ${this.firstName} </li>
        <li><u>Last Name</u>: ${this.lastName} </li>
        <li><u>Adress</u>: ${this.adress} </li>
        <li><u>Salary</u>: ${this.salary} NIS</li>
        </ul>
        `;
        document.write(emptystr);
    }
    displaySalaryAfterTax() {
        let salaryAfterTax = this.salary * 0.10;
        return salaryAfterTax;
    }
}
