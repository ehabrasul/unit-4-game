$(document).ready(function() {

    resetGame();

    $(".crystals").on("click",function() {
        // console.log($(this).attr("id"));
        // console.log(this);

        // Clear previous game status on first gem click in new game
        if (playerScore===0) {
            $("#status").fadeOut();
            // $("#status").html("");
        }

        // Add selected gem value to playerScore
        addScore($(this).attr("id"));

        if (playerScore === randomScore) {
            wins++;
            $("#status").html("You Win!");
            $("#status").fadeIn();
            resetGame();
        }
        else if (playerScore > randomScore) {
            losses++;
            $("#status").html("You Lose!");
            $("#status").fadeIn();
            resetGame();
        }
});
})

    // Variables
    var playerScore;
    var randomScore;
    var wins = 0;
    var losses = 0;

    var red = new Gem();
    var blue = new Gem();
    var green  = new Gem();
    var purple= new Gem();

    // Functions & Objects

    function Gem (value) {
        this.value = value;
    }

    function addScore(gem) {
        switch(gem) {
            case "red":
                playerScore += red.value;
                break;
            case "blue":
                playerScore += blue.value;
                break;
            case "green":
                playerScore += green.value;
                break;
            case "purple":
                playerScore += purple.value;
                break;
        }
        // Display the new score
        $("#playerScore").html(playerScore);
    }

    function resetGame() {
        var powersArr = [];
        playerScore = 0;
        randomScore = Math.floor(Math.random() * 102) + 19;

        red.value = getRandomPower(powersArr);
        blue.value = getRandomPower(powersArr);
        green.value = getRandomPower(powersArr);
        purple.value = getRandomPower(powersArr);



        console.log("Red:" + red.value);
        console.log("Blue:" + blue.value);
        console.log("Green:" + green.value);
        console.log("Purple:"+ purple.value);
    

        // Display values
        $("#playerScore").html(playerScore);
        $("#randomScore").html(randomScore);
        $("#wins").html(wins);
        $("#losses").html(losses);

    }

    function getRandomPower(pa) {
        var power;

        // Loop until a unique value 
        do {
            power = Math.floor(Math.random() * 12)+1;
        } while(pa.includes(power));

        pa.push(power);

        return power;

    }