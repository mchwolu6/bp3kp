const validUsername = "bp3kp";
const validPassword = "jawa4";

let captchaResult = 0;

function generateCaptcha() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  captchaResult = num1 + num2;
  document.getElementById("captcha-question").innerText = `Berapa hasil ${num1} + ${num2}?`;
}

function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const captcha = parseInt(document.getElementById("captcha-answer").value);

  if (user === validUsername && pass === validPassword && captcha === captchaResult) {
    sessionStorage.setItem("loggedIn", "true");
    showContent();
  } else {
    document.getElementById("error-msg").innerText = "Login gagal. Cek username, password, atau CAPTCHA.";
    generateCaptcha();
  }
}

function logout() {
  sessionStorage.removeItem("loggedIn");
  location.reload();
}

function showContent() {
  document.getElementById("login-box").classList.add("hidden");
  document.getElementById("main-content").classList.remove("hidden");
}

if (sessionStorage.getItem("loggedIn") === "true") {
  showContent();
} else {
  generateCaptcha();
}