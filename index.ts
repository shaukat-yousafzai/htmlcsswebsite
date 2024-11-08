const form = document.getElementById('contact-form') as HTMLFormElement;

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Extract form data using FormData
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    // Send POST request using fetch API
    const response = await fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Set correct content type
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert('Email sent successfully!');
      form.reset();
    } else {
      alert('Error sending email. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error sending email. Please try again.');
  }
});