const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("registrationForm");
const error = document.getElementById("error");

function showError(input, message) {
  //alert(message);
  error.innerHTML = message;
  input.focus();
}

const patterns = {
  lowercase: /[a-z]/,
  uppercase: /[A-Z]/,
  number: /[0-9]/,
  special: /[!@#$%^&*]/,
};

function checkPasswordStrength(password) {
  let strength = 0;

  if (password.length >= 8) strength += 25;

  if (patterns.lowercase.test(password)) strength += 25;
  if (patterns.uppercase.test(password)) strength += 25;
  if (patterns.number.test(password)) strength += 25;

  // Return strength level
  if (strength <= 25) return "Weak";
  if (strength <= 50) return "Medium";
  if (strength <= 75) return "Strong";
  return "Very Strong";
}

function validateForm(e) {
  e.preventDefault();

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === "") {
    showError(lcUserName, "Username is required");
    return;
  }

  if (passwordValue === "") {
    showError(password, "Password is required");
    return;
  }
  if (!patterns.lowercase.test(passwordValue)) {
    showError(password, "Password must include at least one lowercase letter");
    return;
  }

  if (!patterns.uppercase.test(passwordValue)) {
    showError(password, "Password must include at least one uppercase letter");
    return;
  }

  if (!patterns.number.test(passwordValue)) {
    showError(password, "Password must include at least one number");
    return;
  }

  const userData = {
    username: usernameValue,
    password: passwordValue,
  };

  const lcUserName = localStorage.getItem("username");
  const lcPassword = localStorage.getItem("password");

  if (lcUserName !== lcUserName && password !== lcPassword) {
    showError({ lcUserName, password }, "User doesn't exist");
  } else {
    console.log("Form submitted with data:", userData);
    console.log("Stored data:", {});
    window.location.href = "/LAYOUT/index.html";
  }
  form.reset();
}

form.addEventListener("submit", validateForm);
