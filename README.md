Project's name: Cowspiracy
[Link Deploy](https://github.com/RicardoNetaNunes/Cowspiracy---Alien-solution.git)


Description
A simple game, with the simple solution, for what they say today the cause for the greenhouse emissions. An alien solution ...
There is a UFO that tries to smash the cows that pass left to right at the bottom of the screen. There will be a time limit, and an  Armageddon button (cancel button) to end the game.


MVP (DOM - CANVAS)
. game has one spaceship that moves horizontally and vertically
. moving cows in the bottom of the canvas (spead and randomizer)
. spaceship smashes the cows (splash effect)
. the game will end after (?30 sec), or the player will end it in the cancel button, in both cases with a rock shower 


Backlog
. add scoreboard
. back to game button
. add another spaceship
. add laser


Data structure

Game () {}
starLoop () {}
drawCanvas () {}
GameOver () {}
restart () {}
pause () {}


UFO.js
UFO () { this.x; this.y; this.direction; this.size }
draw () {}
move () {}
checkCowCollision () {}
document.addEventListener()

Cows.js
drawImage()
collisionBloodSplater()


States y States Transitions
Definition of the different states and their transition (transition functions)

- spaceScreen /splashScreen
- gameScreen
- gameoverScreen
- winScreen


## Task
Task definition in order of priority


## Additional Links


### Trello
[Link url](https://trello.com)


### Slides
[Link Slides.com](http://slides.com)