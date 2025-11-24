



function rollDice(){
    
    const numOfDice = document.getElementById("numOfDice").value; // get value from input
    const diceImg = document.getElementById("diceImg");
    const values = [];
    const images = [];

    for(let i=0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice img/${value}.png" alt="Dice ${value}">`)
    }
    
    diceImg.innerHTML = images.join('');
} 