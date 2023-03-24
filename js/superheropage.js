
const publicKey = "1dff1e3de71f26351eeb49cffd790b28";
const privateKey = "0d9e998c48c8a3b3105cfa0c8674e04c95e54aa4";

const baseURL = "https://gateway.marvel.com:443/v1/public";
const charactersEndpoint = `${baseURL}/characters`;
const ts = Date.now().toString();
const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

// Get the id of the selected superhero from the query string of the URL
const urlParams = new URLSearchParams(window.location.search);
const superheroId = urlParams.get("id");

// Construct the URL to fetch the details of the selected superhero
const url = `${charactersEndpoint}/${superheroId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

// Fetch the details of the selected superhero from the API
fetch(url)
  .then(response => response.json())
  .then(data => {
    const superhero = data.data.results[0];
    displaySuperheroDetails(superhero);
  })
  .catch(error => console.log(error));

function displaySuperheroDetails(superhero) {
  // Create HTML elements to display the details of the superhero
  console.log(superhero)
  const nameElement = document.createElement("h1");
  const descriptionHeading = document.createElement("h2");
  descriptionHeading.textContent="Description"
  nameElement.textContent = "SuperHeroName: " + superhero.name;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = superhero.description;

  const imageElement = document.createElement("img");
  imageElement.src = `${superhero.thumbnail.path}.${superhero.thumbnail.extension}`;

  const comics = document.createElement("h2");
  comics.textContent="Comics"
  const comicsList = document.createElement("ul");
  superhero.comics.items.forEach(comic => {
    const listItem = document.createElement("li");
    listItem.textContent = comic.name;
    comicsList.appendChild(listItem);
  });


  const event = document.createElement("h2");
  event.textContent="Events"
  const eventList = document.createElement("ul");
  superhero.events.items.forEach(event => {
    const listItem = document.createElement("li");
    listItem.textContent = event.name;
    eventList.appendChild(listItem);
  });


  const series = document.createElement("h2");
  series.textContent="series"
  const seriesList = document.createElement("ul");
  superhero.series.items.forEach(seri => {
    const listItem = document.createElement("li");
    listItem.textContent = seri.name;
    seriesList.appendChild(listItem);
  });
  






  // Append the HTML elements to the #superhero-details div
  
  const superheroDetailsElement = document.getElementById("superhero-details");
  superheroDetailsElement.appendChild(imageElement);
  superheroDetailsElement.appendChild(nameElement);
  superheroDetailsElement.appendChild(descriptionHeading)
  superheroDetailsElement.appendChild(descriptionElement);
  superheroDetailsElement.appendChild(comics)
  
  superheroDetailsElement.appendChild(comicsList)

  superheroDetailsElement.appendChild(event)
  superheroDetailsElement.appendChild(eventList)

  superheroDetailsElement.appendChild(series)
  superheroDetailsElement.appendChild(seriesList)
 
}
