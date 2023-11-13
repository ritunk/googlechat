document.querySelector('.options-icon').addEventListener('click', function() {
    var dropdown = document.querySelector('.emoji-icons-dropdown');
    dropdown.style.visibility = dropdown.style.visibility === 'hidden' ? 'visible' : 'hidden';
});

function handleButtonClick(clickedButton) {
    // Remove the 'active' class from all buttons
    document.querySelectorAll('.toggle-button').forEach(function(button) {
        button.classList.remove('active');
    });

    // Add the 'active' class to the clicked button
    clickedButton.classList.add('active');
}


