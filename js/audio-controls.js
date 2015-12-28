
/* Function and closure development pattern */

var controls = function(el){

    var audioControls = el,
        playButton = document.getElementById("play"),
        stopButton = document.getElementById("stop");

    /* set up event listeners */
    playButton.addEventListener("click", play, false);
    stopButton.addEventListener("click", stop, false);

    function play(){
        // clousure - accesing parent function variable
        audioControls.setAttribute("class", "playing");
    }

    function stop(){
        // clousure - accesing parent function variable
        audioControls.setAttribute("class", "stopped");
    }

    // set up a natural API to return
    return play, stop;

};


/* Event - driven Javascript pattern */

function pause(){
    // apply a class to the parent node of whatever was clicked
    this.parentNode.setAttribute("class", "pausing");
}

function record(){
    // apply a class to the parent node of whatever was clicked
    this.parentNode.setAttribute("class", "recording");
}

