function themeSet(name){
    localStorage.setItem("theme", name);
    document.documentElement.className = name;
}

function themeToggle(){
    if (localStorage.getItem("theme") === "theme-dark"){
        themeSet("theme-dark");
    }
    else{
        themeSet("theme-forest");
    }
}

/* May not be used for a while...
function themeSwapImage(){
    if (localStorage.getItem("theme") === "theme-dark"){
        
    }
}*/

// Runs on website load, default theme load
(function (){
    if (localStorage.getItem("theme") === "theme-dark"){
        themeSet("theme-dark");
    }
    else{
        themeSet("theme-forest");
    }
}) ();

// Thanks to ___ for the code structure!
// @haxzie from medium.com