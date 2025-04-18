// Text change functionality
document.addEventListener('DOMContentLoaded', function() {
    const changeableText = document.getElementById('changeable-text');
    const changeTextBtn = document.getElementById('change-text-btn');

    let textChanged = false;

    changeTextBtn.addEventListener('click', function() {
        if (!textChanged) {
            changeableText.textContent = 'The text has been successfully changed!';
            changeableText.style.color = '#e74c3c';
            changeableText.style.fontWeight = 'bold';
            textChanged = true;
        } else {
            changeableText.textContent = 'Original text content that will be changed.';
            changeableText.style.color = '';
            changeableText.style.fontWeight = '';
            textChanged = false;
        }
    });

    // Style modification functionality
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');
    const resetColorBtn = document.getElementById('reset-color-btn');

    changeColorBtn.addEventListener('click', function() {
        colorBox.style.backgroundColor = '#2ecc71';
        colorBox.style.color = 'white';
        colorBox.style.transform = 'rotate(5deg) scale(1.1)';
        colorBox.textContent = 'Changed!';
    });

    resetColorBtn.addEventListener('click', function() {
        colorBox.style.backgroundColor = '#ecf0f1';
        colorBox.style.color = '';
        colorBox.style.transform = '';
        colorBox.textContent = 'Color Box';
    });

    // Element toggle functionality
    const toggleElementBtn = document.getElementById('toggle-element-btn');
    const toggledElement = document.getElementById('toggled-element');

    toggleElementBtn.addEventListener('click', function() {
        if (toggledElement.classList.contains('hidden')) {
            toggledElement.classList.remove('hidden');
            toggleElementBtn.textContent = 'Hide Element';
        } else {
            toggledElement.classList.add('hidden');
            toggleElementBtn.textContent = 'Show Element';
        }
    });
});