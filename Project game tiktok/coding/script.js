const girlsSide = document.getElementById("girlsSide");
const boysSide = document.getElementById("boysSide");

const girlsScoreText = document.getElementById("girlsScore");
const boysScoreText = document.getElementById("boysScore");

const girlsClicks = document.getElementById("girlsClicks");
const boysClicks = document.getElementById("boysClicks");

const battleLine = document.getElementById("battleLine");

const girlsZone = document.getElementById("girlsZone");
const boysZone = document.getElementById("boysZone");
const COMBO_ATTACK = 20;

// CHARACTER
const boysCharacter = document.getElementById("boysCharacter");
const girlsCharacter = document.getElementById("girlsCharacter");

// BOYS
const boysNormalImg = "boys1.png";
const boysPanicImg = "Boys_panic.png";
const boysPunchImg = "Punch_boys.png"; 
const boysWinnerImg = "happy_boys.png";
const superBoysImg = "super_boys.png";


// GIRLS
const girlsNormalImg = "girls.png";
const girlsPanicImg = "girls_panic.png";
const girlsPunchImg = "Punch_girls.png";
const girlsWinnerImg = "happy_girls.png";
const superGirlsImg = "super_girls.png";


// SKOR MENANG
let girlsWins = 0;
let boysWins = 0;

// JUMLAH CLICK RONDE
let girlsClicksCount = 0;
let boysClicksCount = 0;

// PERSENTASE BATTLE
let girlsPercent = 50;
let boysPercent = 50;
let boysAttackStep = 0;
let girlsAttackStep = 0;

// ANIMASI
let boysAnimating = false;
let girlsAnimating = false;

updateDisplay();



function girlsAttack() {

    if (girlsPercent >= 100) return;

    if (!girlsAnimating) {

    girlsAnimating = true;

    girlsCharacter.classList.add("push-girls");
    girlsCharacter.classList.add("girls-glow");

    if (girlsAttackStep === 0) {

        girlsCharacter.src = girlsPunchImg;
        girlsAttackStep = 1;

    } else {

        girlsCharacter.src = superGirlsImg;
        girlsAttackStep = 0;

    }

    setTimeout(() => {

        girlsCharacter.classList.remove("push-girls");
        girlsCharacter.classList.remove("girls-glow");

        girlsCharacter.src = girlsNormalImg;

        girlsAnimating = false;

    }, 800);

}

    girlsCharacter.classList.add("push-girls");
    girlsCharacter.classList.add("girls-glow");

    // Bergantian Punch -> Super -> Punch -> Super
    if (girlsAttackStep === 0) {

        girlsCharacter.src = girlsPunchImg;
        girlsAttackStep = 1;

    } else {

        girlsCharacter.src = superGirlsImg;
        girlsAttackStep = 0;

    }

    // Boys panik
    boysCharacter.src = boysPanicImg;

    // Kembali normal
    setTimeout(() => {

        girlsCharacter.classList.remove("push-girls");
        girlsCharacter.classList.remove("girls-glow");

        girlsCharacter.src = girlsNormalImg;

    }, 1200);

    girlsClicksCount++;

    girlsPercent += 1;
    boysPercent -= 1;

    updateDisplay();

    if (girlsPercent >= 100) {

        setTimeout(() => {
            showWinner("🎉 GIRLS WIN!!");
        }, 100);

    }
}

function boysAttack() {

    if (boysPercent >= 100) return;

    if (!boysAnimating) {

    boysAnimating = true;

    boysCharacter.classList.add("push-boys");
    boysCharacter.classList.add("boys-glow");

    if (boysAttackStep === 0) {

        boysCharacter.src = boysPunchImg;
        boysAttackStep = 1;

    } else {

        boysCharacter.src = superBoysImg;
        boysAttackStep = 0;

    }

    setTimeout(() => {

        boysCharacter.classList.remove("push-boys");
        boysCharacter.classList.remove("boys-glow");

        boysCharacter.src = boysNormalImg;

        boysAnimating = false;

    }, 1200);

}

    boysCharacter.classList.add("push-boys");
    boysCharacter.classList.add("boys-glow");

    // Bergantian Punch -> Super -> Punch -> Super
    if (boysAttackStep === 0) {

        boysCharacter.src = boysPunchImg;
        boysAttackStep = 1;

    } else {

        boysCharacter.src = superBoysImg;
        boysAttackStep = 0;

    }

    // Girls panik
    girlsCharacter.src = girlsPanicImg;

    // Kembali normal
    setTimeout(() => {

        boysCharacter.classList.remove("push-boys");
        boysCharacter.classList.remove("boys-glow");

        boysCharacter.src = boysNormalImg;

    }, 800);

    boysClicksCount++;

    boysPercent += 1;
    girlsPercent -= 1;

    updateDisplay();

    if (boysPercent >= 100) {

        setTimeout(() => {
            showWinner("🎉 BOYS WIN!!");
        }, 100);

    }
}



// girlsZone.addEventListener("click", girlsAttack);
// boysZone.addEventListener("click", boysAttack);

// =========================
// KEYBOARD CONTROL
// =========================

document.addEventListener("keydown", (e) => {

    // Boys +1
    if (e.key === "1") {
        boysAttack();
    }

    // Girls +1
    if (e.key === "2") {
        girlsAttack();
    }


});



// =========================
// UPDATE DISPLAY
// =========================
function updateDisplay() {

    // SCORE MENANG
    girlsScoreText.textContent = girlsWins;
    boysScoreText.textContent = boysWins;

    // CLICK SAAT INI
    girlsClicks.textContent = girlsClicksCount;
    boysClicks.textContent = boysClicksCount;

    // UKURAN AREA
    girlsSide.style.width = girlsPercent + "%";
    boysSide.style.width = boysPercent + "%";

    // GARIS TENGAH IKUT BERGERAK
    if (battleLine) {
        battleLine.style.left = girlsPercent + "%";
    }
    
}




// SHOW WINNER
function showWinner(text) {

    const popup = document.getElementById("winnerPopup");
    const winnerImage = document.getElementById("winnerImage");

    popup.style.display = "flex";

    if (text.includes("GIRLS")) {

    girlsWins++;

    winnerImage.src = girlsWinnerImg;

    // ukuran khusus girls
    winnerImage.style.width = "450px";

} else {

    boysWins++;

    winnerImage.src = boysWinnerImg;

    // ukuran khusus boys
    winnerImage.style.width = "700px";
}

    updateDisplay();

    setTimeout(() => {

        girlsPercent = 50;
        boysPercent = 50;

        girlsClicksCount = 0;
        boysClicksCount = 0;

        girlsCharacter.src = girlsNormalImg;
        boysCharacter.src = boysNormalImg;

        updateDisplay();

        popup.style.display = "none";

    }, 1000);
}


