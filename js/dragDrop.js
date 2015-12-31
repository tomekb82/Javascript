// Anonymous function to contain the variables
(function(){
    "use strict";
// define the drop zone
    var dropZone = document.getElementById("drop-zone");
// add a drag over event to the zone
    dropZone.addEventListener("dragover", function(e) {
        e.preventDefault();
// add a hover class so you can see it's working
        dropZone.setAttribute("class","over");
    }, false);
// on file drop grab all available image information
    dropZone.addEventListener("drop", function(e) {
        "use strict";
        e.preventDefault();
// get all the files being dropped
        var files = e.dataTransfer.files,
            fileCount = files.length,
            i;
        if(fileCount > 0) {
// loop through all the files and output the data
            for (i = 0; i < fileCount; i = i + 1) {
                var file = files[i],
                    name = file.name,
                    size = file.size,
                    type = file.type,
                    reader = new FileReader(); // initialize the FileReader Object
// remove the hover class
                dropZone.removeAttribute("class");
                reader.onload = function(e) {
                    dropZone.innerHTML += '<div><img src="' + e.target.result + '"><br>'+ name +', '+ type +', '+ size +' bytes</div></div>';
                };
// render the image as a data URL
                reader.readAsDataURL(file);
            } // end loop
        } // end count check
    }, false);

})(); // end anonymous function