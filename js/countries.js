//function-1:loadCountriesData(firstly loading data);
const loadCountriesData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountriesData(data));
}

//function-2:display countries data;

const displayCountriesData = (countries) => {
    // console.log(countries);
    const allCountriesHTML = countries.map(country => getCountryHTML(country))
    // console.log(allCountriesHTML);
    const countriesContainer = document.getElementById('countries');
    countriesContainer.innerHTML = allCountriesHTML.join('');

}

//function-3:display country data;

const getCountryHTML = (country) => {
    console.log(country);
   let lan='';
   for(let language in country.languages){
      lan = lan + country.languages[language] + ' ';

   }

    return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <img src=${country.flags.png} alt="" />
            <h3>${country.capital}</h3>
            <h3>${lan}</h3>
            
        </div>
    `;

}
loadCountriesData();
   
        
