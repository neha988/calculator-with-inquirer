import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        name: "firstNumber",
        type: "number",
        message: "enter first number"
    }, {
        name: "secondNumber",
        type: "number",
        message: "enter second number"
    }, {
        name: "operator",
        type: "list",
        message: "select of the operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please enter a valid operator");
}
