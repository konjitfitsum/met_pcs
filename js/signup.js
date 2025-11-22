document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const pass = document.getElementById("signupPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if email already exists
  if (users.some((u) => u.email === email)) {
    alert("Email already registered.");
    return;
  }

  users.push({ name, email, password: pass });

  localStorage.setItem("users", JSON.stringify(users));

  alert("Sign up successful!");
  window.location.href = "login.html";
});
