

const publicKey = "1dff1e3de71f26351eeb49cffd790b28";
const privateKey = "0d9e998c48c8a3b3105cfa0c8674e04c95e54aa4";
const baseURL = "https://gateway.marvel.com:443/v1/public";
const charactersEndpoint = `${baseURL}/characters`;
const ts = Date.now().toString();
const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();


// get all the Elements
const searchInput = document.getElementById("search-input");
const favoriteButton = document.getElementById("favorite-button");
const superheroesList = document.getElementById("superheroes-list");


let favoriteSuperheroes = [];


searchInput.addEventListener("input", searchSuperheroes);


// this function will fetch the superheroes based on the input typed
function searchSuperheroes() {
  // removing spaces using trim
    const query = searchInput.value.trim();
    // if query that is the input is empty then we will return empty element
    if (!query) {
      superheroesList.innerHTML = "";
      return;
    }

    // we will get the url by fetch 
    const url = `${charactersEndpoint}?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${query}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        // once the data is fetched we are going to call displaysuperheroes function which will display all the heroes names with our input
        displaySuperheroes(data.data.results)})
      .catch(error => console.log(error));
  }




  // to display the superheroes in a list 

  function displaySuperheroes(superheroes) {
    superheroesList.innerHTML = "";
    // we are going through each item and appending a list in our html
    for (const superhero of superheroes) {
      // create a list element 
      const superheroElement = document.createElement("li");
  
      // Create the anchor tag and set its href attribute to the URL of the showHero.html page with the superhero ID as a query parameter
      const superheroLink = document.createElement("a");
      superheroLink.href = `showhero.html?id=${superhero.id}`;
      superheroLink.target = "_blank"; 
      superheroLink.textContent = superhero.name;
      superheroElement.appendChild(superheroLink);
  //  we are going to add a favourite buton to each list item on clicking it will take us to add favorites button
      const favoriteButton = document.createElement("button");
      favoriteButton.textContent = "Favorite";
      favoriteButton.addEventListener("click", () => {
        addFavorite(superhero);
        favoriteButton.textContent="Added to Favourites"
      });
      // appening the button to superheroElement
      superheroElement.appendChild(favoriteButton);


  //  appending the superheroelememt to superherolist which will show all our lists in ul tag
      superheroesList.appendChild(superheroElement);
    }
  }
  



  // function to add the suuprhero to favourites

  function addFavorite(superhero) {
    // Check if the superhero is already in the favorites list
    const isAlreadyFavorite = favoriteSuperheroes.some(favorite => favorite.id === superhero.id);
    // console.log(isAlreadyFavorite);

    // if hero is not added 
    if (!isAlreadyFavorite) {
      // console.log("entered to if");
      // Add the superhero to the favorites list
      favoriteSuperheroes.push(superhero);
      
      // Update the UI to display the new favorite superhero
      const favoriteElement = document.createElement("li");
      favoriteElement.textContent = superhero.name;

      //  once the favourite is added we are going to add a button called remove on clicking it will remove the superhero from favourites
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => {
        removeFavorite(superhero.id);
        favoriteElement.remove();
      });
      favoriteElement.appendChild(removeButton);
    
      // Save the updated favorites list to local storage
      localStorage.setItem("favoriteSuperheroes", JSON.stringify(favoriteSuperheroes));
      
     
    


    }
  }
  
  