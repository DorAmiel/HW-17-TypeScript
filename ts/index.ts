//----------------------EX1-----------------------//

let firstBook = new Books("Wake Up","David Shalom", "Co.Brothers", 79.9)
firstBook.displayBookInforamtion()
console.log(`Price after VAT: ${firstBook.calcPriceAfterVat()}`)

let secondBook = new Books("Motivation","Lior Raz", "D.Family", 130.9)
secondBook.displayBookInforamtion()
console.log(`Price after VAT: ${secondBook.calcPriceAfterVat()}`)

let thirdBook = new Books("Fly Away","Avi Levi", "Ashter", 29.9)
thirdBook.displayBookInforamtion()
console.log(`Price after VAT: ${thirdBook.calcPriceAfterVat()}`)

//----------------------EX1-----------------------//


//----------------------EX2-----------------------//

let firstPerfume= new Perfume("Sauvage","Dior",750, "Male", 299)
firstPerfume.displayPerfume()
document.write(`<ul><li><u>Price After VAT:</u> ${firstPerfume.displayPerfumePriceAfterVat()}</li></ul><br><br>`)

let secondPerfume= new Perfume("COCO","Chanel",750, "Female", 511)
secondPerfume.displayPerfume()
document.write(`<ul><li><u>Price After VAT:</u> ${secondPerfume.displayPerfumePriceAfterVat()}</li></ul><br><br>`)

let firstEmployee = new Employee("Dan", "Haim", "Ha-cohen 7", 6000)
firstEmployee.displayEmployee()
document.write(`<ul><li><u>TAX to be paid:</u> ${firstEmployee.displaySalaryAfterTax()} </li></ul><br><br>`)

let secondEmployee = new Employee("Shimon", "Abu", "Gad 7", 10433)
secondEmployee.displayEmployee()
document.write(`<ul><li><u>TAX to be paid:</u> ${secondEmployee.displaySalaryAfterTax()} </li></ul><br><br>`)