// anonymous function to contain the variables
(function () {
    var player = document.getElementById("player");
    // play or pause the audio file
    function playPause() {
        // if the audio is paused, play it
        if (player.paused) {
            player.play();
            // if the audio is playing, pause it
        } else {
            player.pause();
        }
    }
    // turn down the volume by .1 each time
    function volumeDecrease () {
        // check to see if the volume is already all the way down
        if(player.volume > .1) {
            player.volume -= .1;
        } else {
            alert("minimum volume level");
        }
    }
    // turn up the volume by .1 each time
    function volumeIncrease () {
        // check to see if the volume is already all the way up
        if(player.volume <= .9) {
            player.volume += .1;
        } else {
            alert("max volume level, see an ear doctor");
        }
    }
    // set up your listeners
    document.getElementById("play").addEventListener('click', playPause, false);
    document.getElementById("vol-up").addEventListener('click', volumeIncrease, false);
    document.getElementById("vol-down").addEventListener('click', volumeDecrease, false);
})();