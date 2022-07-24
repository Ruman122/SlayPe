let switchmode = document.getElementById("switchmode");

switchmode.onclick = function() {

    let theme = document.getElementById("theme")
    if (theme.getAttribute("href") == "lightmode.css"){

        theme.href = "darkmode.css";
    } else{

        theme.href = "lightmode.css";
    }
}