let display = document.getElementById("display");

// Add numbers/operators
function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        if (display.value === "") return;
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}