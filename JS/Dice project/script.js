function Roll() {
    var random = Math.floor(1 + Math.random() * 6);
    //0 => 0.99999
    //6.3 => 6
    var dice = document.getElementById("die");
    dice.setAttribute("src","die"+random+".png"); // random = 3 // die3.png
}