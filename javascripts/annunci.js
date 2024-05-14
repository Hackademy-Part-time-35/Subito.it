//make available in the file json
//we will use an api of JS called fetch()

// 1- fetch() ---> this connect at the File.json

let cont_annunci = document.querySelector("#cont_annunci");
let region_filter = document.querySelector("#region_filter")

fetch("./dati/dates.json")
.then(response => response.json())
.then(data => {
    function makeCardAnnunce()
    {
        
        data.forEach(annuncio => 
            {
                let colonna = document.createElement("div");
                
                colonna.classList.add("col-4", "mb-5");
                
                colonna.innerHTML = `
                <div class="card" style="width: 18rem;">
                <img src="${annuncio.immagine}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${annuncio.Regione}</h5>
                <p class="card-text">${annuncio.Prezzo}</p>
                <a href="#" class="btn btn-primary">Link</a>
                </div>
                </div>
                `;
                
                cont_annunci.appendChild(colonna);
            });
            
        }
        
        function makeFilterAnnunce()
        {
            let region_1 = "Valle d'aosta";
            let region_2 = "Puglia";
            let region_3 = "Lombardia";
            
            let regions = [region_1, region_2, region_3];
            console.log(regions);
            
            regions.forEach((region, index) => 
                {
                
                let checkBox = document.createElement("div");
                
                checkBox.innerHTML = `
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${index}">
                <label class="form-check-label" for="flexCheckDefault${index}">
                <p class="text-dark">${region}</p>
                </label>
                </div>
                `;

                region_filter.appendChild(checkBox);     
            });
            
            
            
        }
        
        makeCardAnnunce();
        makeFilterAnnunce();
        
    });
    
    