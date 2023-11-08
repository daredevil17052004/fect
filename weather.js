//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.
var array = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

var month = ['January','Februaru','March','April','May','June','July','August','September','October','November','December']


fetch(`https://api.openweathermap.org/data/2.5/weather?q=jodhpur&appid=fa9a8f3d46560478ae6ec66b3239dd59&units=metric`)
    .then((data) => data.json())
    .then((pard)=>{
        console.log(pard)

        const cityName = pard.name;
        document.getElementsByClassName('city')[0].textContent = cityName;

        const dateOfCity = new Date(pard.dt*1000);;
        document.getElementsByClassName('date')[0].textContent = 
        array[dateOfCity.getDay()-1] +' ' + dateOfCity.getDate() + ' ' +month[dateOfCity.getMonth()-1]+ ' ' + dateOfCity.getFullYear();


        const tempa = Math.round(pard.main['temp']);
        document.getElementsByClassName('temp')[0].textContent = `${tempa}\xBAC`;

        const clouds = pard.weather['0']
        document.getElementsByClassName('weath')[0].textContent = clouds['main'];
        
        const max = Math.round(pard.main['temp_max']);
        document.getElementsByClassName('max')[0].textContent = max;

        const min = Math.round(pard.main['temp_min']);
        document.getElementsByClassName('min')[0].textContent = min;
    })
    
