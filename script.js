let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
canvas.style.border = '2px solid black';

let gameBg = new Image();
gameBg.src = './Images/game_background_4.png';

let spaceship = new Image();
spaceship.src = './Images/skull_in_a_ufo_spacecraft.png';
let spaceshipX = 1, spaceshipY =1

let ufoEnemy = new Image();
ufoEnemy.src = './Images/ufo_enemy_game_character.png';
let ufoEnemyX = 1105, ufoEnemyY =1


let cowW = new Image();
cowW.src = './Images/whiteCow.png'
let cowWX = 1150


let cowB = new Image();
cowB.src = './Images/brownCow.png'
let cowBX = 950


let blood = new Image();
blood.src = './Images/bloodsplater400×400 pixels.png'


let rock = new Image();
rock.src = './Images/rock.png'
rockX = 600


let endScreen = new Image();
endScreen.src = './Images/spaceship_quarters_bg.png 1 920×1 080 pixels.png'






// basic animation template
function draw(){

    ctx.drawImage(gameBg, 0, 0)


    ctx.drawImage(spaceship, spaceshipX, spaceshipY, 150, 101)

    ctx.drawImage(cowW, cowWX, 600, 100, 100 )

    ctx.drawImage(cowB, cowBX, 595, 100, 100 )

    //ctx.drawImage(ufoEnemy, ufoEnemyX, ufoEnemyY, 150, 101)

    //ctx.drawImage(blood, cowWX -35, 590, 150, 101)
    //ctx.drawImage(blood, cowBX -35, 590, 150, 101)
    //ctx.drawImage(endScreen, 0, 0, 1243, 699)
    //ctx.drawImage(rock, rockX, -95, 100, 100 )
   
rock
    

    if (isGameOver) {
      cancelAnimationFrame(intervalId)
  
  
    }
    else {
      intervalId = requestAnimationFrame(draw)
    }
    
  }
  
  
  window.addEventListener('load', () => {
    draw()
  })
  
