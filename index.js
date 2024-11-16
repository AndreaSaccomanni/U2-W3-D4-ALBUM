//dichiaro la variabile che contiene la apiKey che verra' utitlizzata per l'autorizzazione
const apiKey = "MjU8UfUnVbzzDQvbmRrpEwgw1l5TOh6asOYdstB6JExSlixnb4fs0XOa";
//dichiaro la variabile che contiene l'url che servira' per la richiesta fetch
const URL = "https://api.pexels.com/v1/search?query=";

//seleziono i due bottoni
const btnPrimary = document.querySelector(".btn.btn-primary");
const btnSecondary = document.querySelector(".btn.btn-secondary");
//assegno la funzione che genera le card all'onclik dei due bottoni
//pero' vanno richiamate tramite un'altra funzione altrimenti si scatenerebbero subito, senza aspettare il click
//il parametro inserito nelle funzioni, sara' la query che fara generare immagini diverse
btnPrimary.onclick = () => handlePexelsApi("cat");
btnSecondary.onclick = () => handlePexelsApi("nature");
// seleziono la row dove appendero' la col con le card
const cardRow = document.querySelector(".album .row");

//seleziono il form
const form = document.querySelector("form");

const handlePexelsApi = (query) => {
  fetch(URL + query, {
    headers: {
      Authorization: apiKey
    }
  })
    .then((resp) => {
      if (resp.ok) {
        //console.log("resp", resp.json());
        return resp.json();
      }
    })
    .then((pexelsObj) => {
      //svuoto il contenitore dalle foto presenti nell'html, che verranno poi ostituite da quelle
      //generate con la funzione
      cardRow.innerHTML = "";

      pexelsObj.photos.forEach((photo) => {
        //console.log(photo.photographer);
        // creo la col che conterra' l'immagine
        const col = document.createElement("div");
        //assegno la classe
        col.className = "col-md-4";
        //assegno il contenuto
        col.innerHTML = `
              <div class="card mb-4 shadow-sm">
                <img src=${photo.src.medium} class="bd-placeholder-img card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">${photo.photographer}</h5>
                  <p class="card-text">
                        ${photo.alt}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">${photo.id}</small>
                  </div>
                </div>
              </div>
      `;
        cardRow.appendChild(col);
      });
    });
};
