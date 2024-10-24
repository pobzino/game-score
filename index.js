let guestPoints = 0
let homePoints = 0
let homeDisplay = document.getElementById("home-score")
let guestDisplay = document.getElementById("guest-score")


guestPoints
homePoints
function addOneGuest() {
    newPoint = 1
    guestPoints += newPoint
    guestDisplay.textContent = guestPoints
    updateColors()
}
function addTwoGuest() {
    newPoint = 2
    guestPoints += newPoint
    guestDisplay.textContent = guestPoints;
    updateColors()

}
function addThreeGuest() {
    newPoint = 3
    guestPoints += newPoint
    guestDisplay.textContent = guestPoints;
    updateColors()
}

function addOneHome() {
    newPoint = 1
    homePoints += newPoint
    homeDisplay.textContent = homePoints;
    updateColors()
}
function addTwoHome() {
    newPoint = 2
    homePoints += newPoint
    homeDisplay.textContent = homePoints;
    updateColors()
}
function addThreeHome() {
    newPoint = 3
    homePoints += newPoint
    homeDisplay.textContent = homePoints;
    updateColors()
}
function newGame() {
    guestPoints = 0
    homePoints = 0
    homeDisplay.textContent = homePoints;
    guestDisplay.textContent = guestPoints;
    updateColors()
}
function updateColors() {
    if (guestPoints > homePoints) {
        guestDisplay.style.color = "#064E3B";  // Guest winning
        homeDisplay.style.color = "#f94f6d";   // Home losing
    } else if (homePoints > guestPoints) {
        homeDisplay.style.color = "#064E3B";   // Home winning
        guestDisplay.style.color = "#f94f6d";  // Guest losing
    } else {
        homeDisplay.style.color = "white";
        guestDisplay.style.color = "white";
    }
}