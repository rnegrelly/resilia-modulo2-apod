const apiURL = "https://api.nasa.gov/planetary/apod?";
const apiKey = "api_key=Z12T6MNdi0MFeETluxcDmXXU88LK7XCR8w3ESt1y&date=";
const myAPI = apiURL + apiKey

function btnClick(){    
    
    const data = document.getElementById("date").value;

    $.ajax({url: `${myAPI}${data}`, success: function(result){
    
            console.log(result);

            const historia = document.querySelector(".historiafoto")
            const titulo = document.querySelector(".titulo")
            
            titulo.innerHTML = `<h2>${result.title}</h2>`;
            historia.innerHTML = `${result.explanation}`;
            
            let img = document.querySelector('.painelfoto')

            if (result.media_type != "video") {
                
                    img.innerHTML = `<img width = '450' heigth = '450' id="foto" src="${result.url}"></img>`;

                } else {

                    img.innerHTML = `<iframe src="${result.url}"></iframe>`;
                }
         },
       
    });    

}









