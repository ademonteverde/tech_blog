const logoutFormHandler = async (event) => {
  event.preventDefault();

  try {
      const response = await fetch("/api/user/logout", {
          method: "POST",
          headers: { "Content-Type": "application/json" }
      });

      console.log(response.logged_in);

      if (response.ok) {
          document.location.replace('/');
          alert('Logged Out');

      } else {
          alert('Failed to log Out.');

      }
  } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred while logging out.');
  }
};
document.getElementById('logout')?.addEventListener('click', logoutFormHandler)