const inputForm = document.querySelector('form');
const searchResult = document.querySelector('.search-result');
const container = document.querySelector('.container');
let searchQuery = '';
const APP_ID = '11b241ce';
const APP_KEY = '76cffa3db65d2447be5ce87369011792';

inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    searchQuery = event.target.querySelector('input').value;
    fetchAPI();
});

async function fetchAPI() {
    const URL = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const response = await fetch(URL);
    console.log(response);
};