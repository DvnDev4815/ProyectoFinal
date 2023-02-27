var btn_intro= document.getElementById("btn_intro"),

    btn_platocomer= document.getElementById("btn_platocomer"),

    frm_main= document.getElementById("frm_main"),
    
    btn_platosaludable = document.getElementById("btn_platosaludable");

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