const search_input = document.getElementById('search-input');
const ten = document.querySelector(".ten-pokemon");
const height = document.querySelector(".chieu-cao");
const weight = document.querySelector(".can-nang");
const type = document.querySelector(".loai");
const bio = document.querySelector(".tieu-su");
const Image = document.querySelector(".pokemon-img");
const Pokedex = document.querySelector(".Pokedex");

const fetchApi = async (pkmnName) => {
    const pkmnNameApi = pkmnName.split(' ').join('-');

    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pkmnNameApi);
    
    if (response.status === 200) {
        const pkmnData = await response.json();
        return pkmnData;
    } 
        return false;
}

search_input.addEventListener('change', async (event) => {
    
    const pkmnData  = await fetchApi(event.target.value);
    if (!pkmnData) {
        alert('Pokémon does not exist.');
        return;
    }

    Image.src = pkmnData.sprites.other.home.front_default;
    Pokedex.innerHTML = "";
    ten.innerHTML = pkmnData.name.toUpperCase();
    type.innerHTML = pkmnData.base_experience;
    height.innerHTML = pkmnData.height;
    weight.innerHTML = pkmnData.weight;
    bio.innerHTML = pkmnData.id;
});