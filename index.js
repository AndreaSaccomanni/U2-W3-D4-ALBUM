const apiKey = "MjU8UfUnVbzzDQvbmRrpEwgw1l5TOh6asOYdstB6JExSlixnb4fs0XOa";

const btnPrimary = document.querySelector(".btn.btn-primary");
const btnSecondary = document.querySelector(".btn.btn-secondary");
btnPrimary.onclick = () => handlePexelsApi("cat");
btnSecondary.onclick = () => handlePexelsApi("nature");
//console.log(btnPrimary, btnSecondary);

const cardRow = document.querySelector(".album.row");

const handlePexelsApi = (query) => {
  fetch(URL + query, {
    headers: {
      Authorization: "MjU8UfUnVbzzDQvbmRrpEwgw1l5TOh6asOYdstB6JExSlixnb4fs0XOa"
    }
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    })
    .then((pexelsObj) => {
      pexelsObj.Obj.photos.forEach((photo) => {
        console.log(photo.photographer);
        const col = document.createElement("div");
        col.className = "col-md-4";
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
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
      `;
      });
    });
};
