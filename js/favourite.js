

const favoritesList = document.getElementById("favorites-list");
let favoriteSuperheroes = [];

// Retrieve favorites from local storage
const storedFavorites = localStorage.getItem("favoriteSuperheroes");
// if favourites exist 
if (storedFavorites) {
  favoriteSuperheroes = JSON.parse(storedFavorites);
  displayFavorites(favoriteSuperheroes);
}


// view to display the super heroes with name and remove button
function displayFavorites(favoriteSuperheroes) {
  favoritesList.innerHTML = "";
  for (const superhero of favoriteSuperheroes) {
    const favoriteElement = document.createElement("li");
    favoriteElement.textContent = superhero.name;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      removeFavorite(superhero.id);
      favoriteElement.remove();
    });
    favoriteElement.appendChild(removeButton);
    favoritesList.appendChild(favoriteElement);
  }
}

function removeFavorite(superheroId){

    favoriteSuperheroes=favoriteSuperheroes.filter(item=>item.id!==superheroId)
   
   

 }
