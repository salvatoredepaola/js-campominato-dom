document.getElementById("play").addEventListener("click", initGame);





function initGame() {

    // genera bombe
    

    // creo costante difficoltà per agire sulla difficoltà
    const difficoltà = document.getElementById("difficoltà").value;

    if (difficoltà == "1") {
        console.log("gioco avviato in difficoltà facile");

        // creo 16 bombe per 49 caselle
        let bombe = generabombe(16,100)
        console.log(bombe)
        
        // creo il main
        const main = document.querySelector("main");

        // svuota il main
        main.innerHTML = "";

        // creo un div
        const griglia = document.createElement("div");
        // creo le classi per il div
        griglia.classList.add("container", "flex", "wrap");

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
                console.log("this: ", parseInt(this.innerText));

                // PARSEINT!!!!!!!!!!!!!!!!!!!!!!!!!!!
                // let cellacorrente = parseInt(this.innerText);
                let cellacorrente = i+1;

                if (bombe.includes(cellacorrente)) {
                    this.classList.add("bomb");     
                }else{
                    this.classList.add("safe");
                }

            });


        }



        // var arr = [];
        //     while (arr.length < 16) {
        //         var r = Math.floor(Math.random() * 100) + 1;
        //         if(arr.indexOf(r) === -1) arr.push(r);
        //     }
        // console.log(arr);


        // appendo la griglia grande
        main.appendChild(griglia);

        
    } else if (difficoltà == "2") {

        console.log("gioco avviato in difficoltà media");

        // creo 16 bombe per 49 caselle
        let bombe = generabombe(16,81)
        console.log(bombe)

        // creo il main
        const main = document.querySelector("main");

        // svuota il main
        main.innerHTML = "";

        // creo un div
        const griglia = document.createElement("div");

        // creo le classi per il div
        griglia.classList.add("container", "flex", "wrap");

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

                // PARSEINT!!!!!!!!!!!!!!!!!!!!!!!!!!!
                // let cellacorrente = parseInt(this.innerText);
                let cellacorrente = i+1;

                if (bombe.includes(cellacorrente)) {
                    this.classList.add("bomb");     
                }else{
                    this.classList.add("safe");
                }

            });
            
        }

        // appendo la griglia grande
        main.appendChild(griglia);

    } else if (difficoltà == "3") {

        console.log("gioco avviato in difficoltà difficile");

        // creo 16 bombe per 49 caselle
        let bombe = generabombe(16,49)
        console.log(bombe)

        // creo il main
        const main = document.querySelector("main");

        // svuota il main
        main.innerHTML = "";

        // creo un div
        const griglia = document.createElement("div");

        // creo le classi per il div
        griglia.classList.add("container", "flex", "wrap");

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

                // PARSEINT!!!!!!!!!!!!!!!!!!!!!!!!!!!
                // let cellacorrente = parseInt(this.innerText);
                let cellacorrente = i+1;

                if (bombe.includes(cellacorrente)) {
                    this.classList.add("bomb");     
                }else{
                    this.classList.add("safe");
                }

            });         
        }


        // for (let i = 1; i < 16; i++) {
        //     var value = Math.floor(Math.random() * 2) + 1; 
        //     console.log(value);
        // }

        // appendo la griglia grande
        main.appendChild(griglia);
    }



}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min)
}

function generabombe(numerodibombe, numerodicelle) {
    console.log("numero di bombe: " + numerodibombe + " numero di celle: " + numerodicelle)

    let bombe = []

    while (bombe.length < 16) {

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