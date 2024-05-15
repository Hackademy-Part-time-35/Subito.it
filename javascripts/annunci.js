//make available in the file json
//we will use an api of JS called fetch()

// 1- fetch() ---> this connect at the File.json

let cont_annunci = document.querySelector("#cont_annunci");
let region_filter = document.querySelector("#region_filter")

let Puglia = "Puglia";
let Valle = "valle d'aosta";
let Lombardia = "Lombardia";

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
                <img src="${annuncio.Immagine}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title"> ${annuncio.Regione}</h5>
                <p class="card-text">&#x20AC ${annuncio.Prezzo}</p>
                <a href="#" class="btn btn-primary">Link</a>
                </div>
                </div>
                `;
                
                cont_annunci.appendChild(colonna);
            });
            
        }
        
        function removeDuplicate(nameToFind)
        {
            // array vuoto per inserire i miei nomi unici
            let regionNames = [];
        
            // itero i dati all'interno del mio json
            data.forEach((nome) => 
                    {
                    // check per controllare se il nome e presente dentro il mio array
                if(!regionNames.includes(nome.Regione))
                        {
                    regionNames.push(nome.Regione);
        
                }
            });
        
            // check per controllare il nome che sto cercando se e presente dentro l'array
            if(regionNames.includes(nameToFind))
                    {
                return nameToFind;
                // se e presente ritorno il valore
            }
            else
            {
                console.log("the name isnt available or already present");
            }
        }
        
        function makeFilterAnnunce()
        {
            let region_1 = removeDuplicate(Puglia);
            let region_2 = removeDuplicate(Valle);
            let region_3 = removeDuplicate(Lombardia);
            
            let regions = [region_1, region_2, region_3];
            
            regions.forEach((regione, index) => 
                {
                let checkBox = document.createElement("div");
                
                checkBox.innerHTML = `
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${index}">
                <label class="form-check-label" for="flexCheckDefault${index}">
                <p class="text-dark">${regione}</p>
                </label>
                </div>
                `;
                
                region_filter.appendChild(checkBox);
            });
        }   
        
        
        makeCardAnnunce();
        makeFilterAnnunce();
        getRegionsName();
        
    });
    
    
    // function makeFilterAnnunce()
    // {
    //     let region_1 = "Valle d'aosta";
    //     let region_2 = "Puglia";
    //     let region_3 = "Lombardia";
    
    //     let regions = [region_1, region_2, region_3];
    //     console.log(regions);
    
    //     regions.forEach((region, index) => 
        //         {
    
    //         let checkBox = document.createElement("div");
    
    //         checkBox.innerHTML = `
    //         <div class="form-check">
    //         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${index}">
    //         <label class="form-check-label" for="flexCheckDefault${index}">
    //         <p class="text-dark">${region}</p>
    //         </label>
    //         </div>
    //         `;
    
    //         region_filter.appendChild(checkBox);     
    //     });
    
    // }
    
    // makeFilterAnnunce();