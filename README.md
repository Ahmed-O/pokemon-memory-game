# Pokemon Memory Game | [Live Demo](https://pokemon-react-memory-game.netlify.app/)  


# Game Instructions 

Select the desired difficulty. Either easy, medium, or hard. The more difficult, the less time you're allowed to match all the cards. 

![image](https://user-images.githubusercontent.com/31430417/169432089-bbfcfb36-9d67-457d-b4d9-30e1b80b1a9c.png)



This will take the user to the game page where they will see a grid of pokemon cards. 
Clicking on a card will cause it to flip, revealing the pokemon underneath. This pokemon will remain displayed until the user clicks on another 
card. If the second card is the same pokemon as the first card, both pokemon will remain displayed. Otherwise, both cards will be flipped back over.
The user much match all of the pokemon cards before the timer runs out to win. The timer will start as soon as you click on the first card. 


![image](https://user-images.githubusercontent.com/31430417/169432531-2d3a845a-fc1c-4035-a864-353c2498fc8d.png)




# Technical Details 
Languages: JSX, CSS, Javascript, React  
Libraries/Dependencies: React Router, React Countdown, React Icons  
Images from PokeAPI (https://pokeapi.co/) and Music from Pokemon Pocket Monsters Sound Anime Collection  

The App component contains the code for the homepage.   
The Game component is where most of the game logic resides. It creates a randomized grid of hidden Card components and
accepts a prop to determine the game diffculty or allotted time. Is the user on the first or second pick? What number of 
matched cards does the user currently have? Has the game over condition triggered? And if so, was is it because the user won
or lost? These problems are solved in this component.   
The Card component represents each Pokemon card and sets the appropriate state based on the users clicks.  
The Speaker component handles the background music and allows the user to toggle it on or off.   
The GameOver component accepts a winStatus prop to display to the user a win or lose message depending on the outcome of the 
game.



# Deployment 
```
npm install   
npm start 
```

