document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Save to localStorage (Not secure — demo only!)
    const user = {
        username,
        email,
        password
    };

    localStorage.setItem("waveUser", JSON.stringify(user));

    alert("Registration successful! You can now log in.");
    window.location.href = "https://7ds-adarsh.github.io/wave2.0/login.html";
});
