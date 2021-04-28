'use strict';

// const playerOneName = prompt('Podaj imię pierwsego gracza');
// const playerTwoName = prompt('Podaj imię drugiego gracza');

// //add default value if no name is selected aa

// document.querySelector('#name--0').textContent = playerOneName;
// document.querySelector('#name--1').textContent = playerTwoName;

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;

//function that changes active player
const changePlayer = function () {
  currentScore = 0;
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  // if (
  //   document.querySelector('.player--0').classList.contains('player--active')
  // ) {
  //   document.querySelector('.player--0').classList.remove('player--active');
  //   document.querySelector('.player--1').classList.add('player--active');
  //   document.querySelector('#current--0').textContent = 0;
  // } else {
  //   document.querySelector('.player--1').classList.remove('player--active');
  //   document.querySelector('.player--0').classList.add('player--active');
  //   document.querySelector('#current--1').textContent = 0;
  //   document.querySelector('#current--1').textContent = 0;
  // }
};

//Rolling Dice logic
btnRoll.addEventListener('click', function () {
  const diceNumber = Math.floor(Math.random() * 6 + 1);
  //display dice image
  diceEl.src = `dice-${diceNumber}.png`;
  currentScore += diceNumber;
  document.querySelector(
    '.player--active .current-score'
  ).textContent = currentScore;

  if (diceNumber === 1) {
    currentScore = 0;
    changePlayer();
  }
});

//Hold button logic
btnHold.addEventListener('click', function () {
  const totalScore = Number(
    document.querySelector('.player--active').querySelector('.score')
      .textContent
  );
  document
    .querySelector('.player--active')
    .querySelector('.score').textContent = totalScore + currentScore;

  if (
    Number(document.querySelector('#score--0').textContent) > 99 ||
    Number(document.querySelector('#score--1').textContent) > 99
  ) {
    document
      .querySelector('.player--active')
      .querySelector('.name').textContent = 'Winner';
    return;
  }

  changePlayer();
});

//New game logic
btnNew.addEventListener('click', function () {
  for (let i = 0; i < document.querySelectorAll('.score').length; i++) {
    document.querySelectorAll('.score')[i].textContent = 0;
    document.querySelectorAll('.current-score')[i].textContent = 0;
  }
});
