// Greeting already here...

// Simple contact form validation and fake submission
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name && email && message) {
      document.getElementById('formMessage').textContent = 'Thank you for reaching out!';
      form.reset();
    } else {
      document.getElementById('formMessage').textContent = 'Please fill out all fields.';
    }
  });
}
