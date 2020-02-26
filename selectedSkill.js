var navContainer = document.getElementsByClassName("main");

// Get all buttons with class="btn" inside the container
var navelement = btnContainer.getElementsByClassName("navelement");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < navelement.length; i++) {
    navelement[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}