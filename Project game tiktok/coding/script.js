const girlsSide = document.getElementById("girlsSide");
const boysSide = document.getElementById("boysSide");

const girlsScoreText = document.getElementById("girlsScore");
const boysScoreText = document.getElementById("boysScore");

const girlsClicks = document.getElementById("girlsClicks");
const boysClicks = document.getElementById("boysClicks");

const percentage = document.getElementById("percentage");
const battleLine = document.getElementById("battleLine");

const girlsZone = document.getElementById("girlsZone");
const boysZone = document.getElementById("boysZone");

// CHARACTER
const boysCharacter = document.getElementById("boysCharacter");
const girlsCharacter = document.getElementById("girlsCharacter");

// BOYS
const boysNormalImg = "boys1.png";
const boysPanicImg = "Boys_panic.png";

// GIRLS
const girlsNormalImg = "girls.png";
const girlsPanicImg = "girls_panic.png";

// SKOR MENANG
let girlsWins = 0;
let boysWins = 0;

// JUMLAH CLICK RONDE
let girlsClicksCount = 0;
let boysClicksCount = 0;

// PERSENTASE BATTLE
let girlsPercent = 50;
let boysPercent = 50;

updateDisplay();



function girlsAttack() {

    if (girlsPercent >= 100) return;

    // ANIMASI GIRLS MAJU
    girlsCharacter.classList.add("push-girls");
    girlsCharacter.classList.add("girls-glow");

    setTimeout(() => {
    girlsCharacter.classList.remove("push-girls");
    girlsCharacter.classList.remove("girls-glow");
    }, 300);

    girlsCharacter.src = girlsNormalImg;
    boysCharacter.src = boysPanicImg;

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

    // ANIMASI BOYS MAJU
    boysCharacter.classList.add("push-boys");
    boysCharacter.classList.add("boys-glow");

    setTimeout(() => {
    boysCharacter.classList.remove("push-boys");
    boysCharacter.classList.remove("boys-glow");
    }, 300);

    boysCharacter.src = boysNormalImg;
    girlsCharacter.src = girlsPanicImg;

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

girlsZone.addEventListener("click", girlsAttack);
boysZone.addEventListener("click", boysAttack);


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
    const winnerText = document.getElementById("winnerText");

    winnerText.innerText = text;
    popup.style.display = "flex";

    // TAMBAH SCORE MENANG
    if (text.includes("GIRLS")) {
        girlsWins++;
    } else {
        boysWins++;
    }

    updateDisplay();

    setTimeout(() => {

        // RESET RONDE
        girlsPercent = 50;
        boysPercent = 50;

        girlsClicksCount = 0;
        boysClicksCount = 0;

        // KEMBALI NORMAL
        boysCharacter.src = boysNormalImg;
        girlsCharacter.src = girlsNormalImg;

        updateDisplay();

        popup.style.display = "none";

    }, 3000);
}
