document.getElementById("play").addEventListener("click", initGame);





function initGame() {

    // creo costante difficoltà per agire sulla difficoltà
    const difficoltà = document.getElementById("difficoltà").value;

    let punti = 0;
    console.log("punteggio: ", punti);
    
    // creo il main
    const main = document.querySelector("main");

    // svuota il main
    main.innerHTML = "";

    // creo un div
    const griglia = document.createElement("div");
    // creo le classi per il div
    griglia.classList.add("container", "flex", "wrap");

    const punteggio = document.createElement("div");

    punteggio.classList.add("punteggio");

    const parolaPunteggio = document.createElement("div");

    parolaPunteggio.innerText = "Punteggio: ";

    const puntiPunteggio = document.createElement("div");

    puntiPunteggio.innerText = (punti);

    let gameover = false;


    // appendo 
    main.appendChild(griglia);
    main.appendChild(punteggio);
    punteggio.appendChild(parolaPunteggio);
    punteggio.appendChild(puntiPunteggio);
    
    if (difficoltà == "1") {

        let bombe = generabombe(16,100);
        console.log(bombe);

        console.log("gioco avviato in difficoltà facile");

        // creo celle da 0 a 100
        for (let i = 0; i < 100; i++) {
            // creo un div
            const box = document.createElement("div");
            // lo appendo come figlio a "griglia"
            griglia.appendChild(box);
            // creo classi per il div
            box.classList.add("cella", "easy");
            // aggiungo il testo (i) da 0 a 100 a "box"
            box.innerText = (i+1);

            box.addEventListener("click", function() {

                console.log("Punteggio: ", punti)

                if (gameover==false) {
                    let cellacorrente = i+1;

                    if (bombe.includes(cellacorrente)) {
                        this.classList.add("bomb");  
                        scopriBombe(bombe);
                        gameover = true;   
                        alert("partita terminata");
                    }else{
                        this.classList.add("safe");
                        punti++;
                        puntiPunteggio.innerText = (punti)

                        if(punteggio == 100 - 16) {
                            gameover = true;
                            alert("partita terminata");

                        }
                    }
                } else {
                }
            });
        }
    } else if (difficoltà == "2") {

        let bombe = generabombe(16,81);
        console.log(bombe);

        console.log("gioco avviato in difficoltà media");

        // creo celle da 0 a 81
        for (let i = 0; i < 81; i++) {
            // creo un div
            const box = document.createElement("div");
            // lo appendo come figlio a "griglia"
            griglia.appendChild(box);
            // creo classi per il div
            box.classList.add("cella", "medium");
            // aggiungo il testo (i) da 0 a 100 a "box"
            box.innerText = (i+1);

            box.addEventListener("click", function() {

                console.log("this: ", parseInt(this.innerText));

                if (gameover==false) {
                    let cellacorrente = i+1;

                    if (bombe.includes(cellacorrente)) {
                        this.classList.add("bomb");  
                        scopriBombe(bombe);
                        gameover = true;   
                        alert("partita terminata");
                    }else{
                        this.classList.add("safe");
                        punti++;
                        puntiPunteggio.innerText = (punti)

                        if(punteggio == 81 - 16) {
                            gameover = true;
                            alert("partita terminata");
                        }
                    }
                } else {
                }
            });
        }
    } else if (difficoltà == "3") {

        let bombe = generabombe(16,49);
        console.log(bombe);

        console.log("gioco avviato in difficoltà difficile");

        // creo celle da 0 a 49
        for (let i = 0; i < 49; i++) {
            // creo un div
            const box = document.createElement("div");
            // lo appendo come figlio a "griglia"
            griglia.appendChild(box);
            // creo classi per il div
            box.classList.add("cella", "hard");
            // aggiungo il testo (i) da 0 a 100 a "box"
            box.innerText = (i+1);

            box.addEventListener("click", function() {

                console.log("this: ", parseInt(this.innerText));

                if (gameover==false) {
                    let cellacorrente = i+1;

                    if (bombe.includes(cellacorrente)) {
                        this.classList.add("bomb");  
                        scopriBombe(bombe);
                        gameover = true;   
                        alert("partita terminata");
                    }else{
                        this.classList.add("safe");
                        punti++;
                        puntiPunteggio.innerText = (punti)

                        if(punteggio == 49 - 16) {
                            gameover = true;
                            alert("partita terminata");
                        }
                    }
                } else {
                }
            });         
        }
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min)
}

function generabombe(numerodibombe, numerodicelle) {
    console.log("numero di bombe: " + numerodibombe + " numero di celle: " + numerodicelle)

    let bombe = []

    while (bombe.length < numerodibombe) {

        let nuovonumero = getRandomNumber(1, numerodicelle);

        if (bombe.includes(nuovonumero)) {
            // console.log("bomba esistente", nuovonumero);
        } else{
            bombe.push(nuovonumero)
        }

        // if ( !bombe.includes(nuovonumero)) {
        //     bombe.push(nuovonumero)
        // }

    }
    
    return bombe
}

function scopriBombe(bombe) {

    // seleziono tutti i div con la classe "cella" 
    let celle = document.getElementsByClassName("cella");
    console.log("Bombe", bombe);

    for (let i = 0; i < celle.length; i++) {
        const box = celle[i];
        
        if (bombe.includes(i+1)) {
            box.classList.add("bomb");
        }
    }
}