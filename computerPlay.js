function computerPlay() {
    var opt = Math.round(Math.random() * (3-1+1) + 1);
    var result;
    if (opt == 1) {
        result = "Rock";
        return result;
    } else if (opt == 2) {
        result = "Paper";
        return result;
    } else {
        result = "Scissors";
        return result;
    }
};