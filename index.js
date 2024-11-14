const apiKey = "MjU8UfUnVbzzDQvbmRrpEwgw1l5TOh6asOYdstB6JExSlixnb4fs0XOa";

const loadImagesBtn = document.getElementById("loadImages");

loadImagesBtn.addEventListener("click", loadImages);

function loadImages() {
  // URL dell'API con query "nature"
  const url = "https://api.pexels.com/v1/search?query=nature"; // Puoi sostituire "nature" con qualsiasi altra parola chiave

  // autorizzazione
  const authorization = {
    headers: {
      Authorization: apiKey // Imposta l'API key come header di autorizzazione
    }
  };

  // richiesta all'API di Pexels
  fetch(url, authorization)
    .then((response) => {
      if (response.ok) {
        return response.json(); // Converte la risposta in JSON
      } else {
        throw new Error("Errore nella richiesta");
      }
    })
    .then((obj) => {
      displayImages(obj.photos); // Chiama la funzione per mostrare le immagini
    })
    .catch((error) => {
      console.error("Errore:", error); // Mostra l'errore in console
    });
}

// Funzione per mostrare le immagini nella pagina
function displayImages(photos) {
  const container = document.getElementById("container"); // Seleziona il contenitore delle immagini
  container.innerHTML = ""; // Svuota il contenuto del contenitore

  // Cicla attraverso ogni immagine e crea il markup per mostrarla
  photos.forEach((photo) => {
    const col = document.createElement("div");
    const row = document.getElementById("row");
    col.classList.add("col-md-6");

    col.innerHTML = `
      <div class="card mb-4 shadow-sm">
        <img src="${photo.src.medium}" class="bd-placeholder-img card-img-top" />
        <div class="card-body">
          <h5 class="card-title">${photo.photographer}</h5>
          <p class="card-text">Foto di ${photo.photographer}</p>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}
