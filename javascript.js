function enterTheValues(value) {
    document.getElementById("number-Buttons").value += value;

}


function reset() {
    document.getElementById("number-Buttons").value = '';
}


function result() {
    var x = document.getElementById("number-Buttons").value;
    var y = eval(x);
    document.getElementById("number-Buttons").value = y;

}