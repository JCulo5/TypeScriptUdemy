//data:
//initial amount
//annual contribution
//expected return
//duration

type InvestmentData = {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number; // as a decimal
    duration: number; // in years
};

type InvestmentResult = {
    year: string;
    totalAmount: number;
    totalContribution: number;
    totalInterestEarned: number;
};

type CalculationResult= InvestmentResult[] | string;

function calculateInvestment(data: InvestmentData):CalculationResult{
    const {initialAmount,annualContribution,expectedReturn,duration}=data;

    if(initialAmount<=0 || annualContribution<0 || expectedReturn<=0 || duration<=0){
        return "Invalid input data. Please ensure all values are positive numbers.";
    }
    let total=initialAmount;
    let totalContribution=0;
    let totalInterestEarned=0;

    const annualResults:InvestmentResult[]=[];

    for(let i=0;i<duration;i++){
        total=total *(1+expectedReturn);
        totalInterestEarned+= total -totalContribution-initialAmount;
        totalContribution+=annualContribution;
        total+=annualContribution;

        annualResults.push({
            year: `Year ${i+1}`,
            totalAmount:total,
            totalInterestEarned,
            totalContribution,
        });
    }
    return annualResults;
}

function printResults(results:CalculationResult){
    //print output
    if(typeof results==="string"){
        console.log(results);
        return;
    }
    for (const result of results) {
        console.log(`${result.year}: Total Amount = ${result.totalAmount.toFixed(0)}`)
         console.log(`Total Contribution = ${result.totalContribution.toFixed(0)}`) 
         console.log(`Total Interest Earned = ${result.totalInterestEarned.toFixed(2)}`);
         console.log("------------------------------------------------------------------------------");
    }
}

const investmentData:InvestmentData={
    initialAmount:10000,
    annualContribution:500,
    expectedReturn:0.07,
    duration:10
};

const results = calculateInvestment(investmentData);

printResults(results);
