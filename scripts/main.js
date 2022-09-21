// Globale functie om de code te laten wachten (argument is in milliseconden)
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
 
const addEventListeners = () => {
  const cards = document.querySelectorAll(".card");
  const cardsArr = Array.prototype.slice.call(cards);

  cardsArr.forEach(
    (card) => {
      card.addEventListener("click", function(){selectCard(card)})
  });
}


// Functie voor het omdraaien van alle kaarten (wordt geroepen door de knop)
async function turnCards() {
  // Eén voor één alle kaarten langs om ze te laten draaien
  const button = document.getElementById("turn-button");
  const fill = document.getElementById("toggle-fill");

  let selectedCards = document.querySelectorAll(".selected");
  let selectedCardsArr = Array.prototype.slice.call(selectedCards);

  if (selectedCardsArr.length > 0) {
    selectedCardsArr.forEach((card) => {
      card.classList.toggle("selected");
    });
  }
  
  button.classList.toggle("on")
  fill.classList.toggle("toggled");

  for (let i = 1; i <= 22; i++) {
    let card = document.getElementById(i);

    card.classList.toggle("face-up");
    card.classList.toggle("face-down");
    
    // Wacht 100 milliseconden voordat het doorgaat naar de volgende kaart
    await delay(100);
  };
}

const selectCard = (card) => {
  console.log(card)
  let selectedCards = document.querySelectorAll(".selected");
  let selectedCardsArr = Array.prototype.slice.call(selectedCards);

  if (selectedCardsArr.length > 0) {
    selectedCardsArr.forEach((card) => {
      card.classList.toggle("selected");
    });
  }

  card.classList.toggle("selected");
}