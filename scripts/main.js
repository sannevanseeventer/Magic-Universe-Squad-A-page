// Globale functie om de code te laten wachten (argument is in milliseconden)
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
 
// Functie voor het omdraaien van alle kaarten (wordt geroepen door de knop)
async function turnCards() {
  // Eén voor één alle kaarten langs om ze te laten draaien
  let button = document.getElementById("turn-button");
  let fill = document.getElementById("toggle-fill");

  button.classList.toggle("on")
  fill.classList.toggle("toggled");

  for (let i = 1; i <= 25; i++) {
    let card = document.getElementById(i);

    card.classList.toggle("card-front");
    card.classList.toggle("card-back");
    
    // Wacht 100 milliseconden voordat het doorgaat naar de volgende kaart
    await delay(100);
  }
}