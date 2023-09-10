# Marvel Superhero Hunter

## Features

### Home Page
- The home page of this application allows you to retrieve and showcase a list of your favorite superheroes (characters). You can also utilize the search bar to filter characters based on your search query.

- For instance, if you input "bat" in the search box, the application will display "Iron Man."
  [ Example API: https://gateway.marvel.com:443/v1/public/characters?ts=<time-stamp>&apikey=<public-key>&hash=<md5(ts+privateKey+publicKey)>]

- Each superhero displayed in the search results comes with a "Favorite" button. Clicking this button adds the superhero to your "My Favorite Superheroes" list.

- By clicking on a specific search result (any superhero), you can access a dedicated page containing comprehensive information about that superhero (Superhero page).

### Superhero Page
- The Superhero Page provides an extensive overview of the superhero, including their name, photo, biography, and additional details retrieved from the API, such as their involvement in comics, events, series, stories, and more.

### My Favorite Superheroes Page
- This page conveniently displays a list of all your favorite superheroes.

- The list is persistent, ensuring that the number of superheroes remains the same even after closing the browser.

- Each superhero in your favorites list comes with a "Remove from Favorites" button. Clicking this button allows you to remove a superhero from your list of favorites with ease.
