
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function omdraaien() {
    // const kaarten = document.querySelector(".card");
    
    // console.log(kaarten);
    // kaarten.classList.toggle("omgedraaid");
        
    for (let i = 1; i <= 25; i++){
        console.log (i);
        let card = document.getElementById(i);
        await delay(100);
        card.classList.toggle("omgedraaid");
    }
}
