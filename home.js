let balanceButton = document.querySelector('#addBalanceButton');
balanceButton.addEventListener('click', addBalance);
let enterButton = document.querySelector('#enterButton');
enterButton.addEventListener('click', enter);

let showBalanceSpan = document.querySelector('#showBalance');
let userNameLogged = localStorage.getItem('userLogged');

let userLoggedObj = JSON.parse(localStorage.getItem(userNameLogged));

showBalanceSpan.textContent = "Fondos: " + userLoggedObj.balance;

function guardar_LocalStorage() {
    localStorage.setItem(userNameLogged, JSON.stringify(userLoggedObj)); 
}


function addBalance() {
    document.getElementById('balanceSpan').innerHTML =
        '<input type="text" id="addBalance" placeholder="Balance">';

}

function enter() {
    userLoggedObj.balance = parseInt(userLoggedObj.balance) + parseInt(document.querySelector('#addBalance').value);
    guardar_LocalStorage();
    showBalanceSpan.textContent = "Fondos: " + userLoggedObj.balance;
}