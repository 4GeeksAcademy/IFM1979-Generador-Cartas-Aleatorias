/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let suitsCards = ["♦", "♥", "♠", "♣"];
let numbersCards = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Q",
  "J",
  "K"
];

window.onload = function() {
  //write your code her
  let suitsCardsRamdom =
    suitsCards[Math.floor(Math.random() * suitsCards.length)];
  let numbersCardsRamdom =
    numbersCards[Math.floor(Math.random() * numbersCards.length)];

  let selectorSuits = document.querySelectorAll(".suits");
  for (let element of selectorSuits) {
    element.innerHTML = suitsCardsRamdom;
    if (suitsCardsRamdom === "♦" || suitsCardsRamdom === "♥") {
      element.style.color = "red";
    }
  }

  document.querySelector(".number").innerHTML = numbersCardsRamdom;
};
