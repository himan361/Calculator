let history = [];

function clearDisplay() {
    document.getElementById('display').textContent = '0';
}

function appendCharacter(char) {
    const display = document.getElementById('display');
    if (display.textContent === '0') {
        display.textContent = char;
    } else {
        display.textContent += char;
    }
}

function backspace() {
    const display = document.getElementById('display');
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === '') {
        display.textContent = '0';
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.textContent);
        addHistory(display.textContent + " = " + result);
        display.textContent = result;
    } catch (e) {
        display.textContent = 'Error';
    }
}

function calculateSquareRoot() {
    const display = document.getElementById('display');
    try {
        const result = Math.sqrt(parseFloat(display.textContent));
        addHistory("√" + display.textContent + " = " + result);
        display.textContent = result;
    } catch (e) {
        display.textContent = 'Error';
    }
}

function calculatePercentage() {
    const display = document.getElementById('display');
    try {
        const result = parseFloat(display.textContent) / 100;
        addHistory(display.textContent + "% = " + result);
        display.textContent = result;
    } catch (e) {
        display.textContent = 'Error';
    }
}

function addHistory(entry) {
    history.push(entry);
    updateHistoryPanel();
}

function updateHistoryPanel() {
    const historyPanel = document.getElementById('history');
    historyPanel.innerHTML = history.map(entry => `<div>${entry}</div>`).join('');
}
