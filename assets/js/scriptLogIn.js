const togglePasswordBtn = document.getElementById("toggle-password");
        const passwordInput = document.getElementById("password");

        togglePasswordBtn.addEventListener("click", function() {
            const isPasswordHidden = passwordInput.type === "password";
            passwordInput.type = isPasswordHidden ? "text" : "password";
            togglePasswordBtn.textContent = isPasswordHidden ? "Hide Password" : "Show Password";
        });

        // Validación de inicio de sesión
        document.getElementById("login-form").addEventListener("submit", function(event) {
            event.preventDefault(); // Evitar el envío del formulario

            const username = document.getElementById("username").value;
            const password = passwordInput.value;
            const errorMessage = document.getElementById("error-message");

            // Credenciales correctas
            const correctUsername = "LagartoBalloon";
            const correctPassword = "vivipolo";

            if (username === correctUsername && password === correctPassword) {
                errorMessage.style.display = "none"; // Ocultar el mensaje de error
                window.location.href = "index.html"; // Redirigir a index.html
            } else {
                errorMessage.style.display = "block"; // Mostrar el mensaje de error
            }
        });