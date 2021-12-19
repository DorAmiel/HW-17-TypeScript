class Perfume {
    constructor(perfumeName, companyName, amount, gender, price) {
        this.perfumeName = perfumeName;
        this.companyName = companyName;
        this.amount = amount;
        this.gender = gender;
        this.price = price;
    }
    displayPerfume() {
        let emptystr = '';
        emptystr += `
        <ul>
        <li><u>Name:</u> ${this.perfumeName}</li>
        <li><u>Company:</u> ${this.companyName}</li>
        <li><u>Amount:</u> ${this.amount} ML</li>
        <li><u>Gender:</u> ${this.gender}</li>
        <li><u>Price:</u> ${this.price} NIS</li>
        </ul>
        `;
        document.write(emptystr);
    }
    displayPerfumePriceAfterVat() {
        let perfumeAfterVat = this.price * 1.17;
        return perfumeAfterVat;
    }
}
