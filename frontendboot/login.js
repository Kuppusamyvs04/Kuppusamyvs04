
    if (errorMessage) {
        alert(errorMessage);
    } else {
        // Set form action based on role
        switch(role) {
            case 'user':
                this.action = 'userdashboard.html';
                break;
            case 'librarian':
                this.action = 'librariandashboard.html';
                break;
            case 'admin':
                this.action = 'admindashboard.html';
                break;
            default:
                this.action = ''; // Fallback
        }

        // Submit the form
        this.submit();
    }

