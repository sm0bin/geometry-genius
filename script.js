function getInputById(inputId) {
    const element = document.getElementById(inputId);
    const elementValue = parseFloat(element.value);
    element.value = "";
    return elementValue;
}
// function getInputById(inputId) {
//     const element = document.getElementById(inputId);
//     const elementValue = parseFloat(element.value);
//     return elementValue;
// }

function setTextById(fieldId, newValue) {
    const element = document.getElementById(fieldId);
    element.innerText = newValue;
}


function setTriangleArea() {
    const base = getInputById('triangle-base');
    const height = getInputById('triangle-height');

    const area = 0.5 * base * height;
    setTextById('triangle-area', area);
}

function setRectangleArea() {
    const width = getInputById('rectangle-width');
    const length = getInputById('rectangle-length');

    const area = width * length;
    setTextById('rectangle-area', area);
}

function setParallelogramArea() {
    const base = getInputById('parallelogram-base');
    const height = getInputById('parallelogram-height');

    const area = base * height;
    setTextById('parallelogram-area', area);
}

function setRhombusArea() {
    const d1 = getInputById('rhombus-d1');
    const d2 = getInputById('rhombus-d2');

    const area = 0.5 * d1 * d2;
    setTextById('rhombus-area', area);
}

function setPentagonArea() {
    const p = getInputById('pentagon-p');
    const b = getInputById('pentagon-b');

    const area = 0.5 * p * b;
    setTextById('pentagon-area', area);
}

function setEllipseArea() {
    const a = getInputById('ellipse-a');
    const b = getInputById('ellipse-b');

    const area = Math.PI * a * b;
    const areaFixed = area.toFixed(2);
    setTextById('ellipse-area', areaFixed);
}
