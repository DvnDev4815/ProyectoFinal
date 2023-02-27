var btn_intro= document.getElementById("btn_intro"),

    btn_platocomer= document.getElementById("btn_platocomer"),

    frm_main= document.getElementById("frm_main"),
    
    btn_platosaludable = document.getElementById("btn_platosaludable"),
    
    btn_jarrabeber = document.getElementById("btn_jarrabeber"),
    
    btn_conclucion = document.getElementById("btn_conclucion"),
    
    btn_fuentes = document.getElementById("btn_fuentes");

btn_intro.addEventListener("click", function() {
    document.title= "Vida Saludable - Introduccion"
    frm_main.setAttribute("src", "/assets/html/intro.html");
})

btn_platocomer.addEventListener("click", function(){
    document.title= "Vida Saludable - Plato del buen comer"
    frm_main.setAttribute("src", "/assets/html/PlatoBuencomer.html");
})

btn_platosaludable.addEventListener("click", function(){
    document.title= "Vida Saludable - Plato del Saludable"
    frm_main.setAttribute("src", "/assets/html/PlatoSaludable.html");
})

btn_jarrabeber.addEventListener("click", function(){
    document.title= "Vida Saludable - Jarra del buen beber"
    frm_main.setAttribute("src", "/assets/html/JarraBeber.html");
})

btn_conclucion.addEventListener("click", function(){
    document.title= "Vida Saludable - Conclucion"
    frm_main.setAttribute("src", "/assets/html/Conclucion.html");
})

btn_fuentes.addEventListener("click", function(){
    document.title= "Vida Saludable - Conclucion"
    frm_main.setAttribute("src", "/assets/html/Fuentes.html");
})