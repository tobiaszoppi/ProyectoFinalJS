const moment = require('moment');

class User {
    constructor(name, pass, balance) {
        this.name = name
        this.pass = pass
        this.balance = balance
    }

    presentacion() {
        console.log(
            'Hola! mi nombre es ' +
            this.name +
            ' mi contraseña es ' +
            this.pass +
            ' mi saldo es ' +
            this.balance
        )
    }

    nameU() {
        return this.name
    }

    passU() {
        return this.pass
    }

    balanceU() {
        return this.balance
    }

    editName(n) {
        this.name = n
    }

    editPass(p) {
        this.pass = p
    }

    editBalance(b) {
        this.balance = b
    }
}

// Variables y Objeto
let nameD, passD, balanceD;
nameD = document.getElementById('name');
passD = document.getElementById('pass');
balanceD = document.getElementById('balance');
let homeL = "/home.html"; // link a home
let agregarB = false // agregar o no fondos
let user = new User();

// Eventos
let registerButton = document.querySelector('#registerButton');
registerButton.addEventListener('click',()=>register(nameD, passD, balanceD));
let loginButton = document.querySelector('#loginButton');
loginButton.addEventListener('click',()=>login(nameD,passD));

// Usando libreria de tiempo
let timeBox = document.querySelector('#tiempo');
setInterval(() => {
    timeBox.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
}, 1000);

// Storage Functions
function guardar_LocalStorage(n) {
    localStorage.setItem(n, JSON.stringify(user)); 
}

function obtener_LocalStorage(n) {
    if (localStorage.getItem(n) === undefined) {
        console.log('Error: localStorage.getItem(', n ,') is undefined');
    } else {
        return (JSON.parse(localStorage.getItem(n)));
    }
}


// Register, Login y addBalance functions
function register() {
    console.log(balanceD.value);
    console.log(nameD.value)
    console.log(passD.value)
    if(nameD.value === '' || passD.value === '' || balanceD.value === '') {
        alert('Error: nombre, contraseña o fondos no definidas');
    } else {
        user.editName(nameD.value);
        user.editPass(passD.value);
        user.editBalance(balanceD.value);
        guardar_LocalStorage(nameD.value);
    }
}

function login() {
    try {
        if (obtener_LocalStorage(nameD.value).name === nameD.value && obtener_LocalStorage(nameD.value).pass == passD.value) {
            localStorage.setItem('userLogged', nameD.value);
            window.location.href = homeL;
        } else {
            alert('Error: nombre o contraseña no encontrados');
        }
    } catch (e) {
        alert('Error: nombre o contraseña no encontrados')
    }
}

/*
let addApellidoButton = document.querySelector('#iApellido')
addApellidoButton.addEventListener('click', addApellido)





    leftToEgreso() {
        if (this.curso < 6) {
            let cumple = false
            let cursoAux = 1
            while (!cumple) {
                if (cursoAux == this.curso) {
                    document.getElementById(
                        'resultado'
                    ).innerHTML += `<div> ${this.nombre} esta cursando: ${cursoAux} </div>`
                    cumple = true
                } else if (cursoAux < this.curso) {
                    document.getElementById(
                        'resultado'
                    ).innerHTML += `<div> ${this.nombre} ya cursó: ${cursoAux} </div>`
                    cursoAux += 1
                }
            }
        } else if (this.curso >= 6) {
            document.getElementById(
                'resultado'
            ).innerHTML += `<div> ${this.nombre} está en el ultimo año! </div>`
        }
    }
*/