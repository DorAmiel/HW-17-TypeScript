class Books {
    constructor(
        private bookName: string,
        private author: string,
        private bookPublishing: string,
        private price: number
    ) { }

    displayBookInforamtion(): void {
        console.log(this)
    }

    calcPriceAfterVat(): any {
        let priceAfter = this.price * 1.17
        return priceAfter
    }
}

