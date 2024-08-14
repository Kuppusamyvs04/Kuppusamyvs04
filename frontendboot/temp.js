function validateSearchForm(event) {
    var query = document.getElementById('searchQuery').value.trim();
    
    if (query === '') {
        event.preventDefault(); // Prevent form submission
        alert('Please enter a search details'); // Show an alert
        return false;
    }

    // Optional: Add more validation rules using regular expressions here
    // Example:
    // var regex = /^[a-zA-Z0-9\s]+$/; // Allows only alphanumeric characters and spaces
    // if (!regex.test(query)) {
    //     event.preventDefault();
    //     alert('Invalid search query. Please enter a valid title, author, or ISBN.');
    //     return false;
    // }

    return true; // Allow form submission if validation passes
}