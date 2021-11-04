let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d');
canvas.style.border = '9px solid #2B424E';

//game background
let gameBg = new Image();
gameBg.src = './Images/game_background_4.png';

//buttons
let startBtn = document.querySelector('#start');
let restartBtn = document.querySelector('#restart');


let intervalId = 0;
let gameOver = false;

//spaceship
let spaceship = new Image();
spaceship.src = './Images/skull_in_a_ufo_spacecraft.png';
let spaceshipX = 1, spaceshipY = 1;

let beam = new Image();
beam.src = './Images/laserYellow2.png'
let beamHeigth = 100;
let beamWidth = 100;

//spaceship controls
let isRigth = false;
let isLeft = false;
let isUp = false;
let isDown = false;

//audio
let audio = new Audio('./Sound/POL-night-crickets.mp3');
let shipAudio = new Audio('./Sound/flight_1.wav');
let splashAudio = new Audio('./Sound/impactsplat01.mp3.flac');
let endAudio = new Audio('./Sound/end.wav');

//cows
let cowW = new Image();
cowW.src = './Images/whiteCow.png';
let cowWX = 1150;
let cowWY = 595;

let cowB = new Image();
cowB.src = './Images/brownCow.png'
let cowBX = 950;
let cowBY = 595;

let cowSpeed = 4
let randomCowspeed = Math.random() * cowSpeed + 1;

let cowSpeedB = 3
let randomCowspeedB = Math.random() * cowSpeedB +1;

let cowBHeigth =100;
let cowBWidth = 100;
let cowWHeigth = 100;
let cowWWidth = 100;

let cowsX = [
    {x: cowWX, y: 600},
    {x: cowWX +300, y: 600},
    {x: cowWX +450, y: 600},
]

let cowsB = [
    {x: cowBX, y: 600},
    {x: cowBX +350, y: 600},
    {x: cowBX +550, y: 600},
]

//blood
let blood = new Image();
blood.src = './Images/bloodsplater400×400 pixels.png';
let maxW = canvas.width - 150;
let maxH = canvas.height - 101;

let score = 0;

//end game
let quarters = new Image();
quarters.src = './Images/Endgame.jpg';


      

 function drawScore (){
    ctx.font = '50px Bold Verdana';
    ctx.fillStyle = 'ivory';
    ctx.fillText(`Brown Cows: ${score} `, 504, 60);   
 }

 function handlecows () {  
 
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

        if( spaceshipX +25 >= cowsB[i].x &&  spaceshipX +25  <= cowsB[i].x + cowBHeigth &&  spaceshipY +100 + beamHeigth >= cowBY ){
            cowsB[i].x = Math.floor(Math.random()* maxW + 1250);
            ctx.drawImage(blood,spaceshipX +25, spaceshipY +100, 150, 200); 
            score++;
            splashAudio.play(); 
            ctx.drawImage(blood,spaceshipX +25, spaceshipY +100, 150, 200); 
            
        } 
        if((spaceshipX +25) + beamWidth  > cowsB[i].x  &&  (spaceshipX +25) + beamWidth  <= cowsB[i].x + cowBWidth &&  spaceshipY +100 + beamHeigth >= cowBY ){
            cowsB[i].x = Math.floor(Math.random()* maxW + 1250);
            ctx.drawImage(blood,spaceshipX +25, spaceshipY +100, 150, 200); 
            score++ ;
            splashAudio.play();
           ctx.drawImage(blood,spaceshipX +25, spaceshipY +100, 150, 200);
           
        } 

        if( spaceshipX +25 >= cowsX[i].x &&  spaceshipX +25  <= cowsX[i].x + cowWHeigth &&  spaceshipY +100 + beamHeigth >= cowWY ){
            cowsX[i].x = 1250;
            ctx.drawImage(blood,spaceshipX +25, spaceshipY +100, 150, 200); 
            score--  ;
            splashAudio.play();
           ctx.drawImage(blood,spaceshipX +25, spaceshipY +100, 150, 200);
           
        } 
        if((spaceshipX +25) + beamWidth  > cowsX[i].x  &&  (spaceshipX +25) + beamWidth  <= cowsX[i].x + cowWWidth &&  spaceshipY +100 + beamHeigth >= cowWY ){
            cowsX[i].x = 1250;
            ctx.drawImage(blood,spaceshipX +25, spaceshipY +100, 150, 200); 
            score-- ;
            splashAudio.play();
            ctx.drawImage(blood,spaceshipX +25, spaceshipY +100, 150, 200);
            
        } 
    }
} 

function spaceshipControl () {
    
    if (isRigth && spaceshipX + 150 < canvas.width ) {
        spaceshipX += 7;
        shipAudio.play();
    }
    if (isLeft && spaceshipX > 0 ) {
        spaceshipX -= 7 ;
        shipAudio.play();
    }
    if (isDown && spaceshipY + 100 < canvas.height -50 ) {
        spaceshipY += 7 ;
        shipAudio.play(); 
    }
    if (isUp && spaceshipY  > 0) {
       spaceshipY -= 7 ;
       shipAudio.play();
    }
    
} 

function maxScore () {
    
    if (score > 4) {
       handleEndGame ()
    } 
   }

   function ifGameOver(){
    
    if (gameOver) {
        handleEndGame ()
    }
    else {
        intervalId = requestAnimationFrame(animation)
    }
}

function animation() {

    ctx.drawImage(gameBg, 0, 0)

    drawScore ()

    handlecows ()
   
    ctx.drawImage(spaceship,spaceshipX,spaceshipY , 150, 101)

    ctx.drawImage(beam,spaceshipX +25,spaceshipY +100 , 100, 100 )

    spaceshipControl ()

    maxScore ()

    ifGameOver()

}


function handleEndGame () {
    
    cancelAnimationFrame(intervalId);
    gameOver = true;
    ctx.drawImage(quarters,0, 0, 1249, 700);
    drawScore ();
    audio.pause();
    shipAudio.pause();
    splashAudio.pause();
    restartBtn.style.display = 'block';
    endAudio.play();
    endAudio.volume = 0.1;
    endAudio.loop();
   
};

function restart () {
    gameOver = false;
    score = 0;
    endAudio.pause();
    spaceshipX =1;
    spaceshipY =1;
    handleStart();
}

function handleStart () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    startBtn.style.display = 'none';
    canvas.style.display ='block';
    animation();
    audio.play();
    audio.volume = 0.1;
    shipAudio.volume =0.1;
    audio.loop();
    
    
};


window.addEventListener('load', () => {

    canvas.style.display = 'none'
    restartBtn.style.display = 'none'
    
    startBtn.addEventListener('click', () => {
    handleStart ()
      
  })

  restartBtn.addEventListener('click', () => {
    restart ()
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