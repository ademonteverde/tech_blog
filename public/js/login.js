const loginFormHandler = async (event) => {
  alert('logging in')
  event.preventDefault();
  const email = document.querySelector('#email-login');
  const passwordEl = document.querySelector('#password-login');
  console.log(email)
  const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
          email: email.value,
          password: passwordEl.value
      }),
      headers: { 'Content-Type': 'application/json' },
  });


  if (response.ok) {

      document.location.replace('api/dashboard');
  } else {
  }

};

document.getElementById('login-btn')?.addEventListener('click', loginFormHandler)