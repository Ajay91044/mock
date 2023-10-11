let movies= document.getElementById("movies")
let section = document.querySelector("section")
let name = document.getElementById("name")
let password = document.getElementById("password")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let option1 = document.getElementById("option1")
let option2 = document.getElementById("option1")
let option3 = document.getElementById("option1")
let option4 = document.getElementById("option1")

// ! Signing  data--------------

function store() {
    localStorage.clear()
    if (/[A-Z]+/.test(name.value)) {
        document.querySelector("p").innerText = ""
        localStorage.setItem("name", `${name.value}`)

    }
    else {
        document.querySelector("p").innerText = "first letter should be Capital"
    }

    if (password.value.match(/^[A-Z]+/g)) {
        document.querySelector("h3").innerText = ""
        localStorage.setItem("password", `${password.value}`)

    }
    else {
        document.querySelector("h3").innerText = "password should contain atleast 1 Uc,1 lc ,1 digit"
    }
    if (/[@]/.test(email.value)) {
        document.querySelector("h4").innerText = ""
        localStorage.setItem("email", `${email.value}`)

    }
    else {
        document.querySelector("h4").innerText = "[Number,@]"
    }
    if (/^[0-9]+$/g.test(phone.value))
     {
        console.log(/^[0-9]+$/g.test(phone.value));
        document.querySelector("h2").innerText = ""
        localStorage.setItem("phone", `${phone.value}`)

    }
    else {
        document.querySelector("h2").innerText = "Only Digits are allowed"
    }
    localStorage.setItem("Profession", `${option1.value}`)
    // alert("SignUp Succesful");


}


let username = document.getElementById("username")
let loginpassword = document.getElementById("loginpassword")





// ! Login checking------------
function check() {

    let remoteName = localStorage.getItem("name")
    let remotePassword = localStorage.getItem("password")

    if (username.value.match(/^[A-Z]/) ) {
        document.querySelector("h5").innerText = ""
        if (loginpassword.value.match(/^[A-Z]/)) 
        {
            document.querySelector("h6").innerText = ""
            if (username.value == remoteName && loginpassword.value == remotePassword) {
                console.log("login succesful");
                // alert("Login Succesful")

                api()


            }
            else {
                console.log("Incorrect username or password");
                alert("incorrect credential")
            }

        }
        else {
            document.querySelector("h6").innerText = "first letter should be Capital of password"

        }


    }
    else {
        document.querySelector("h5").innerText = "first letter should be Capital"
    }

   

}

api()

let moviesearch=document.getElementById("moviesearch")
async function api() {
    let response = await fetch(`http://www.omdbapi.com/?t=${moviesearch.value}&apikey=8f9acc2`)
    let data = await response.json()


    console.log(data);

    let {Title,Poster, Genre, Director, Actors, Runtime, Language, Released } = data;
    console.log(Title,Poster, Genre, Director, Actors, Runtime, Language, Released);
  
             
      movies.innerHTML=
     `<div><img src=${Poster} alt="./download (1).png"></div>
       Title:<h1>${Title}</h1>
       Genre:<h3>${Genre}</h3>
       Director:<h4>${Director}</h4>
       Starring:<h4>${Actors}</h4>
       Mins:<span>${Runtime}</span>
       ||<span>${Language}</span>||
       <span>${Released}</span>
       <button onclick="InlargeImage() id="Watchlist">Watchlist</button>
    `



}
// api()

let Watchlist=document.getElementById("Watchlist")



