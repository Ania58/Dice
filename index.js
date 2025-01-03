getRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
}

const buttonClick = document.getElementById("btn");

buttonClick.addEventListener("click", function() {

    const dice1 = document.querySelector(".img1");
    const dice2 = document.querySelector(".img2");

    dice1.classList.add("throw");
    dice2.classList.add("throw");
    
    let randomImage1 = getRandomNumber();
    let randomImage2 = getRandomNumber();
    
    setTimeout(() => {
        document.querySelector(".img1").setAttribute("src", `./images/dice${randomImage1}.png`);
        document.querySelector(".img2").setAttribute("src",`./images/dice${randomImage2}.png`);
        dice1.classList.remove("throw");
        dice2.classList.remove("throw");
    
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
     }, 1000);
});
