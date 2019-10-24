function setup() {
    var socket = io();
    var side = 15;
    var matrix = [];
    
    //! Getting DOM objects (HTML elements)
    let weatherElement = document.getElementById('weather');
    let grassCountElement = document.getElementById('grassCount');
    let grassLiveCountElement = document.getElementById('grassLiveCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let grassEaterLiveCountElement = document.getElementById('grassEaterLiveCount');
    let predatorCountElement = document.getElementById('predatorCount');
    let predatorLiveCountElement = document.getElementById('predatorLiveCount');
    let amenakerCountElement = document.getElementById('amenakerCount');
    let amenakerLiveCountElement = document.getElementById('amenakerLiveCount');
    let doktorCountElement = document.getElementById('doktorCount');
    let doktorLiveCountElement = document.getElementById('doktorLiveCount');
    let vaxkotCountElement = document.getElementById('vaxkotCount');
    let vaxkotLiveCountElement = document.getElementById('vaxkotLiveCount');
    //! adding socket listener on "data" <-- name, after that fire 'drawCreatures' function 

    socket.on("data", drawCreatures);

    function drawCreatures(data) {

        //! after getting data pass it to matrix variable
        matrix = data.matrix;
        weatherElement.innerText = data.weather;
        grassCountElement.innerText = data.grassCounter;
        grassLiveCountElement.innerText = data.grassLiveCounter;
        grassEaterCountElement.innerText = data.grassEaterCounter;
        grassEaterLiveCountElement.innerText = data.grassEaterLiveCounter;
        predatorCountElement.innerText = data.predatorCounter;
        predatorLiveCountElement.innerText = data.predatorLiveCounter;
        amenakerCountElement.innerText = data.amenakerCounter;
        amenakerLiveCountElement.innerText = data.amenakerLiveCounter;
        doktorCountElement.innerText = data.doktorCounter;
        doktorLiveCountElement.innerText = data.doktorLiveCounter;
        vaxkotCountElement.innerText = data.vaxkotCounter;
        vaxkotLiveCountElement.innerText = data.vaxkotLiveCounter;
        //! Every time it creates new Canvas with new matrix size
        createCanvas(matrix[0].length * side, matrix.length * side)
        //! clearing background by setting it to new grey color
        background('#acacac');
        //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)

        //! Drawing and coloring RECTs
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if(data.weather == "Ամառ"){
                        fill("#0b6b00");
                    }else if (data.weather == "Աշուն"){
                        fill("#14c400");
                    }else if (data.weather == "Ձմեռ"){
                        fill("#109c00");
                    }else if (data.weather == "Գարուն"){
                        fill("#18ed00");
                    }
                } else if (matrix[i][j] == 2) {
                    if(data.weather == "Ամառ"){
                        fill("#c7e300");
                    }else if (data.weather == "Աշուն"){
                        fill("#829400");
                    }else if (data.weather == "Ձմեռ"){
                        fill("#9db300");
                    }else if (data.weather == "Գարուն"){
                        fill("#6e7d00");
                    }
                } else if (matrix[i][j] == 0) {
                    fill('#cacaca');
                } else if (matrix[i][j] == 3) {
                    if(data.weather == "Ամառ"){
                        fill("#6e0000");
                    }else if (data.weather == "Աշուն"){
                        fill("#ff0000");
                    }else if (data.weather == "Ձմեռ"){
                        fill("#c90000");
                    }else if (data.weather == "Գարուն"){
                        fill("#910000");
                    }
                } else if (matrix[i][j] == 4) {
                    if(data.weather == "Ամառ"){
                        fill("#0055cc");
                    }else if (data.weather == "Աշուն"){
                        fill("#00429e");
                    }else if (data.weather == "Ձմեռ"){
                        fill("#003278");
                    }else if (data.weather == "Գարուն"){
                        fill("#006aff");
                    }
                } else if (matrix[i][j] == 5) {
                    if(data.weather == "Ամառ"){
                        fill("#000000");
                    }else if (data.weather == "Աշուն"){
                        fill("#383838");
                    }else if (data.weather == "Ձմեռ"){
                        fill("#919191");
                    }else if (data.weather == "Գարուն"){
                        fill("#6e6e6e");
                    }
                } else if (matrix[i][j] == 6) {
                    if(data.weather == "Ամառ"){
                        fill("#8a0079");
                    }else if (data.weather == "Աշուն"){
                        fill("#ed00ce");
                    }else if (data.weather == "Ձմեռ"){
                        fill("#69005c");
                    }else if (data.weather == "Գարուն"){
                        fill("#b800a1");
                    }
                }
                rect(j * side, i * side, side, side);
            }
        }
    }
}