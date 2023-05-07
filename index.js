var random_number_1 = Math.floor(Math.random() * 5) + 1; //*image random number
var random_number_2 = Math.floor(Math.random() * 5) + 1; //*second random number


var image1 = document.querySelector(".img1"); //*player 1 image class
var image2 = document.querySelector(".img2"); //*player 2 image class
var h1_element  = document.querySelector("h1"); //*h1 tag 


// ?changes the images to any of the 6 images in the images folders, selected using the "random_number" variable 
player_1_dice_roll = image1.setAttribute("src", `images/dice${random_number_1}.png`);
player_2_dice_roll = image2.setAttribute("src", `images/dice${random_number_2}.png`);


// ?conditions to check for winner by checking for the higher "random_number"
if (random_number_1 > random_number_2) {
    h1_element .innerHTML = "Player 1 Wins!";
} else if (random_number_2 > random_number_1) {
    h1_element .innerHTML = "Player 2 Wins!";
} else {
    h1_element .innerHTML = "Draw!";
}




