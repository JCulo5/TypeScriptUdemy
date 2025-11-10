"use strict";
//data:
//initial amount
//annual contribution
//expected return
//duration
Object.defineProperty(exports, "__esModule", { value: true });
function calculateInvestment(data) {
    const { initialAmount, annualContribution, expectedReturn, duration } = data;
    if (initialAmount <= 0 || annualContribution < 0 || expectedReturn <= 0 || duration <= 0) {
        return "Invalid input data. Please ensure all values are positive numbers.";
    }
    let total = initialAmount;
    let totalContribution = 0;
    let totalInterestEarned = 0;
    const annualResults = [];
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned += total - totalContribution - initialAmount;
        totalContribution += annualContribution;
        total += annualContribution;
        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContribution,
        });
    }
    return annualResults;
}
function printResults(results) {
    //print output
    if (typeof results === "string") {
        console.log(results);
        return;
    }
    for (const result of results) {
        console.log(`${result.year}: Total Amount = ${result.totalAmount.toFixed(0)}`);
        console.log(`Total Contribution = ${result.totalContribution.toFixed(0)}`);
        console.log(`Total Interest Earned = ${result.totalInterestEarned.toFixed(2)}`);
        console.log("------------------------------------------------------------------------------");
    }
}
const investmentData = {
    initialAmount: 10000,
    annualContribution: 500,
    expectedReturn: 0.07,
    duration: 10
};
const results = calculateInvestment(investmentData);
printResults(results);
//# sourceMappingURL=calculator.js.map