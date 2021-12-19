class Perfume {
    constructor(
        private perfumeName: string,
        private companyName: string,
        private amount: number,
        private gender: string,
        private price: number,
    ) { }

    displayPerfume(): void {
        let emptystr = ''
        emptystr += `
        <ul>
        <li><u>Name:</u> ${this.perfumeName}</li>
        <li><u>Company:</u> ${this.companyName}</li>
        <li><u>Amount:</u> ${this.amount} ML</li>
        <li><u>Gender:</u> ${this.gender}</li>
        <li><u>Price:</u> ${this.price} NIS</li>
        </ul>
        `
        document.write(emptystr)
    }

    displayPerfumePriceAfterVat(): any {
        let perfumeAfterVat = this.price * 1.17
        return perfumeAfterVat
    }
}