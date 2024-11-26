document.getElementById('guestForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const roomType = document.getElementById('roomType').value;

    if (firstName && lastName && email && phone && roomType) {
        alert(`Guest ${firstName} ${lastName} registered successfully!`);
        this.reset();
    } else {
        alert('Please fill out all fields.');
    }
});
