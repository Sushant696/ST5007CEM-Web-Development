const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const error = document.getElementById('error');

console.log("hello world")
function showError(input, message) {
  //alert(message);
  error.innerHTML = message;
  input.focus();
}




function validateForm(e) {
  e.preventDefault();
1
  // get values
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  console.log(usernameValue)

  if (usernameValue === '') {
    showError(username, 'Username is required');
    return;
  }

  if (emailValue === '') {
    showError(email, 'Email is required');
    return;
  }

  if (passwordValue === '') {
    showError(password, 'Password is required');
    return;
  }


  if (confirmPasswordValue === '') {
    showError(confirmPassword, 'Please confirm your password');
    return;
  }

  if (passwordValue !== confirmPasswordValue) {
    showError(confirmPassword, 'Passwords do not match');
    return;
  }

  const userData = {
    username: usernameValue,
    email: emailValue,
    password: passwordValue
  };

  localStorage.setItem("username", usernameValue)
  localStorage.setItem('password', passwordValue)

  alert('Registration successful!');
  console.log('Form submitted with data:', userData);
  console.log("Stored data:", {
    username: localStorage.getItem("username"),
    password: localStorage.getItem("password"),
  });
  window.location.href = "login.html";
  form.reset();
}

form.addEventListener('submit', validateForm);
