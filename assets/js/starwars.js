// A $( document ).ready() block.
$(document).ready(function () {
    console.log("ready!");

    // The Characters  
    // can this somehow be nested into an array of objects?
    let obi = {
        name: "Obi Wan Kenobi",
        health: 120,
        attack: 50,
        active: false,
        defeated: false,
        available: true,
    };
    let luke = {
        name: "Luke Skywalker",
        health: 120,
        attack: 50,
        active: false,
        defeated: false,
        available: true,
    };
    let maul = {
        name: "Darth Maul",
        health: 120,
        attack: 50,
        active: false,
        defeated: false,
        available: true,
    };
    let sideous = {
        name: "Darth Sideous",
        health: 120,
        attack: 50,
        active: false,
        defeated: false,
        available: true,
    };
    let activePlayer = {
        name: null,
        attack: 0,
        health: 0,

    }
    console.log(obi.name);

    // Selection Functions
    // On initial jquery click, place clicked character in playerPosition div, put it's stats in activePlayer, update instruction area, to reflect instruction to select an opponent
    $(".obi-wan-kenobi").on("click", function () {
        console.log("Obi Clicked")
        $("#characterArea").detach().appendTo("#playerPosition");
    });


    // On secondary jquery click, place  clciked character in opponentPosition div, put it's stats in activeOpponent, update instrction area to display attackButton button

    // On attackButton click, evaluate the stats for activePlayer and activeOpponent. 
    // Subtract player attack value from opponent health value
    // If opponent health is greater than zero
    // then subtrack opponent attack value from player health value
    // If player health value is greater than zero show the attack button to start this session again
    // If Opponent health is zero or less
    //Remove from play area, add icon in graveyard
    // Allow Player to select next opponent
    // Start new match
    // If player health is zero or less
    //   Load URL gameover.html      
});