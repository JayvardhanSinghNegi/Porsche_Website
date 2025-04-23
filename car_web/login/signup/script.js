document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Login Successful (placeholder)");
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const pw = document.getElementById("password").value;
      const repw = document.getElementById("repassword").value;
      if (pw !== repw) {
        alert("Passwords do not match!");
        return;
      }
      alert("Signup Successful (placeholder)");
    });
  }
});
