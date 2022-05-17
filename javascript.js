let score = 0;
let cursorCost = 15;
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
        }

        addToScore(clickingPower)
    })

    document.getElementById(`cursorShop`).addEventListener(`click`, () => {
        function buyCursor() {
            if (score >= cursorCost) {
                score = score - cursorCost;
                cursors = cursors + 1;
                cursorCost = Math.round(cursorCost * 1.15);

                document.getElementById(`score`).innerHTML = score;
                document.getElementById("cursorcost").innerHTML = cursorCost;
                document.getElementById(`cursors`).innerHTML = cursors;
                updateCookiesPerSecond();
            }
        }

        buyCursor();

        document.getElementById(`grannyShop`).addEventListener(`click`, () => {
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
            }

            buyGrandma();

        })

        document.getElementById(`ovenShop`).addEventListener(`click`, () => {
            function buyOven() {
                if (score >= ovenCost) {
                    score = score - grandmaCost;
                    ovens = ovens + 1;
                    ovenCost = Math.round(ovenCost * 1.15);

                    document.getElementById(`score`).innerHTML = score;
                    document.getElementById("ovencost").innerHTML = ovenCost;
                    document.getElementById(`ovens`).innerHTML = ovens;
                    updateCookiesPerSecond();
                }
            }

            buyOven();

        })

        function updateCookiesPerSecond() {
            cookiesPerSecond = cursors + grandmas * 5 + ovens * 70;
            document.getElementById(`cookiespersecond`).innerHTML = cookiesPerSecond;
        }

        function loadGame() {
            let savedGame = JSON.parse(localStorage.getItem("gameSave"));
            if (typeof savedGame.score !== "undefined") score = savedGame.score;
            if (typeof savedGame.clickingPower !== "undefined") clickingPower = savedGame.clickingPower;
            if (typeof savedGame.cursorCost !== "undefined") cursorCost = savedGame.cursorCost;
            if (typeof savedGame.cursors !== "undefined") cursors = savedGame.cursors;
            if (typeof savedGame.grandmaCost !== "undefined") grandmaCost = savedGame.grandmaCost;
            if (typeof savedGame.grandmas !== "undefined") grandmas = savedGame.grandmas;
            if (typeof savedGame.ovenCost !== "undefined") ovenCost = savedGame.ovenCost;
            if (typeof savedGame.ovens !== "undefined") ovens = savedGame.ovens;
        }

        document.getElementById(`saveGame`).addEventListener(`click`, () => {
            function saveGame() {
                let gameSave = {
                    score: score,
                    clickingPower: clickingPower,
                    cursorCost: cursorCost,
                    cursors: cursors,
                    grandmaCost: grandmaCost,
                    grandmas: grandmas,
                    ovenCost: ovenCost,
                    ovens: ovens
                };
                localStorage.setItem("gameSave", JSON.stringify(gameSave));
            } setInterval(function () {
                saveGame();
            }, 30000);//30000ms = 30 seconds
        })

        window.unload = function () {
            loadGame();
            updateCookiesPerSecond();
            document.getElementById(`score`).innerHTML = score;
            document.getElementById("cursorcost").innerHTML = cursorCost;
            document.getElementById(`cursors`).innerHTML = cursors;
            document.getElementById(`grandmacost`).innerHTML = grandmaCost;
            document.getElementById("grandmas").innerHTML = grandmas;
            document.getElementById(`ovencost`).innerHTML = ovenCost;
            document.getElementById(`ovens`).innerHTML = ovens;
        }

        setInterval(function () {
            score = score + cursors;
            score = score + grandmas * 5;
            score = score + ovens * 70;
            document.getElementById(`score`).innerHTML = score;

            document.title = score + "cookies - Cookie Clicker";
        }, 1000) // 1000 ms = 1 second

    })
})();
