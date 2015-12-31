(function () {


// storing data in a JSON object
var dude = {
    "dude" : [
    {
        "name": "Tim",
        "city": "Boston",
        "age": "107"
    }
]}

// storing data in the browser
//localStorage.setItem("dudeInfo", JSON.stringify(dude));
sessionStorage.setItem("dudeInfoSession", JSON.stringify(dude));

// getting saved data
//localStorage.getItem("dudeInfo");
var readDude = JSON.parse(sessionStorage.getItem("dudeInfoSession"));
console.log(readDude.dude[0].name);

})();
