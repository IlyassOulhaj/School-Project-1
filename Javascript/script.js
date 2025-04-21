document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    let userEmail;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Storing the email in the variable and showing it in the console
        userEmail = document.getElementById('Email').value;
        console.log('Email stored:', userEmail);
        
        // Clear the email input field
        contactForm.reset();
        alert('Form submitted successfully!');	
        alert('Thank you for your interest! We will keep you updated with the latest news and updates');

        // Prompt for customer feedback
        const customerFeedback = prompt("How did you like our services? Please provide your feedback below:");
        console.log('Customer Feedback : ', customerFeedback);
    });
});