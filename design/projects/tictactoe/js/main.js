//Variabelen
var grid = document.getElementsByClassName('kirb');
const player1 = 1;
const player2 = 2;
var current_player = player1;
var playername1 = document.getElementById('playerOne');
var playername2 = document.getElementById('playerTwo');
var start = document.getElementById('start');
var win = document.getElementById('win')
var loser = document.getElementById('loser')
var kirb = document.getElementsByClassName('kirb');
//Grid array
var grid = ['','','','','','','',''];



//Functies
//Deze functie maakt de grid klikbaar als je op 'Start' klikt
function startGame() {
    if (start.innerHTML = 'Start') {
        start.classList.add('clicked');
        start.innerHTML = 'Reset';
    } else if (start.innerHTML = 'Reset') {
        start.classList.remove('clicked');
        document.location.reload(true);
    }
    for (var i = 0; i < kirb.length; i++) {
        kirb[i].addEventListener('click', clicked);

        kirb[i].addEventListener('click', check_for_win);
        kirb[i].addEventListener('click', switch_player);
        kirb[i].value = i;
        debugger;

    }
}
//Als de eerste speler een zet heeft gedaan dan gaat de beurt door naar de volgende, de kleur vanderd ook om aan te wijzen wie aan de beurt is
function switch_player() {
if(current_player == player1){
    playername1.style.color = 'pink';
    playername2.style.color = 'black';
} else if(current_player == player2){
    playername1.style.color = 'black';
    playername2.style.color = 'blue';
}
}
//Toont de image als iemand klikt en slaat dat op in een array. Als een cel aangeklikt is, wordt de eventlistener verwijdert en kan er niet meer op geklikt worden.
function clicked() {
    if(current_player == player1){

        event.target.innerHTML = "<img width='100px' height='100px' src='img/rod.png' />";
        current_player = player2;
        grid[event.target.value] = "X";

    } else if(current_player == player2){
        event.target.innerHTML = "<img width='100px' height='100px' src='img/sword.png' />";
        grid[event.target.value] = "O";

        current_player = player1;

    }
    event.target.removeEventListener('click', clicked);
}

