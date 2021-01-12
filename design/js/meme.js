function meme() {
let playerOneName = document.getElementById('input1');
let playerTwoName = document.getElementById('input2');
//vars
let white = document.querySelectorAll('.white');
let start = document.getElementById('startMeme');
start.addEventListener('click', startGame);
let scores = document.querySelectorAll('span');
const cells = document.querySelectorAll('.cell');
const memeGrid = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let playerOne = {
  name: 'Henkie1',
  score: 0
}
let playerTwo = {
  name: 'Henkie2',
  score:0
}
let playerOneHtml = document.getElementById('player1');
let playerTwoHtml = document.getElementById('player2');
let win = document.querySelectorAll('#win');
const win1 = "<img src='img/default_1.gif'>";
const tie = "<img src='img/sans.gif'>";
let current_player; 
let gridEntry1;
let gridEntry2;


shuffle(memeGrid);



cells_clicked = [-1, -1];
//functions

function startGame() {
  showScore();
  if (playerOneName.value != "") {
    playerOne.name = playerOneName.value;
  }
  else {
    playerOne.name = "speler1";
  }
  if(playerTwoName.value != "") {
    playerTwo.name = playerTwoName.value;
  }
  else {
    playerTwo.name = "speler2";
  }
  let playerTitle = document.querySelectorAll('.playerName');  
  if(start.innerHTML == 'start') {
  current_player = playerOne;
  playerTitle[0].classList.add('active');
  for(e = 0; e < cells.length; e++) {
    
  
    cells[e].value = e;
    cells[e].addEventListener('click', saveCellClicked);
    fristIndex = memeGrid.indexOf(e);
      lastIndex = memeGrid.lastIndexOf(e);
      if (cells[fristIndex] != undefined && cells[lastIndex] != undefined) {      
      cells[fristIndex].className += `image${memeGrid[fristIndex]}`;
      cells[lastIndex].className += `image${memeGrid[lastIndex]}`;
      }
    }
    start.innerHTML = 'reset';
  }
  else {
    location.reload();
  }
}

function saveCellClicked() {


    if(cells_clicked[0] == -1)  {             
        cells_clicked[0] = event.target.value;   
        cells[cells_clicked[0]].className += ' visible';
        gridEntry1 = memeGrid[event.target.value];
        cells[cells_clicked[0]].removeEventListener('click', saveCellClicked);
        
    }    
      else if(cells_clicked[1] == -1) { 
          
        cells_clicked[1] = event.target.value;
        cells[cells_clicked[1]].className += ' visible';     
        //flip
        gridEntry2 = memeGrid[event.target.value];
        
        cells[cells_clicked[1]].removeEventListener('click', saveCellClicked);
      }
      if (cells_clicked[0] != -1 && cells_clicked[1] != -1) {
        setTimeout(checkCellsClicked, 1000);
        
      }    
    
    }
    function checkCellsClicked() {
      
  
  let playerTitle = document.querySelectorAll('.playerName');  
      if(gridEntry1 == gridEntry2) {
        cells[cells_clicked[0]].removeEventListener('click', saveCellClicked);
        cells[cells_clicked[1]].removeEventListener('click', saveCellClicked);
        cells_clicked[0] = -1;
        cells_clicked[1] = -1;
        if(current_player == playerOne) {
          playerOne.score++;
          current_player = playerTwo;
          playerTitle[0].classList.remove('active');
          playerTitle[1].classList.add('active');
          scores[0].innerHTML = `<h1 class="playerName">${playerOne.name}</h1> <br> Score: ${playerOne.score}`;
   
        }
        else if(current_player == playerTwo) {
          playerTwo.score++;
          current_player = playerOne;
          playerTitle[1].classList.remove('active');
          playerTitle[0].classList.add('active');
          scores[1].innerHTML = `<h1 class="playerName">${playerTwo.name}</h1> <br> Score: ${playerTwo.score}`;
 
        }
      }
      else {
        if(current_player == playerOne) {
          current_player = playerTwo;
          playerTitle[0].classList.remove('active');
          playerTitle[1].classList.add('active');
        }
        else if(current_player == playerTwo) {
          current_player = playerOne;
          playerTitle[1].classList.remove('active');
          playerTitle[0].classList.add('active');
        }
        cells[cells_clicked[0]].addEventListener('click', saveCellClicked);
        cells[cells_clicked[1]].addEventListener('click', saveCellClicked);
        cells[cells_clicked[0]].classList.remove('visible');
        cells[cells_clicked[1]].classList.remove('visible');
        cells_clicked[0] = -1;
        cells_clicked[1] = -1;
       
        
      }
      if(playerOne.score > 5) {
        document.getElementById('white').style.display = 'block';
        document.getElementById('frikandelbroodje').innerHTML = "<img width='320px' height='180px' class='fortnut' src='img/default_1.gif'>" + `<h1 class='winner'>${playerTwo.name} wint!!!</h1>`;

      }
      if (playerTwo.score > 5) {
        document.getElementById('white').style.display = 'block';
        document.getElementById('frikandelbroodje').innerHTML = "<img width='320px' height='180px' class='fortnut' src='img/default_1.gif'>" + `<h1 class='winner'>${playerTwo.name} wint!!!</h1>`;
      }
      if (playerOne.score == 5 && playerTwo.score == 5) {
        document.getElementById('white').style.display = 'block';
        document.getElementById('frikandelbroodje').innerHTML = "<img width='320px' height='180px' class='fortnut' src='img/sans.gif'>" + `<h1 class='winner'>Gelijkspel, stijders.</h1>`;

      }
      
      
    }

    function showScore() { 
      if (playerOneName.value != "") {
      playerOne.name = playerOneName.value;
    }
    else {
      playerOne.name = "player 1";
    }
    if(playerTwoName.value != "") {
      playerTwo.name = playerTwoName.value;
    }
    else {
      playerTwo.name = "player 2";
    }
      scores[0].innerHTML = `<h1 class="playerName">${playerOne.name}</h1> <br> Score: ${playerOne.score}`;
      scores[1].innerHTML = `<h1 class="playerName">${playerTwo.name}</h1> <br> Score: ${playerTwo.score}`;
    }
    

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
