// # ATM BY HUSAINA IN TYPESCRIPT
//start code by import inquirer
import inquirer from "inquirer";
//initialize user balance and pincode
let myBalance = 5000;
let myPin = 1234;
//print welcome message
console.log("welcome to code with Husaina - ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("pin is Correct, Login successfully!");
    // console.log(`Current Account Balance is ${myBalance}`)
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Successfully`);
            console.log(`your Remaining Balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") { // capitilze "check balance"
        console.log(`Your Account Balance is: ${myBalance}`);
    }
}
else {
    console.log("pin is incorrect, try again!");
}
