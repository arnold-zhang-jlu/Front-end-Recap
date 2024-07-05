'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     // console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//   <article class="country">
//     <img class="country__img" src= "${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)}m people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
//       <p class="country__row"><span>💰</span>${data.currencies.EUR.name}</p>
//     </div>
//   </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');
// getCountryData('germany');
// getCountryData('france');

const rederCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src= "${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}m people</p>
      <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
      <p class="country__row"><span>💰</span>${data.currencies.EUR.name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

//--------------------------------
//Promise
// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      rederCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      rederCountry(data[0], 'neighbour');
    });
};
getCountryData('portugal');
