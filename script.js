const myDropdown = document.getElementById("myDropdown")
const amountBankOps = document.getElementById("amountBankops")
const currentAccountBalance = document.getElementById("currentAccountBalance")
const currentCashBalance = document.getElementById("currentCashBalance")
const textarea = document.getElementById("textarea")

let account_balance = 0
let cash_balance = 0
let update_num = 1

// ---------- Initial / After Refresh pages ----------------
currentAccountBalance.value = 0
currentCashBalance.value = 0
amountBankops.value =  0
textarea.value = ""
textarea.value = `${update_num}. [Current Account Balance 🏦: ${account_balance} | Current Cash Balance 💵: ${cash_balance}]\n\n${textarea.value}`;

// ------------- Set current bank balance ----------------
function setCurrentBalance() {
    account_balance = Number(currentAccountBalance.value)
    cash_balance = Number(currentCashBalance.value)
    update_num += 1;
    textarea.value = `${update_num}. [Current Account Balance 🏦: ${account_balance} | Current Cash Balance 💵: ${cash_balance}]\n\n${textarea.value}`;
}

// ------------- Bank operations -> deposit & withdraw ----------------
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
        update_num += 1
        textarea.value = `${update_num}. Current Account Balance 🏦: ${account_balance} | Current Cash Balance 💵: ${cash_balance}\n\n${textarea.value}`;

    } else if (myDropdown.value == "withdraw") {

        if (account_balance - Number(amountBankOps.value) < 0) {
            textarea.value = "!!!-NOT ENOUGH MONEY TO WITHDRAW-!!!\n\n" + textarea.value;
            return;
        }
        account_balance -= Number(amountBankOps.value)
        cash_balance += Number(amountBankOps.value)
        update_num += 1
        textarea.value = `${update_num}. Current Account Balance 🏦: ${account_balance} | Current Cash Balance 💵: ${cash_balance}\n\n${textarea.value}`;
    }

    currentAccountBalance.value = account_balance
    currentCashBalance.value = cash_balance

}

// DEBUG
// console.log("Acc_balance:", account_balance)
// console.log("Cash_balance:", cash_balance)