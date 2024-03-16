
const SwApi = {}

function convertSwApiDetailToFilm(swDetail){
    const film = new Film()
    film.title = swDetail.title;
    film.episode = swDetail.episode_id;
    film.date = swDetail.release_date
    film.director = swDetail.director;

    return film
}

SwApi.getCharacterDetail = (character) => {
    return fetch(character.url)
    .then((response) => response.json())
    .then(convertSwApiDetailToFilm)
}


SwApi.getCharacters = function (offset = 0, limit = 6) {
    const url = `https://swapi.dev/api/films/?format=json&limit=${limit}&offset=${offset}`;
    
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((characters) => characters.map(SwApi.getCharacterDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((charactersDetails) => charactersDetails)
}
