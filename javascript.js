        const form = document.getElementById("ai-survey");
        const successMessage = document.getElementById("success-message");
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const formData = new FormData(form);
            const results = {
                name: formData.get("user_name") || "Anonymous",
                ageGroup: formData.get("age_group"),
                aiUsage: formData.get("ai_usage"),
                interests: formData.getAll("interests"),
                comments: formData.get("user_comments")
            };
            console.log("Survey Submitted:", results);
            form.reset();
            form.style.display = "none";
            successMessage.style.display = "block";
        });
