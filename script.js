console.log("JS file loaded");
//USER BUTTONS
let rock1 = document.getElementById('user1');
let paper1 = document.getElementById('user2');
let scissor1 = document.getElementById('user3');

//COMPUTER BUTTONS
let rock2 = document.getElementById('com1');
let paper2 = document.getElementById('com2');
let scissor2 = document.getElementById('com3');

// RESET 
let reset = document.getElementById('reset');

//ARRAY
arr = ['R', 'P', 'S'];

// AUDIO
let sound =document.getElementById('audio');
// POINTS
let user = document.getElementById('userscore');
let computer = document.getElementById('computerscore');
let tie = document.getElementById('tie');

let userPoint = user.innerHTML;
let computerPoint = computer.innerHTML;
let tiePoint = tie.innerHTML;

userPoint = 0;
computerPoint = 0;
tiePoint = 0;
reset.onclick = function () {
    location.reload();
}


// USER FUNCTION
rock1.addEventListener('click', function () {
    let userChoice = 'R';
    sound.play();

    //COMPUTER FUNCTION
    let computerChoice = arr[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    if (computerChoice === 'R') {
        rock2.animate([{ border: '5px solid black' }, { background: 'grey' }], 1500);
    }
    else if (computerChoice === 'P') {
        paper2.animate([{ border: '5px solid black' }, { background: 'grey' }], 1500);
    }
    else {
        scissor2.animate([{ border: '5px solid black' }, { background: 'grey' }], 1500);
    }


    // POINTS FUNCTION
    if (((userChoice === "R") && (computerChoice === "R"))) {
        tiePoint += 1;
        tie.innerHTML = tiePoint;
    }
    if (((userChoice === "R") && (computerChoice === "S"))) {
        userPoint += 1;
        user.innerHTML = userPoint;
    }
    if (((userChoice === "R") && (computerChoice === "P"))) {
        computerPoint += 1;
        computer.innerHTML = computerPoint;
    }
});


paper1.addEventListener('click', function () {
    let userChoice = 'P';
    sound.play();
    //COMPUTER FUNCTION
    let computerChoice = arr[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    if (computerChoice === 'R') {
        rock2.animate([{ border: '5px solid black' }, { background: 'grey' }], 1500);
    }

    else if (computerChoice === 'P') {
        paper2.animate([{ border: '5px solid black' }, { background: 'grey' }], 1500);
    }
    else {
        scissor2.animate([{ border: '5px solid black' }, { background: 'grey' }], 1500);
    }

    if (((userChoice === "P") && (computerChoice === "P"))) {
        tiePoint += 1;
        tie.innerHTML = tiePoint;
    }
    if (((userChoice === "P") && (computerChoice === "R"))) {
        userPoint += 1;
        user.innerHTML = userPoint;
    }
    if (((userChoice === "P") && (computerChoice === "S"))) {
        computerPoint += 1;
        computer.innerHTML = computerPoint;
    }

});


scissor1.addEventListener('click', function () {
    let userChoice = 'S';
    sound.play();
    //COMPUTER FUNCTION
    let computerChoice = arr[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    if (computerChoice === 'R') {
        rock2.animate([{ border: '5px solid black' }, { background: 'grey' }], 1500);
    }

    if (computerChoice === 'P') {
        paper2.animate([{ border: '5px solid black' }, { background: 'grey' }], 1500);
    }
    else if (computerChoice === 'S') {
        scissor2.animate([{ border: '5px solid black' }, { background: 'grey' }], 1500);
    }


    else {
        tiePoint += 1;
        tie.innerHTML = tiePoint;
    }
    if (((userChoice === "S") && (computerChoice === "P"))) {
        userPoint += 1;
        user.innerHTML = userPoint;
    }
    if (((userChoice === "S") && (computerChoice === "R"))) {
        computerPoint += 1;
        computer.innerHTML = computerPoint;
    }
});



