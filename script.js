var p = fetch("https://data.covid19india.org/v4/min/data.min.json");

p.then((data)=>data.json()).then((data1)=>covid(data1));
    function covid(data1){
      for(var i in data1){
        console.log(i,data1[i]);
        var div = document.createElement("div");
        div.innerHTML=`<div class="card" style="width: 18rem;">
        <h5 class="card-title color">${i}</h5>
        <div class="card-body">
        <p>Population: ${data1[i].meta.population}</p>
        <p class="card-text">Region: ${data1[i].total.deceased}</p>
        <p class="card-title">Vaccinated1: ${data1[i].total.vaccinated2}</p>
          <p class="card-title">Vaccinated2: ${data1[i].total.vaccinated2}</p>
          <p class="card-text">Recovered: ${data1[i].total.recovered}</p>
           </div>
      </div>  `
        document.body.append(div);
      }
    }