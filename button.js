
        document.addEventListener("DOMContentLoaded", () => {
            const toggleBtn = document.getElementById("themeToggle");

            toggleBtn.addEventListener("click", () => {
                document.body.classList.toggle("light-mode");

                toggleBtn.textContent =
                    document.body.classList.contains("light-mode") ? "☀️" : "🌙";
            });
        });

