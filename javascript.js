let score = 0;
let cursorCost =15;
let cursors = 0;
let grandmaCost = 100;
let grandmas = 0;
let clickingPower = 1;
let ovenCost = 1000;
let ovens = 0;

(() => {


    document.getElementById(`cookieImage`).addEventListener("click", () => {

        function addToScore() {
            score += 1;
            document.getElementById(`score`).innerHTML = score;
        } addToScore(clickingPower)
    })

    document.getElementById(`cursorImage`).addEventListener(`click`, () => {
        function buyCursor () {
            if (score >= cursorCost) {
                score = score - cursorCost;
                cursors = cursors +1;
                cursorCost = Math.round(cursorCost * 1.15);

                document.getElementById(`score`).innerHTML = score;
                document.getElementById("cursorcost").innerHTML = cursorCost;
                document.getElementById(`cursors`).innerHTML = cursors;
                updateCookiesPerSecond();
            }
        } buyCursor();

        document.getElementById(`grannyImage`).addEventListener(`click`, () => {
            function buyGrandma() {
                if (score >= grandmaCost) {
                    score = score - grandmaCost;
                    grandmas = grandmas + 1;
                    grandmaCost = Math.round(grandmaCost * 1.15);

                    document.getElementById(`score`).innerHTML = score;
                    document.getElementById("grandmacost").innerHTML = grandmaCost;
                    document.getElementById(`grandmas`).innerHTML = grandmas;
                    updateCookiesPerSecond();
                }
            } buyGrandma();

        })

        document.getElementById(`grannyImage`).addEventListener(`click`, () => {
            function buyOven() {
                if (score >= ovenCost) {
                    score = score - grandmaCost;
                    oven = ovens + 1;
                    ovenCost = Math.round(ovenCost * 1.15);

                    document.getElementById(`score`).innerHTML = score;
                    document.getElementById("ovencost").innerHTML = grandmaCost;
                    document.getElementById(`ovens`).innerHTML = grandmas;
                    updateCookiesPerSecond();
                }
            } buyOven();

        })

        function updateCookiesPerSecond() {
            cookiesPerSecond = cursors + grandmas *5;
            document.getElementById(`cookiespersecond`).innerHTML = cookiesPerSecond;
        }

        setInterval(function () {
            score = score + cursors;
            score = score + grandmas * 5;
            document.getElementById(`score`).innerHTML = score;

            document.title = score + "cookies - Cookie Clicker";
            }, 1000) // 1000 ms = 1 second
    })


})();
