document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Intercept browser submission pipeline

    // DOM Value references
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorBanner = document.getElementById('errorMessage');

    // Reset error element visibility
    errorBanner.classList.add('hidden');
    errorBanner.innerHTML = "";

    let errorMessages = [];

    // 1. Structural Field Presence Validations
    if (!fullName || !email || !phone || !message) {
        errorMessages.push("All input form fields are mandatory and cannot be empty.");
    }

    // 2. Strict RegEx matching valid standard Emails
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
        errorMessages.push("Please provide a technically structurally correct Email identity.");
    }

    // 3. String numeric sequence configuration checks
    const phoneRegex = /^[0-9]+$/;
    if (phone && !phoneRegex.test(phone)) {
        errorMessages.push("The telephone context strictly limits characters explicitly to digits (0-9).");
    }

    // If validations reveal issues, block transaction flow and emit messages
    if (errorMessages.length > 0) {
        errorBanner.innerHTML = errorMessages.join('<br>');
        errorBanner.classList.remove('hidden');
        return;
    }

    // Success response
    alert("Form entries successfully approved and prepared for network dispatch transmission!");
    document.getElementById('contactForm').reset();
});