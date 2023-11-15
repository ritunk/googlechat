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

document.querySelector('.send-btn').addEventListener('click', function() {
    // Get the message input value
    var messageInput = document.getElementById('message-input');
    var message = messageInput.value;

    // Check if the message is not empty
    if (message.trim() !== '') {
        // Create a new message element
        var newMessage = document.createElement('div');
        newMessage.className = 'message';
        newMessage.textContent =  "how can i help you";

        // Append the new message to the message display
        var messageDisplay = document.querySelector('.message-display');
        messageDisplay.appendChild(newMessage);

        // Clear the message input
        messageInput.value = '';
    }
});



