var container = document.createElement("div");
container.className="container";
var row = document.createElement("div");
row.className ="row";
container.append(row);
document.body.append(container);


async function getdata(){
    var res=await fetch("https://restcountries.com/v3.1/all");
    var data= await res.json();

    for(var i=0;i<data.length;i++){
        try {
        row.innerHTML += 
        `<div class="col-xl-4 col-lg-4 col-md-4">
            <div class="card text-center border-light " style="width: 18rem"; >
             <img src="${data[i].flags.png}" class="card-img-top" alt="Country Flags">
                <div class="card-body">
                 <h5 class="card-title">${data[i].name.common}</h5>
                 <p class="card-text">Capital: ${data[i].capital[0]}</p>
                 <p class="card-text1">Country Code: ${data[i].ccn3}</p>
                 <p  class="card-text2"> (Latlng: ${data[i].latlng})</p> 
                 
                 <button type="button" class="btn btn-secondary" onclick="weatherdata(${data[i].latlng[0]},${data[i].latlng[1]},'${data[i].name.common}')">Click for Weather</button>
                 <p id="load${data[i].name.common}"></p>
               </div>
             </div>
        </div>`
        // weatherdata(data[i].latlng[0],data[i].latlng[1]);
       } 
       catch (error) {
        console.log(error);
      }
    }
    }
    

    async function weatherdata(lat,lon){
        try {
            // if(lon===undefined) throw new Error("Invalid Coordinates");
            console.log(lat,lon);

            let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bd463d2cafbbee2663d25b351c60a1cc`);

            let res1 = await res.json();
                console.log(res1)
            let weather = `
            Country : ${res1.name}
            Latitude : ${lat} Logitude :${lon}
            Weather : ${res1.weather[0].description}
            Wind Speed : ${res1.wind.speed}
            Temperature : ${res1.main.temp}
            Humidity : ${res1.main.humidity}`;  
            alert(weather);
             
        } catch (error) {
           console.log(error) 
        }
        
        
}
  getdata();  

            

