
function convertCharacterToLi(film) {
    return `
       <li class="character">
            <span class="name">${film.title}</span>

            <div class="detail">
                <ol class="personal_data">
                <li class="data">Episode: ${film.episode}</li>
                <li class="data">Date: ${film.date}</li>
                <li class="data">Director: ${film.director}</li>
                </ol>
            </div>
      </li>
    `
}

const charactersList = document.getElementById("charactersList")

SwApi.getCharacters().then((characters = []) => {
    charactersList.innerHTML += characters.map(convertCharacterToLi).join('')
})


