
/*
*   myFunction JQUERY
*
*   But :
*   -   d'animer un texte de gauche à droite
*   -   changer aléatoirement la couleur
*   -   changer aléatoirement le texte
*   Author : Vincent TEISSIER-COUTURIER
*   Date : 15/04/2021
*/
$(document).ready(function () {
    
    // text array and color array
    let texteArray = ["random text one", "random text two", "random text three", "random text four"];
    let colorArray = ["blue", "yellow", "red", "green"];

    $("#myBtn").click(function () {
        $("#myBtn").attr('disabled', true);

        // generate random number
        let randomNumberOne = Math.floor(Math.random() * 5);
        let randomNumberTwo = Math.floor(Math.random() * 5); 

        // display text
        texteArray.forEach(function callback(value, index) {
            if (randomNumberOne == index) {
                $("#paragraphe").text(value);
            }
        });

        // display color
        colorArray.forEach(function callback(value, index) {
            if (randomNumberTwo == index) {
                $("body").css("background-color", value);
            }
        });
        
        // animate text left to right
        $("#animate").show(function () {            
            $("#animate").animate({ left: $(window).width() }, 5000, function () {
                $("#animate").hide(function () {
                    $("#animate").animate({ left: "0px" }, function () {
                        $("#myBtn").attr('disabled', false);
                    });
                });
            });
        });
    });
});