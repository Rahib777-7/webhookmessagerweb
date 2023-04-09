const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function() {
  const messageTextbox = document.getElementById('message');
  const message = messageTextbox.value;

  const webhookUrlTextbox = document.getElementById('webhookUrl');
  const webhookUrl = webhookUrlTextbox.value;

  const nicknameTextbox = document.getElementById('nickname');
  const nickname = nicknameTextbox.value;

  const data = {
    content: message,
    username: nickname
  };

  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      alert('Message sent successfully!');
    })
    .catch(function(error) {
      alert('There was a problem sending the message: ' + error.message);
    });

  // Do not clear input fields
  // messageTextbox.value = '';
  // webhookUrlTextbox.value = '';
  // nicknameTextbox.value = '';
});

const darkModeBtn = document.getElementById('darkModeBtn');

darkModeBtn.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});
