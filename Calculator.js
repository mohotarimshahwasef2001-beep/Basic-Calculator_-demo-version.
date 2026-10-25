
function addValue() {
    let num1 = Number(document.getElementById("firstVal").value);
    let num2 = Number(document.getElementById("secondVal").value);

    let addition = num1 + num2;

    document.getElementById("Output").innerHTML =
        "<h2>Result</h2>" +
        "Addition: " + addition;
}

function subtractValue() {
    let num1 = Number(document.getElementById("firstVal").value);
    let num2 = Number(document.getElementById("secondVal").value);

    let subtraction = num1 - num2;

    document.getElementById("Output").innerHTML =
        "<h2>Result</h2>" +
        "Subtraction: " + subtraction;
}

function multiValue() {
    let num1 = Number(document.getElementById("firstVal").value);
    let num2 = Number(document.getElementById("secondVal").value);

    let multi = num1 * num2;

    document.getElementById("Output").innerHTML =
        "<h2>Result</h2>" +
        "Multiplication: " + multi;
}

function divValue() {
    let num1 = Number(document.getElementById("firstVal").value);
    let num2 = Number(document.getElementById("secondVal").value);

    let div = num1/ num2;

    document.getElementById("Output").innerHTML =
        "<h2>Result</h2>" +
        "Divition: " + div;
}