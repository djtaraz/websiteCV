function showTech() {
    if (document.getElementById('tech')) {

        if (document.getElementById('tech').style.display == 'none') {
            document.getElementById('tech').style.display = 'block';
            document.getElementById('trans').style.display = 'none';
        } else {
            document.getElementById('tech').style.display = 'block';
            document.getElementById('trans').style.display = 'none';
        }
    }
}

function showTrans() {
    if (document.getElementById('trans')) {

        if (document.getElementById('trans').style.display == 'none') {
            document.getElementById('trans').style.display = 'block';
            document.getElementById('tech').style.display = 'none';
        } else {
            document.getElementById('trans').style.display = 'block';
            document.getElementById('tech').style.display = 'none';
        }
    }
}