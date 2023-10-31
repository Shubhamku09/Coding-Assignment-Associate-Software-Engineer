document.querySelector('.buttons').addEventListener('click', function(event) {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
        const action = target.getAttribute('data-action');
        const displayValue = document.getElementById('display').value;
        if (action === 'clear') {
            clearDisplay(); // Handle clear button click
        }// else {
        //     appendToDisplay(target.textContent);
        // }
    }
});

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
