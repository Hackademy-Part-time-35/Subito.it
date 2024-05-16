//make available in the file json
//we will use an api of JS called fetch()

// 1- fetch() ---> this connect at the File.json

let cont_annunci = document.querySelector("#cont_annunci");
let region_filter = document.querySelector("#region_filter")

let min_number = 0;
let max_number = 0;

fetch("./dati/dates.json")
.then(response => response.json())
.then(data => {
    function makeCardAnnunce(array_annunci)
    {
        cont_annunci.innerHTML = " ";
        array_annunci.forEach(annuncio => 
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
        
        function creaRadioRegioni()
        {
            let elencoUnicheRegioni = [];
            
            data.forEach((annuncio) =>
                {
                if(!elencoUnicheRegioni.includes(annuncio.Regione))
                    {
                    elencoUnicheRegioni.push(annuncio.Regione);
                }
                
            });
            
            return elencoUnicheRegioni;
        }
        
        function makeFilterAnnunce()
        {
            let myRegions = creaRadioRegioni();
            
            myRegions.forEach((regions) => 
                {
                let checkBox = document.createElement("div");
                checkBox.classList.add("form-check");
                
                checkBox.innerHTML = `
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="${regions}">
                <label class="form-check-label" for="${regions}">
                <p class="text-dark">${regions}</p>
                </label>
                `;
                
                region_filter.appendChild(checkBox);
            });
        }
        
        function filtraRegione(regione, minValue, maxValue)
        {
            // nessun filtro
            if(regione == 'all' && minValue == 0 && maxValue == 0)
                {
                makeCardAnnunce(data);
            }
            else
            {
                // filtro solo per regione
                if(regione != "all" && minValue == 0 && maxValue == 0)
                    {
                    let annunci_filtrati = data.filter(annuncio => annuncio.Regione == regione);
                    makeCardAnnunce(annunci_filtrati);
                }
                // filtro solo per valore
                else if(regione == 'all' && (minValue != 0 || minValue == 0) && maxValue != 0)
                    {
                    let annunci_filtrati_byNumbers = data.filter(annuncio => annuncio.Prezzo > minValue && annuncio.Prezzo < maxValue);
                    makeCardAnnunce(annunci_filtrati_byNumbers);
                }
                // filtro per regione e valore
                else if(regione != "all" && (minValue != 0 || minValue == 0) && maxValue != 0)
                {
                    let annunci_fully_filtrati = data.filter(annuncio => annuncio.Regione == regione && annuncio.Prezzo > minValue && annuncio.Prezzo < maxValue);
                    makeCardAnnunce(annunci_fully_filtrati);
                }
            }
            
        }
        
        makeFilterAnnunce();        
        filtraRegione("all",min_number,max_number);
        
        let my_radio_region = document.querySelectorAll(".form-check-input");
        
        my_radio_region.forEach((singleRadio)=> 
            {
                singleRadio.addEventListener("click", () =>
                    {
                    min_number = document.querySelector("#min_number").value;
                    max_number = document.querySelector("#max_number").value;
                    
                    let region_selected = singleRadio.id;
                    filtraRegione(region_selected, min_number, max_number);
                });
            });
        });
    
    