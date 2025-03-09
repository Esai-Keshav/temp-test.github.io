const text_box = document.getElementById('text_box');
const to_F = document.getElementById('to_F');
const to_C = document.getElementById('to_C');
const result = document.getElementById('result');


let temp;

function convert() {
    if (to_F.checked) {
        temp = Number(text_box.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp + 'F';
        // result.textContent = 'to F';
    }
    else if (to_C.checked) {
        // result.textContent = 'to C';
        temp = Number(text_box.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp + 'C'
    }

    else {
        result.textContent = 'Select unit';
    }
}