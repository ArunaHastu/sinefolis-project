const form = document.getElementById('feedbackForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    alert("Feedback Terkirim! Terima kasih atas masukan Anda.");
    
    form.reset();
});
