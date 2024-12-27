document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    // const passwordError = document.getElementById("passwordError");

    // if (password.value !== confirmPassword.value) {
    //   passwordError.classList.remove("hidden");
    //   return;
    // }

    // passwordError.classList.add("hidden");

    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);

    alert("Registration successful! Data stored in localStorage.");

    console.log("Stored data:", {
      username: localStorage.getItem("username"),
      email: localStorage.getItem("email"),
      password: localStorage.getItem("password"),
    });
  });
