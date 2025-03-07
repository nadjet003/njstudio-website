document.addEventListener("DOMContentLoaded", function() {
    const commentInput = document.getElementById("comment");
    const confirmBtn = document.querySelector(".confirm");
    const cancelBtn = document.querySelector(".cancel");
    const feedbackSection = document.querySelector(".feedback");
    const stars = document.querySelectorAll(".star");
    const ratingMessage = document.getElementById("rating-message");

    // Fonction pour ajouter un commentaire
    confirmBtn.addEventListener("click", function() {
        let comment = commentInput.value.trim();

        if (comment === "") {
            alert("Veuillez écrire un commentaire avant de confirmer.");
        } else {
            let newComment = document.createElement("p");
            newComment.textContent = "⭐ " + comment;
            newComment.classList.add("user-comment");
            feedbackSection.appendChild(newComment);
            commentInput.value = "";
        }
    });

    // Fonction pour annuler le commentaire
    cancelBtn.addEventListener("click", function() {
        commentInput.value = "";
    });

    // Gestion des étoiles
    stars.forEach((star, index) => {
        star.addEventListener("mouseover", function() {
            stars.forEach((s, i) => {
                s.style.color = i <= index ? "gold" : "gray";
            });
        });

        star.addEventListener("mouseout", function() {
            stars.forEach((s) => {
                if (!s.classList.contains("active")) {
                    s.style.color = "gray";
                }
            });
        });

        star.addEventListener("click", function() {
            stars.forEach((s, i) => {
                s.classList.toggle("active", i <= index);
            });
            ratingMessage.textContent = `Vous avez noté ${index + 1} étoile(s).`;
        });
    });
});

