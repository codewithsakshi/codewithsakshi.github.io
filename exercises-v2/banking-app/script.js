const resultElement = document.getElementById("result")
const errorMessageElement = document.getElementById('errorMessage')
const availableAccounts = document.querySelector('.available-accounts')

function CreateAccount(firstName, lastName, email){
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.balance = 0

    this.deposit = function(amount){
        if(amount < 0) {
            errorMessageElement.innerHTML =`Deposit amount can not be less than 0`
        } else {
            this.balance = this.balance + Number(amount)
        }
    }

    this.withdraw = function(amount){
        if(this.balance < amount){
            errorMessageElement.innerHTML= `Insufficient balance`
        } else {
            this.balance = this.balance - amount
        }
    }
}


if(!localStorage.getItem("accounts")) {
 localStorage.setItem("accounts", [])       
}

let accounts = []


try {
    accounts = JSON.parse(localStorage.getItem("accounts"))
} catch(err){
    accounts = []
    localStorage.setItem("accounts", [])
}
let account = null

function updateLocalStorage(){
    localStorage.setItem("accounts", JSON.stringify(accounts))
}


function foo(){
        let firstName = prompt("Enter first name")
        let lastName = prompt("Enter Last Name")
        let email = prompt("Enter email")
        
        account = new CreateAccount(firstName, lastName, email)
        accounts.push(account)
        updateLocalStorage()
        loadAllAccounts()
        resultElement.innerHTML = `Account created successfully`
}

let input = null

function loadAllAccounts(){
    console.log(accounts)
    accounts.forEach(account => {
        const accountElement = document.createElement('div')
        accountElement.innerHTML = `
        <p><strong>Name<strong>: ${account.firstName} ${account.lastName}</p>
        <p><strong>Balance<strong>: ${account.balance}</p>
        `
        availableAccounts.appendChild("accountElement")
    })
}

function askChoice(){
    input = prompt("Enter your choice")
    switch(input){
        case '1': foo()
        break;
        case '2':
            if(!account) {
                errorMessageElement.innerHTML = `You don't have account. press 1 to create account`
            } else {
                let amount = prompt("Enter amount to deposit")
                account.deposit(amount)
                resultElement.innerHTML = `Amount ${amount} deposited successfully`
            }
            break;
        case '3':
            if(!account) {
                errorMessageElement.innerHTML = `You don't have account. press 1 to create account`
            } else {
                let amount = prompt("Enter amount to withdraw")
                account.withdraw(amount)
                resultElement.innerHTML = `Amount ${amount} withdrawn successfully`
            }
            break;
        case '4':
            if(!account) {
                errorMessageElement.innerHTML = `You don't have account. press 1 to create account`
            } else {
                resultElement.innerHTML = `You have ${account.balance} left in your account`
            }
            break;
        case '9':
            resultElement.innerHTML = `Thank you for using our banking app. Hope to see you again!`
            break;
        default:
            errorMessageElement.innerHTML = `Invalid choice`
    }
}

askChoice()
loadAllAccounts()

// function CreateAccount(firstName, lastName, email) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.email = email
//     this.balance = 0

//     this.deposit = function(amount) {
//         if(amount < 0) {
//             errorMessageElement.innerHTML = `Deposit can not be less than zero`
//         }else {
//             this.balance = this.balance + Number()
//         }
//     }

//     this.withdraw = function(amount) {
//         if(this.balance < amount ) {
//             errorMessageElement.innerHTML = `Insufficient balance`
//         }else {
//             this.balance = this.balance - amount
//         }
//     }
    
// }

// if(!localStorage.getItem("accounts")) {
//     localStorage.setItem("accounts", [])
// }

// let accounts = []

// try {
//     accounts = JSON.parse(localStorage.getItem('accounts'))
//  }catch(error) {
//      accounts = []
//      localStorage.setItem("accounts", [])
//  }
//  let account = null
 
//  function updateLocalStorage() {
//      localStorage.setItem("accounts", JSON.stringify(accounts))
//  }
 
//  function foo() {
//     let firstName = prompt("Enter first name")
//     let lastName = prompt("Enter last name")
//     let email = prompt("Enter your email")

//     account = new CreateAccount(firstName, lastName, email)
//     accounts.push(account)
//     updateLocalStorage()
//     loadAllAccounts()
//     resultElement.innerHTML = `Account created successfully`
// }

// let input = null 
// function loadAllAccounts() {
//     accounts.forEach(accounts => {
//         const accountElement = document.createElement("div")
//         accountElement.innerHTML = `
//         <p><strong>Name:</strong>${account.firstName} ${account.lastName}</p>
//         <p><strong>Balance:${account.balance}</p>`

//         availableAccounts.appendChild("accountElement")
//     })
// }


// function askChoice() {
// let input = prompt("Enter your choice here")
// switch(input) {
//     case "1": foo()
//     break;

//     case '2': 
//     if(!account) {
//         errorMessageElement.innerHTML = `you don't have account. press 1 to create account`
//     }else {
//        let account = prompt("Enter amount to deposit") 
//        account.deposit(amount)
//        resultElement.innerHTML = `Amount  ${amount} deposit successfully`
//     }
//     break;

//     case '3': 
//     if(!account) {
//         errorMessageElement.innerHTML = `you don't have account. press 1 to create account`
//     }else {
//         let account = prompt("Enter amount to withdrawn")
//         account.withdraw(amount)
//         resultElement.innerHTML = `Ammount ${amount} withdrawn suuccefully`
//     }
//     break;

//     case '4': 
//     if(!account) {
//         errorMessageElement.innerHTML = `you don't have account. press 1 to create account`
//     } else {
//       resultElement.innerHTML = `You have ${account.balance} left in your account`
//     }
//     break;

//     case '9':
//         if(!account) {
//             errorMessageElement.innerHTML = `Thank you for using our banking app. Hope to see you again!`
//         }
//         break;
//         default:
//         errorMessageElement.innerHTML = `Invalid choice`
//      }
// }

// askChoice()
// loadAllAccounts()
