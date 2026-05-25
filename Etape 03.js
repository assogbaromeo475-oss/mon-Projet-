// ======================================
// ANIMATION D'OUVERTURE
// ======================================

window.addEventListener("load", () => {

    setTimeout(() => {

        // Cache l'animation
        document.getElementById("snow-loader").style.display = "none";

        // Affiche le site
        document.getElementById("main-content").style.display = "block";

    }, 5000);

});


// ======================================
// AJOUTER UNE MUSIQUE
// ======================================

function uploadMusic() {

    const input = document.getElementById("audioUpload");
    const container = document.getElementById("musicContainer");

    const file = input.files[0];

    // Vérification
    if (!file) {

        alert("Choisis une musique");
        return;
    }

    // Création URL du fichier
    const musicURL = URL.createObjectURL(file);

    // Création carte musique
    const card = document.createElement("div");

    card.classList.add("music-card");

    // Contenu HTML
    card.innerHTML = `
    
        <h3>${file.name}</h3>

        <audio controls>
            <source src="${musicURL}" type="audio/mp3">
        </audio>

        <a href="${musicURL}" download="${file.name}">
            Télécharger
        </a>

    `;

    // Ajout dans la bibliothèque
    container.appendChild(card);

    // Message succès
    alert("Musique ajoutée avec succès !");

}


// ======================================
// RECHERCHE DE MUSIQUE
// ======================================

const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        const cards = document.querySelectorAll(".music-card");

        cards.forEach(card => {

            const title = card
                .querySelector("h3")
                .textContent
                .toLowerCase();

            if (title.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });
}
