
/*
*   myFunction JS
*
*   But :
*   -   d'animer un texte de gauche à droite
*   -   changer aléatoirement la couleur
*   -   changer aléatoirement le texte
*   Author : Vincent TEISSIER-COUTURIER
*   Date : 15/04/2021
*/
function myFunction() {
    // button disabled
    document.getElementById("myBtn").disabled = true;

    // generate random number
    let randomNumberOne = Math.floor(Math.random() * 5);
    let randomNumberTwo = Math.floor(Math.random() * 5);

    // text array and color array
    let texteArray = ["random text one", "random text two", "random text three", "random text four"];
    let colorArray = ["blue", "yellow", "red", "green"];

    // display text
    texteArray.forEach(function callback(value, index) {
        if (randomNumberOne == index) {
            document.getElementById("paragraphe").innerHTML = `${value}`;
        }
    });

    // display color
    colorArray.forEach(function callback(value, index) {
        if (randomNumberTwo == index) {
            document.body.style.backgroundColor = `${value}`;
        }
    });

    // animate text
    var id = null;
    var elem = document.getElementById("animate");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == window.screen.width) {
            clearInterval(id);
            document.getElementById("myBtn").disabled = false;
        } else {
            pos++;
            elem.style.left = pos + "px";
        }
    }
}