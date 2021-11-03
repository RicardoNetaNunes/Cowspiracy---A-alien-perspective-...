let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d');
canvas.style.border = '9px solid #2B424E';


let gameBg = new Image();
gameBg.src = './Images/game_background_4.png';

let startBtn = document.querySelector('#start');
let restartBtn = document.querySelector('#restart');
let intervalId = 0;
let gameOver = false;


let spaceship = new Image();
spaceship.src = './Images/skull_in_a_ufo_spacecraft.png';
let spaceshipX = 1, spaceshipY = 1;

let beam = new Image();
beam.src = './Images/laserYellow2.png'


let isRigth = false;
let isLeft = false;
let isUp = false;
let isDown = false;
let isShoot = false;




let audio = new Audio('./Sound/POL-night-crickets.mp3')

let shipAudio = new Audio('./Sound/magnetic_field_1.wav')

let cowW = new Image();
cowW.src = './Images/whiteCow.png'
let cowWX = 1150;

let cowB = new Image();
cowB.src = './Images/brownCow.png'
let cowBX = 950;

let cowSpeed = 4
let randomCowspeed = Math.random() * cowSpeed;

let cowSpeedB = 3
let randomCowspeedB = Math.random() * cowSpeedB;



let cowsX = [
    {x: cowWX, y: 5},
    {x: cowWX +300, y: 5},
    {x: cowWX +450, y: 5},
]

let cowsB = [
    {x: cowBX, y: 5},
    {x: cowBX +350, y: 5},
    {x: cowBX +550, y: 5},
]

let blood = new Image();
blood.src = './Images/bloodsplater400×400 pixels.png'
let maxW = canvas.width - 150;
 let maxH = canvas.height - 101;


let score = 0;

let quarters = new Image();
quarters.src = './Images/spaceship_quarters_bg.png 1 920×1 080 pixels.png';

//if (shipX + shipWidth >= carX && shipX + shipWidth <= carX + carWidth)
/* if (beam.x + beam.width >= cowsX[i].x && beam.x + beam.width <= cowsX[i].x + cowW.width){
    score++
}; */


/*if( spaceshipX + spaceship.width >= cowsB[i].x && spaceshipX <= cowsB[i].x + cowB.width && (spaceshipY <= cowsB[i].y + cowB.height || spaceshipY+spaceship.height >= cowsB[i].y + cowB.height)){
    score++
}*/

/*function collision(){
    if (spaceship.x > cowsX[i].x + cowW.width ||
        spaceship.x + spaceship.width < cowsX[i].x ||
        spaceship.y > cowsX[i].y + cowW.height ||
        spaceship.y + spaceship.height < cowsX[i].y
        ){
            score++  
        } 
   return 
}*/







 


let i = 0;       

 


function animation() {

    ctx.drawImage(gameBg, 0, 0)
    


    ctx.font = '50px Bold Verdana'
    ctx.fillStyle = '#2B424E'
    ctx.fillText(`Score: ${score} `, 604, 60)    
    

   
        
 
        for(let i=0; i<cowsX.length; i++) {
            ctx.drawImage(cowW, cowsX[i].x, 600, 100, 100 ) 
            ctx.drawImage(cowB, cowsB[i].x, 595, 100, 100)
            cowsX[i].x = cowsX[i].x - randomCowspeed 
            cowsB[i].x = cowsB[i].x - randomCowspeedB 
    
            if(cowsX[i].x + cowW.width < 0) {
                cowsX[i].x = 1250
            }
    
            if(cowsB[i].x + cowB.width < 0) {
                cowsB[i].x = 1250
            }
    
            
        }
 
        ctx.drawImage(spaceship,spaceshipX,spaceshipY , 150, 101)


        ctx.drawImage(beam,spaceshipX +25,spaceshipY +100 , 100, 100 )




        

/* if (beam.y + 50 == cowsX[i].x && beam.x + 100 == cowsX[i].x + cowsX.width) {
    ctx.drawImage(blood,Math.floor(Math.random()* maxW +0), Math.floor(Math.random()* maxH +0)); 
}; */




        /*if (beam.x + beam.width >= cowsX[i].x && beam.x + beam.width <= cowsX[i].x + cowW.width){
            ctx.drawImage(blood,Math.floor(Math.random()* maxW +0), Math.floor(Math.random()* maxH +0)); 
        }; */

/*
        if( beam.x + beam.width >= cowsB[i].x + cowB.width && beam.x <= cowsB[i].x + cowB.width && (beam.y <= cowsB[i].y + cowB.height || beam.y+beam.height >= cowsB[i].y + cowB.height)){
            ctx.drawImage(blood,spaceshipX +25, spaceshipY +100, 100, 150); 
            score++  
        }   
        if( beam.x + beam.width >= cowsX[i].x && beam.x <= cowsX[i].x + cowW.width && (beam.y <= cowsX[i].y + cowW.height || beam.y+beam.height >= cowsX[i].y + cowW.height)){
            ctx.drawImage(blood,spaceshipX +25, spaceshipY +100, 100, 150);  
            score++ 
        }  */
        
      if(beam.y + beam.height )
        








    
        if (isRigth && spaceshipX + 150 < canvas.width ) {
            spaceshipX += 7;
        }
        if (isLeft && spaceshipX > 0 ) {
            spaceshipX -= 7 ;
        }
        if (isDown && spaceshipY + 100 < canvas.height -50 ) {
            spaceshipY += 7 ; 
        }
        if (isUp && spaceshipY  > 0) {
           spaceshipY -= 7 ;
        }
        if (isShoot) {
            spaceship;
        }
            
    
       

        
        

    
    if (gameOver) {
        cancelAnimationFrame(intervalId)
        gameOver = true;
        ctx.drawImage(quarters,0, 0, 1249, 700)
    }
    else {
        intervalId = requestAnimationFrame(animation)
    }
   
    
     

}



function handleStart () {
    startBtn.style.display = 'none';
    canvas.style.display ='block';
    animation();
    //collision();
    audio.play()
    audio.volume = 0.1
    audio.loop()
    
}





window.addEventListener('load', () => {

    canvas.style.display = 'none'
    restartBtn.style.display = 'none'

    startBtn.addEventListener('click', () => {
    handleStart ()

      
  })

  restartBtn.addEventListener('click', () => {
    handleStart ()
  })

  document.addEventListener("keydown", (event) => {
if (event.key == "ArrowLeft") {
    isLeft = true;
    isRigth = false;
}
if (event.key == "ArrowRight") {
    isRigth = true;
    isLeft = false;
}
if (event.key == "ArrowUp") {
    isUp = true;
    isDown = false;
}
if (event.key == "ArrowDown") {
    isDown = true;
    isUp = false;
}
if (event.key == "Tab") {

}

  })

  document.addEventListener("keyup", () => {
    isLeft = false;
    isRigth = false;
    isUp = false;
    isDown = false;
  })


  })