let input = document.getElementById("input");

function appendValue(value) {
    input.value += value;
}

function clearInput() {
    input.value = "";
}

function backspace() {
    input.value = input.value.slice(0, -1);
}

function calculate() {
    try {
        input.value = eval(input.value);
        if (input.value === Infinity) {
            input.value = 'Infinity';
        } else if (isNaN(input.value)) {
            input.value = 'NaN';
        }
    } catch (error) {
        input.value = 'Error';
    }
}
function calculateAverage(numbers) {
    if (!numbers || numbers.length === 0) {
        return null;
    }

    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += parseFloat(numbers[i]);
    }

    return sum / numbers.length;
}


function Average() {
    var numbersString = input.value;
    var numbers = numbersString.split(/[+\-*/]/).filter(function (item) {
        return item.trim(); // Filter out empty strings
    });
    var avg = calculateAverage(numbers);
    input.value = avg;
}


// Numbers
document.getElementById("block0").addEventListener("click", () => appendValue("0"));
document.getElementById("block1").addEventListener("click", () => appendValue("1"));
document.getElementById("block2").addEventListener("click", () => appendValue("2"));
document.getElementById("block3").addEventListener("click", () => appendValue("3"));
document.getElementById("block4").addEventListener("click", () => appendValue("4"));
document.getElementById("block5").addEventListener("click", () => appendValue("5"));
document.getElementById("block6").addEventListener("click", () => appendValue("6"));
document.getElementById("block7").addEventListener("click", () => appendValue("7"));
document.getElementById("block8").addEventListener("click", () => appendValue("8"));
document.getElementById("block9").addEventListener("click", () => appendValue("9"));

// Artithimetics Operation
document.getElementById("plus").addEventListener("click", () => appendValue("+"));
document.getElementById("minus").addEventListener("click", () => appendValue("-"));
document.getElementById("multiply").addEventListener("click", () => appendValue("*"));
document.getElementById("divide").addEventListener("click", () => appendValue("/"));
document.getElementById("dot").addEventListener("click", () => appendValue("."));

document.getElementById("Avg").addEventListener("click", Average);

// Clrear
document.getElementById("clr").addEventListener("click", clearInput);
document.getElementById("backspace").addEventListener("click", backspace);

// Calculate All Values
document.getElementById("ans").addEventListener("click", calculate);

