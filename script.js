const display = document.getElementById('display');

// डिस्प्लेमध्ये व्हॅल्यू जोडण्यासाठी
function appendValue(value) {
    if (display.value === 'Error') {
        display.value = '';
    }
    display.value += value;
}

// स्क्रीन साफ करण्यासाठी ('C' बटण)
function clearDisplay() {
    display.value = '';
}

// उत्तर काढण्यासाठी ('=' बटण)
function calculateResult() {
    try {
        // सुरक्षिततेसह गणितीय समीकरण सोडवणे
        let result = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

// BONUS: कीबोर्ड सपोर्ट (Keyboard Support)
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    // नंबर आणि ऑपरेटर की दाबल्यास
    if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-') {
        appendValue(key);
    } else if (key === '*') {
        appendValue('*');
    } else if (key === '/') {
        event.preventDefault(); // ब्राऊझरचे डिफहल्ट शॉर्टकट रोखण्यासाठी
        appendValue('/');
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculateResult();
    } else if (key === 'Backspace') {
        // एक एक अक्षर मागे नेण्यासाठी
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    }
});