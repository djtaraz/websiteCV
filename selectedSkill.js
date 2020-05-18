var btnContainer = document.getElementById("buttonDiv");

// Get all buttons with class="btn" inside the container
var buttonSkill = btnContainer.getElementsByClassName("buttonSkill");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < buttonSkill.length; i++) {
    buttonSkill[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("pressed");
        current[0].className = current[0].className.replace(" pressed", "");
        this.className += "pressed";
    });
}