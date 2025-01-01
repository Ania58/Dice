document.addEventListener("DOMContentLoaded", () => {
    getRandomNumber = () => {
        return Math.floor(Math.random() * 6) + 1;
    }
    
    let randomImage1 = getRandomNumber();
    let randomImage2 = getRandomNumber();
    
    
    document.querySelector(".img1").setAttribute("src", `./images/dice${randomImage1}.png`);
    
    document.querySelector(".img2").setAttribute("src",`./images/dice${randomImage2}.png`);
    
    whoWon = () => {
        if (randomImage1 > randomImage2) {
            return "Player 1 Wins";
        } else if (randomImage1 < randomImage2) {
            return "Player 2 Wins";
        } else {
            return "It's a draw";
        }
    }
    
    let result = whoWon();
    document.querySelector("h1").textContent = result;
});
