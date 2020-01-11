const btn = document.getElementById("btn");

btn.addEventListener("click", function (){
    const emailAddress = document.getElementById("exampleInputEmail1").value;
    const password = document.getElementById("exampleInputPassword1").value;

    fetch('/data/data.json')
    .then(function (data){
        
        return data.json();
        
    })
    .then(console.log(data))
    .then(function (userName){
        var x = data.json();
        console.log(x);
        userName.forEach(function (userName){
            var userName;
            
            for(let i = 0; i<userName.length; i++){
                if(userName[i].login === emailAddress && userName[i].password === password){
                    window.location.replace("http://127.0.0.1:5500/flyight.html");
                }
                else {
                    alert("error")
                }
            }
       })
    })
    
})