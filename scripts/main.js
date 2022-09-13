// Globale functie om de code te laten wachten (argument is in milliseconden)
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

// Functie voor het omdraaien van alle kaarten
async function turnCards() {
    // Een voor een alle kaarten langs om ze te laten draaien    
    for (let i = 1; i <= 25; i++) {
        let card = document.getElementById(i);
        await delay(100);
        card.classList.toggle("turned");
        card.classList.toggle("face-up");
    }
}
