let content = document.getElementById('content');

let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
b1.addEventListener('click', button1);
b2.addEventListener('click', button2);

function button1() {
    content.innerHTML =  
    `    <br>\n` +
        `    <h1 id=\"project\" class=\"invertedTitle text-center w-25 ml-auto mr-auto\">projecten</h1>\n` +
        `<br>` +
        '<br>' +
       ` <h1 id=\"project\" class=\"invertedTitle text-center w-75 ml-auto mr-auto\">Sterretjes, Zwaardjes en Kerbes</h1>\n` +
`   <div class="container">` +
`<br>` +
`    <p class=\"text-light text-center\">Boter kaas en eieren in Javascript, alleen dan met zwaardjes, sterretjes en kerbes</p>` +
        `<table class="kirbTable">` +
            `<tr>` +
`                <td class="kirb"></td>` +
`                <td class="vert kirb"></td>` +
`                <td class="kirb"></td>` +
            `</tr>` +
            `<tr>` +
               ` <td class="hori kirb"></td>` +
                `<td class="vert hori kirb"></td>` +
                `<td class="hori kirb"></td>` +
            `</tr>` +
            `<tr>` +
                `<td class="kirb"></td>` +
                `<td class="vert kirb"></td>` +
                `<td class="kirb"></td>` +
            `</tr>` +
        `</table>` +
    `</div>` +
    `<div class="border p-0 ml-auto mr-auto col-sm-1">` +
        `<button class="btn m-10 p-0 btn-dark startGame col-sm-12" onclick="startGame()" id="startKirb">Start</button>` +
    `</div>` +
    `<div >` +
        `<h1 id="playerOne"></h1>` +
    `</div>` +
    `<div>` +
        `<h1  id="playerTwo"></h1>` +
    `</div>` +
    `<div id="video"></div>` +
    `<div class="justify-content-center" +
         id="win"></div>` +
    `<div hidden id="loser"></div>` + `<br>` +
    '<br>' +
   ` <h1 id=\"project\" class=\"invertedTitle text-center w-75 ml-auto mr-auto\">Memory</h1>\n` +
   `<br>` +
   `<br>` +
   `<div class="memerijContainer">` +
`    <p class=\"text-light text-center\">Maffe memory.</p>` +
`<div class="memeContainer"` +
`<div class="tableContainer">`    +
    `<div id="frikandelbroodje"></div>` +
`<div id="white"></div>` +
`<table class="memeTable">` +
`<tr class="cellBg">` +
    `<td class="cell " ></td>` +
    `<td class="cell " ></td>` +
    `<td class="cell " ></td>` +
    `<td class="cell " ></td>` +
`</tr>` +
`<tr class="cellBg">` +
    `<td class="cell " ></td>` +
    `<td class="cell " ></td>` +
    `<td class="cell " ></td>` +
    `<td class="cell " ></td>` +
`</tr>` +
`<tr class="cellBg">`+
    `<td class="cell " ></td></td>` +
    `<td class="cell " ></td>` +
    `<td class="cell " ></td>` +
    `<td class="cell " ></td>` +
`</tr>` +
`<tr class="cellBg">` +
    `<td class="cell " ></td>` +
    `<td class="cell " ></td>` +
    `<td class="cell " ></td>` +
    `<td class="cell " ></td>` +
`</tr>` +
`<tr class="cellBg">` +
    `<td class="cell " ></td>` +
    `<td class="cell " ></td>` +
    `<td class="cell " ></td>` +
    `<td class="cell " ></td>` +
`</tr>` +
`</table>` +
`<form class="gamertags">` +
`<p class=\"text-light text-center\">Voer hier jullie epic gamertags in:</p>` +
`<p class=\"text-light text-center\">Gamer 1:</p>` +
`<input id="input1" type="text" name="playerOneName" placeholder="player 1"><br>` +
`<p class=\"text-light text-center\">Gamer 2:</p>` +
`<input id="input2" type="text" name="playerTwoName" placeholder="player 2"><br>` +
`</form>` +
`<button id="startMeme" class="btn p-0 btn-dark startGame col-sm-12">start</button>` +
`<div class="scores">` +    
`<span class="spannend"></span>` +


`<span class="spannend"></span>` +


`</div>` +
`</div>` +
`</div>` +
`</div>`;


mainBke();
meme();
}

function button2() {
    let huidigeLeeftijd = 17;
    let d = new Date()
    let jaar = d.getFullYear();
    let maand = d.getMonth();
    let dag = d.getDay();

    if (jaar > 2019 && maand >= 1) {
        huidigeLeeftijd++;
    }

    content.innerHTML = "    <br>\n" +
        "    <h1 id=\"project\" class=\"text-center w-25 ml-auto mr-auto\">ABOUT ME</h1>\n" +
        `    <p class=\"text-light text-center\">Mijn naam is Ties en ik ben een 18-jarige AO-er. Ik ben graag bezig met de frontend en het maken van domme Javascript applicaties. Hier een daar werk ik wel eens met Laravel en React/Vue</p>`;
}