/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
// Botón recarga la página al hacer click
const reloadButton = document.getElementById("reloadButton");
reloadButton.addEventListener("click", () => {
  location.reload();
});

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
  "K",
  "Q",
  "J"
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
/*
let newWidth = prompt("Enter a width for your card (e.g., 200px, 50%)");
let newHeight = prompt("Enter a height for your card (e.g., 300px, 75%)");

let selectionCard = document.querySelector(".carta");
selectionCard.style.width = newWidth;
selectionCard.style.height = newHeight;*/
