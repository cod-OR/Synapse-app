


import { findElement, tapElement, setValueOnElement } from "../utils/elementActions"

export default class FormView {
    selectors = {
        stockNameText: "~stockNameText",
        stockPriceText: "~stockPriceText",
        stockChangeValueText: "~stockChangeValueText",
        stockTickerSymbolSearchInput: "~stockTickerSymbolSearchInput",
        stockTickerSymbolSearchBtn: "~stockTickerSymbolSearchBtn",
        firstInputButton:"~text_input_first"
    }
    constructor(driver) {
        this.driver = driver;
    }
    async getStockName() {
        const stockName = await findElement(this.driver, this.selectors.firstInputButton);
        return stockName.getText();
    }
    async getStockPrice() {
        const stockPrice = await findElement(this.driver, this.selectors.stockPriceText);
        return stockPrice.getText();
    }
    async getChangeValue() {
        const changeValue = await findElement(this.driver, this.selectors.stockChangeValueText);
        return changeValue.getText();
    }
    async setStockTickerSymbol(stockTickerSymbolString) {
        await setValueOnElement(this.driver, this.selectors.firstInputButton, stockTickerSymbolString);
    }
    async tapInput() {
        await tapInput(this.driver, this.selectors.firstInputButton);
    }
}
