let score = 0;
let cursorCost =15;
let cursors = 0;


(() => {


    document.getElementById(`mainBtn`).addEventListener("click", () => {

        function addToScore() {
            score += 1;
            document.getElementById(`score`).innerHTML = score;

        } addToScore()
    })

    document.getElementById(`buy-cursor`).addEventListener(`click`, () => {
        function buyCursor () {
            if (score >= cursorCost) {
                score = score - cursorCost;
                cursors = cursors +1;
                cursorCost = Math.round(cursorCost * 1.15);

                document.getElementById(`score`).innerHTML = score;
                document.getElementById("cursorcost").innerHTML = cursorCost;
                document.getElementById(`cursors`).innerHTML = cursors;
            }
        } buyCursor()
    })


})();
