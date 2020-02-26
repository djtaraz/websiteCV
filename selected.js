var navelement = btnContainer.getElementsByClassName("navelement");

for (var i = 0; i < navelement.length; i++) {
    navelement[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}