class Books {
    constructor(bookName, author, bookPublishing, price) {
        this.bookName = bookName;
        this.author = author;
        this.bookPublishing = bookPublishing;
        this.price = price;
    }
    displayBookInforamtion() {
        console.log(this);
    }
    calcPriceAfterVat() {
        let priceAfter = this.price * 1.17;
        return priceAfter;
    }
}
