const myDropdown = document.getElementById("myDropdown")
const amountBankOps = document.getElementById("amountBankops")
const currentAccountBalance = document.getElementById("currentAccountBalance")
const currentCashBalance = document.getElementById("currentCashBalance")
const textarea = document.getElementById("textarea")

let account_balance = 0
let cash_balance = 0
let update_num = 1

// Set current bank balance
function setCurrentBalance() {
    account_balance = Number(currentAccountBalance.value)
    cash_balance = Number(currentCashBalance.value)
    textarea.value = `[Current Account Balance 🏦: ${account_balance} | Current Cash Balance 💵: ${cash_balance}]\n\n${textarea.value}`;
}

// Bank operations -> deposit & withdraw
function confirmBankops() {

    if (amountBankOps.value == 0) {
        textarea.value = "- PLEASE ENTER THE AMOUNT YOU WANT TO DEPOSIT/WITHDRAW -\n\n" + textarea.value;
        return;
    }

    if (myDropdown.value == "deposit") {

        if (cash_balance - Number(amountBankOps.value) < 0) {
            textarea.value = "!!!-NOT ENOUGH MONEY TO DEPOSIT-!!!\n\n" + textarea.value;
            return;
        }
        account_balance += Number(amountBankOps.value)
        cash_balance -= Number(amountBankOps.value)
        textarea.value = `${update_num}. Current Account Balance 🏦: ${account_balance} | Current Cash Balance 💵: ${cash_balance}\n\n${textarea.value}`;
        amountBankOps.value = 0

    } else if (myDropdown.value == "withdraw") {

        if (account_balance - Number(amountBankOps.value) < 0) {
            textarea.value = "!!!-NOT ENOUGH MONEY TO WITHDRAW-!!!\n\n" + textarea.value;
            return;
        }
        account_balance -= Number(amountBankOps.value)
        cash_balance += Number(amountBankOps.value)
        textarea.value = `${update_num}. Current Account Balance 🏦: ${account_balance} | Current Cash Balance 💵: ${cash_balance}\n\n${textarea.value}`;
        amountBankOps.value = 0
    }

    update_num += 1

}

// DEBUG
// console.log("Acc_balance:", account_balance)
// console.log("Cash_balance:", cash_balance)