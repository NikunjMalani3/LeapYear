var readlinesync = require("readline-sync")

const chalk = require('chalk');
const log = console.log;

 console.log(chalk.redBright("Welcome"))

 var userInput = readlinesync.questionInt(chalk.green("Please Enter your Birth Date as YYYY"))

   console.log(chalk.yellow(userInput))

 if (userInput%4 == 0){
   console.log(chalk.magenta("You were born in leap Year"))
 }
 else{
  console.log(chalk.blackBright("You were born in a Non Leap Year"))
 }

