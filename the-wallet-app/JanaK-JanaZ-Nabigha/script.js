// variables

let content = document.getElementById("wallet");
let newWalletContent = content.innerHTML;

let wallets = []


eventCreate();

//Listener new wallet
function eventCreate() {
  let balance = document.getElementById("money");
  let description = document.getElementById("description");
  let name = document.getElementById("name");
  let currency = document.getElementsByName("currency");

  let createWallet = document.getElementById("createWallet");
  createWallet.addEventListener("submit", function (event) {
    event.preventDefault();
    let currencyValue;
    for (var i = 0; i < currency.length; i++) {
      if (currency[i].checked) {
        currencyValue = currency[i].value;
      }
    }
    let wallet = new Wallet(name.value, description.value, balance.value, currencies[currencyValue], []);
    wallets.push(wallet);
    wallet.renderWallet();
    save();
  })
}

// arrays used
currencies = [
  {
    "id": 0,
    "name": "dollar",
    "symbol": "$"
  },
  {
    "id": 1,
    "name": "Lebanese Pound",
    "symbol": "LBP"
  }
];

types = [
  {
    "id": 0,
    "name": "income",
    "style": "green"
  },
  {
    "id": 1,
    "name": "expence",
    "style": "red"
  }
]

//local storage
function save() {
  window.localStorage.setItem('wallets', JSON.stringify(wallets))
}
function localItem() {
  let str = window.localStorage.getItem('wallets');
  return (JSON.parse(str))
}



//classes
class Wallet {
  constructor(name, desc, balance, currency= currencies[0], transaction=[]) {
    this.id = wallets.length;
    this.name = name;
    this.desc = desc;
    balance ? this.balance = balance : this.balance = 0;
    this.currency = currency;
    transaction? this.transactions=transaction : this.transactions=[];
  }

  calculateBalance() {
    let balance = this.transactions.reduce((bal, val) => {
      if (val.type.id === 0) {
        return parseInt(bal) + parseInt(val.amount)
      }
      else { return parseInt(bal) - parseInt(val.amount) }
    }, this.balance)
    return balance;
  }

  renderBalance() {
    let span = document.getElementById("balance");
    span.innerHTML = this.calculateBalance();
  }

  renderWallet() {
    content.innerHTML = `
      <div id="bntGroup" class="btn-group">
      <button id="createNew" type="button" class="btn btn-secondary">create new wallet</button>
      </div>
      <h1 id="nameOfWallet">${this.name}</h1> 
      <h3 id="wbce">Wallet Balance :${this.currency
        .symbol} <span id="balance"></span></h3>
       <form class="form-group"  id="addForm">
        <div class="row" style="
           margin-left: 0px;">
       <label>Make a transaction :</label><br>
       <div class="input-group mb-3 col">
        <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">${this.currency
        .symbol}</span>
       <input type="number" "form-control" id="amount">
       </div>
       </div>
       <div class="col">
       <div class="btn-group btn-group-toggle" data-toggle="buttons">
       <label style="background:white; color:rgb(10,169,146); border-color:rgb(10,169,146)" class="btn btn-success">
          <input  type="radio" name="options" value="0"> Income
         </label>
          <label style="background:white; color:rgb(179,23,35); border-color:rgb(179,23,35);" class="btn btn-danger">
             <input type="radio" name="options" value="1"> Expense
          </label>
         </div>
          </div>
          </div>
      <div class="row">
      <div class="col-3">
      <label>Transaction notes :</label><br>
       <input type="text" placeholder="Lunch" id="notes">
        </div>
        <div class="col-3">
       <label>Transaction tags :</label><br>
       <input type="text" placeholder="Food, Lifestyle" id="tags">
       </div>
       <div class="col-3" id="transaction">
        <button id="addtranbtn" type="submit" class="btn btn-dark">ADD TRANSACTION</button>
        </div>
        </div>
       </form>
       <div id="trans"></div>
      `;

    let bntGroup = document.getElementById("bntGroup");
    wallets.forEach((el) => {
      let button = document.createElement("button");
      button.setAttribute("id", el.id);
      button.setAttribute("class", "btn btn-dark");
      button.style.background="rgb(91, 192, 232)"
      button.style.color="navy"
      button.style.borderColor="navy" 
      button.style.marginRight="5px"
      button.innerText = el.name;
      button.addEventListener("click", () => {
        el.renderWallet();
      })
      bntGroup.appendChild(button);
    })

    let createNewWallet = document.getElementById("createNew");
    createNewWallet.addEventListener("click", () => {
      content.innerHTML=`<button id="return" type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          close
          </button>`
      content.innerHTML += newWalletContent;
      
      let returnWallet= document.getElementById("return")
      returnWallet.addEventListener("click", ()=>{
        wallets[0].renderWallet();
      })
      eventCreate();
    })
    let add = document.getElementById("addForm");
    add.addEventListener("submit", this.createTransaction.bind(this));

    this.renderBalance();
    this.renderTransactions();
  }

  createTransaction(e) {
    e.preventDefault()
    let typeOptions = document.getElementsByName("options");

    let note = document.getElementById("notes");
    let tag = document.getElementById("tags");
    let amount = document.getElementById("amount")

    let typeValue;
    for (var i = 0; i < typeOptions.length; i++) {
      if (typeOptions[i].checked) {
        typeValue = typeOptions[i].value;
      }
    }

    let transaction = new Transaction(typeValue, note.value, tag.value, amount.value);
    this.transactions.push(transaction);
    this.renderTransactions();
    this.renderBalance();
    save();
  }

  renderTransactions() {
    let transactiondiv = document.getElementById("trans")
    transactiondiv.innerHTML = "";
    for (let element of this.transactions) {
      transactiondiv.innerHTML += `
      <div class="card">
        <div class="card-header">
       ${element.date}
        </div>
        <div class="card-body">
        <h5 class="card-title ${element.type.name}">${element.amount}</h5>
       <p class="card-text">${element.note}</p>
         <p class="card-text">${element.tag}</p>
      </div>
      </div><br>`
    }
  }
}

class Transaction {
  constructor(type=0, note, tag, amount) {
    type ? this.type = types[type] : this.type = types[0]
    this.note = note;
    this.tag = tag;
    this.amount = amount;
    this.date = new Date().toJSON().slice(0, 10);
  }
}


let local = localItem()
if (local !== null) {
  local.forEach((el)=>{
    let wallet = new Wallet(el.name, el.desc, el.balance, el.currency, el.transactions);
    wallets.push(wallet);
    wallet.renderWallet();  
  })
}