document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('message');
    const emojiElement = document.getElementById('blushing-emoji');

    const messageText = "Do you want a BJT?";
    let index = 0;
  
    function addLetter() {
      if (index < messageText.length) {
        messageElement.textContent += messageText[index];
        index++;
        if (index == 16)
            setTimeout(addLetter, 5000);
        else
            setTimeout(addLetter, 300);
      } else {
        emojiElement.textContent = '🤡';
      }
    }
  
    setTimeout(addLetter, 1000);
  });
  