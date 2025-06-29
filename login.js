document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const storedUser = JSON.parse(localStorage.getItem("waveUser"));

    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
        alert("Invalid credentials. Please try again.");
        return;
    }

    // Save session
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedInUser", storedUser.username);

    alert(`Welcome back, ${storedUser.username}!`);
    window.location.href = "https://7ds-adarsh.github.io/wave2.0/home.html";
});
