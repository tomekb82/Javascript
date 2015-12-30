/**
 * Created by Tomasz.Belina on 2015-12-30.
 */

var contacts = {
    "addressBook" : [
        {
            "name": "hillisha",
            "email": "hill@example.com"
        },
        {
            "name": "paul",
            "email": "cleveland@example.com"
        },
        {
            "name": "vishaal",
            "email": "vish@example.com"
        },
        {
            "name": "mike",
            "email": "grady@example.com"
        },
        {
            "name": "jamie",
            "email": "dusted@example.com"
        }
    ]
};


// anonymous function to contain the variables
(function () {
// create a new instance of the worker
    var worker = new Worker("js/html5/worker.js");
    var btnStart = document.getElementById("start"),
        btnStop = document.getElementById("stop"),
        timerOuput = document.getElementById("timer"),
        workerOutput = document.getElementById("output2"),
        num = 0;
// create a script that is constantly running to block the normal flow
    setInterval(function () {
        num = num + 1;
        timerOuput.innerHTML = num;
    }, 1000);
    // add click event to the start button to activate the worker
    btnStart.addEventListener("click", function() {
        console.log("main: postMessage()");
        worker.postMessage(contacts); // send contacts data to the worker
    }, false);
// set up message listener
    worker.addEventListener("message", function(e) {
        console.log("main: get message");
        workerOutput.innerHTML += e.data;
    }, false);
// add a click event to the stop button to terminate the worker
    btnStop.addEventListener("click", function() {
        console.log("main: stop worker");
        worker.terminate();
        btnStart.setAttribute("disabled", "disabled");
        alert("worker has been terminated");
    }, false);
})();