//Vergelijkt de array en controleert welke speler gewonnen heeft. Wanneer de speler gewonnen heeft dan wordt het getoont met een gif en de naam van de speler die gewonnen heeft
function check_for_win() {
    //Check of speler 1 wint, als speler 1 wint dan word er een video van een vos getoont
    if(grid[0] == 'X' && grid[1] == 'X' && grid[2] == 'X'){
        win.innerHTML="<img class='mr-auto ml-auto d-block' src='img/default_1.gif' />" + "<h1 class='text-center'><br>Kirby wint!</h1>";
        video.innerHTML= "<video class='mr-auto ml-auto d-block' height='240' width='320' autoplay><source src='video/fox.mp4' type='video/mp4'></video>" + "<p class='text-center'>The epic random fox</p>"
    }
    else if(grid[3] == 'X' && grid[4] == 'X' && grid[5] == 'X') {
        win.innerHTML="<img class='mr-auto ml-auto d-block' src='img/default_1.gif' />" + "<h1 class='text-center'><br>Kirby wint!</h1>";
        video.innerHTML= "<video class='mr-auto ml-auto d-block' height='240' width='320' autoplay><source src='video/fox.mp4' type='video/mp4'></video>" + "<p class='text-center'>The epic random fox </p>"
    }
    else if(grid[6] == 'X' && grid[7] == 'X' && grid[8] == 'X'){
        win.innerHTML="<img class='mr-auto ml-auto d-block' src='img/default_1.gif' />" + "<h1 class='text-center'><br>Kirby wint!</h1>";
        video.innerHTML= "<video class='mr-auto ml-auto d-block' height='240' width='320' autoplay><source src='video/fox.mp4' type='video/mp4'></video>" + "<p class='text-center'>The epic random fox </p>"
    }
    else if(grid[0] == 'X' && grid[4] == 'X' && grid[8] == 'X'){
        win.innerHTML="<img class='mr-auto ml-auto d-block' src='img/default_1.gif' />" + "<h1 class='text-center'><br>Kirby wint!</h1>";
        video.innerHTML= "<video class='mr-auto ml-auto d-block' height='240' width='320' autoplay><source src='video/fox.mp4' type='video/mp4'></video>" + "<p class='text-center'>The epic random fox </p>"
    }
    else if(grid[2] == 'X' && grid[4] == 'X' && grid[6] == 'X'){
        win.innerHTML="<img class='mr-auto ml-auto d-block' src='img/default_1.gif' />" + "<h1 class='text-center'><br>Kirby wint!</h1>";
        video.innerHTML= "<video class='mr-auto ml-auto d-block' height='240' width='320' autoplay><source src='video/fox.mp4' type='video/mp4'></video>" + "<p class='text-center'>The epic random fox </p>"
    }
    else if(grid[0] == 'X' && grid[3] == 'X' && grid[6] == 'X'){
        win.innerHTML="<img class='mr-auto ml-auto d-block' src='img/default_1.gif' />" + "<h1 class='text-center'><br>Kirby wint!</h1>";
        video.innerHTML= "<video class='mr-auto ml-auto d-block' height='240' width='320' autoplay><source src='video/fox.mp4' type='video/mp4'></video>" + "<p class='text-center'>The epic random fox </p>"
    }
    else if(grid[1] == 'X' && grid[4] == 'X' && grid[7] == 'X'){
        win.innerHTML="<img class='mr-auto ml-auto d-block' src='img/default_1.gif' />" + "<h1 class='text-center'><br>Kirby wint!</h1>";
        video.innerHTML= "<video class='mr-auto ml-auto d-block' height='240' width='320' autoplay><source src='video/fox.mp4' type='video/mp4'></video>" + "<p class='mr-auto ml-auto d-block'>The epic random fox </p>"
    }
    else if(grid[2] == 'X' && grid[5] == 'X' && grid[8] == 'X'){
        win.innerHTML="<img class='mr-auto ml-auto d-block' src='img/default_1.gif' />" + "<h1 class='text-center'><br>Kirby wint!</h1>";
        video.innerHTML= "<video class='mr-auto ml-auto d-block' height='240' width='320' autoplay><source src='video/fox.mp4' type='video/mp4'></video>" + "<p class='mr-auto ml-auto d-block'>The epic random fox </p>"
    }
    //Check of speler 2 wint
    else if(grid[0] == 'O' && grid[1] == 'O' && grid[2] == 'O'){
        win.innerHTML="<img class='mr-auto ml-auto d-block' src='img/default_1.gif' />" + "<h1 class='text-center'><br>Metaknight wint!</h1>" + "<audio autoplay><source src='audio/wow.mp3' type='audio/mp3'></audio>"
    }
    else if(grid[3] == 'O' && grid[4] == 'O' && grid[5] == 'O') {
        win.innerHTML="<img class='mr-auto ml-auto d-block' src='img/default_1.gif' />" + "<h1 class='text-center'><br>Metaknight wint!</h1>" + "<audio autoplay><source src='audio/wow.mp3' type='audio/mp3'></audio>"
    }
    else if(grid[6] == 'O' && grid[7] == 'O' && grid[8] == 'O'){
        win.innerHTML="<img class='mr-auto ml-auto d-block' src='img/default_1.gif' />" + "<h1 class='text-center'><br>Metaknight wint!</h1>" + "<audio autoplay><source src='audio/wow.mp3' type='audio/mp3'></audio>"
    }
    else if(grid[0] == 'O' && grid[4] == 'O' && grid[8] == 'O'){
        win.innerHTML="<img class='mr-auto ml-auto d-block' src='img/default_1.gif' />" + "<h1 class='text-center'><br>Metaknight wint!</h1>" + "<audio autoplay><source src='audio/wow.mp3' type='audio/mp3'></audio>"
    }
    else if(grid[2] == 'O' && grid[4] == 'O' && grid[6] == 'O'){
        win.innerHTML="<img class='mr-auto ml-auto d-block' src='img/default_1.gif' />" + "<h1 class='text-center'><br>Metaknight wint!</h1>" + "<audio autoplay><source src='audio/wow.mp3' type='audio/mp3'></audio>"
    }
    else if(grid[0] == 'O' && grid[3] == 'O' && grid[6] == 'O'){
        win.innerHTML="<img class='mr-auto ml-auto d-block' src='img/default_1.gif' />" + "<h1 class='text-center'><br>Metaknight wint!</h1>" + "<audio autoplay><source src='audio/wow.mp3' type='audio/mp3'></audio>"
    }
    else if(grid[1] == 'O' && grid[4] == 'O' && grid[7] == 'O'){
        win.innerHTML="<img class='mr-auto ml-auto d-block' src='img/default_1.gif' />" + "<h1 class='text-center'><br>Metaknight wint!</h1>" + "<audio autoplay><source src='audio/wow.mp3' type='audio/mp3'></audio>"
    }
    else if(grid[2] == 'O' && grid[5] == 'O' && grid[8] == 'O'){
        win.innerHTML="<img class='mr-auto ml-auto d-block' src='img/default_1.gif' />" + "<h1 class='text-center'><br>Metaknight wint!</h1>" + "<audio autoplay><source src='audio/wow.mp3' type='audio/mp3'></audio>"
    }
    //Check of het gelijkspel is, zo ja wordt je uitgescholden door Jacco
    else if(grid[0] != '' && grid[1] != '' && grid[2] != '' && grid[3] != '' && grid[4] != '' && grid[5] != '' && grid[6] != '' && grid[7] != '' && grid[8] != '') {
        win.innerHTML="<img class='mr-auto ml-auto d-block' src='img/sans.gif' />" + "<h1 class='text-center'><br>Niemand wint!</h1>"
        faggot.innerHTML="<audio controls autoplay><source src='audio/faggot.wav' type='audio/wav'></audio>"
    }

}
