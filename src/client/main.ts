import {
  establishConnection,
  establishPayer,
  checkProgram,
  passData,
  getResult,
} from './computation';
import {question} from 'readline-sync'; //npm install --save readline-sync || npm i --save-dev @types/readline-sync

let first_number: String = "a";
let second_number: String = "a";
let operation: String = "a";
let is_set_op: Boolean = false;

async function main() {
  console.log("Module 4 ( Final )");
  await establishConnection();
  await establishPayer();
  await checkProgram();

  let view_last = question("Do you want to check your previous answer? Y/N >> ");
  if(view_last === "Y" || view_last === "y") {
    await getResult();
    return;
  }if(view_last === "N" || view_last === "n"){
    while(isNaN(first_number as any) || first_number === "") {
      first_number = question("First Number: ");
    }
    while(isNaN(second_number as any) || second_number === "") {
      second_number = question("Second Number: ");
    }
    while(!is_set_op) {
      let op = question("Enter 1 for Addition\nEnter 2 for Subtraction\nSELECT NUMBER: ");
      if(op === "1") {
        is_set_op = true;
        operation = "+";
      }if(op === "2") {
        is_set_op = true;
        operation = "-";
      }
    }
  }
    
  await passData(first_number, second_number, operation);
  await getResult();

  console.log('Success');
}

main().then(
  () => process.exit(),
  err => {
    console.error(err);
    process.exit(-1);
  },
);