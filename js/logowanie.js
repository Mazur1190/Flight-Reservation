
function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../data/data.json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {

            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(xobj.responseText);

        }
    }
    xobj.send();

}

// Call to function with anonymous callback
loadJSON(function(response) {
    // Do Something with the response e.g.
    data = JSON.parse(response);

    // Assuming json data is wrapped in square brackets as Drew suggests
    console.log(data);

    for (let i =0; i<data.lenght; i++) {
        console.log("hello");
        data[i];
        console.log(data[i].login);
    }
    if(data[0].name=="Harry"){
        console.log('works');
    }else{console.log('not worked')}
});

// loadJSON(function(response) {
//     // Do Something with the response e.g.
//     data= JSON.parse(response);

//     // Assuming json data is wrapped in square brackets as Drew suggests
//     // console.log(data);
//     if(data[0].name=="Harry"){
//         console.log('works');
//     }else{console.log('not worked')}
// });

// loadJSON(function(response) {
//     // Do Something with the response e.g.
//     data= JSON.parse(response);

//     // Assuming json data is wrapped in square brackets as Drew suggests
//     // console.log(data);
//     if(data[0].name=="Harry"){
//         console.log('works');
//     }else{console.log('not worked')}
// });