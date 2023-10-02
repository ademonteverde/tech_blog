const signupFormHandler = async (event) => {
    event.preventDefault();

    // Get input values
    const username = document.querySelector('#username-signup').value;
    const email = document.querySelector('#email-signup').value;
    const password = document.querySelector('#password-signup').value;

    // Check if any of the fields are empty
    if (!username || !email || !password) {
        alert('All fields must be filled out');
        return; 
    }

    // Send the registration request
    const response = await fetch('/api/user/', {
        method: 'POST',
        body: JSON.stringify({
            username,
            email,
            password
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
        alert('Signed Up');
        console.log("Signed up");
    } else {
        const errorMessage = await response.text();
        alert(`Failed to sign up: ${errorMessage}`);
    }
};

document.querySelector('.signup-form')?.addEventListener('submit', signupFormHandler);
