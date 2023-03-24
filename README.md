# hunterapp.github.io

in this project we are going to fetch the data from Marvel API.

Intially index.html is loaded,

index.html consists of search bar and favouriteHeroes button

on typing our input into the search box , it starts fetching superheroes based on our input entered.
for example if we type hul on the input it will fetch and display all the super heroes names starting with hul.

 While we are fetching we are going to append a favourite button , on clicking the favourite button 
 it will add the superhero to favourites and to check our favourites, click on
 FavouriteHeroes Button, it will redirect to a page which shows all or favourite heroes which are added till now
 
 
 if we want to know the details of any hero we can click on name of the hero displayed in index.html 
 then it will open the page in new tab which shows the details of our superhero.
 
 
 index.js

this file consists all the logic needed for index.html which includes searching superhero by fetching the data from url and then adding it into favouites
and also displaying the heroes.


favourite.js

this file show the details of our favourite heroes in favourite.html page 

showhero.js

this file will display the details of our superhero in a new tab

