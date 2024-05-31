document.getElementById('roll-button').addEventListener('click', function() {
    const diceImages = [
        'download.png',
        'two.png',
        'three.png',
        'four.png',
        'five.png',
        'six.png'
    ];

    function rollDice() {
        return Math.floor(Math.random() * 6);
    }

    const roll = rollDice();


    document.getElementById('current-dice').src = diceImages[roll];

    
    const newRollDiv = document.createElement('div');
    const newRollImg = document.createElement('img');
    newRollImg.src = diceImages[roll];
    newRollImg.alt = 'Dice';
    newRollDiv.textContent = `Roll: `;
    newRollDiv.appendChild(newRollImg);

    
    document.getElementById('results').appendChild(newRollDiv);
});
