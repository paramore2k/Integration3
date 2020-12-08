/* Titre clignotant en JS */

var titreClignonant = function(){
    if (document.getElementById('titreClignotant').style.visibility==='visible'){
        document.getElementById('titreClignotant').style.visibility='hidden';
    }
    else{
        document.getElementById('titreClignotant').style.visibility='visible';
    }
};
/* On appel le setIntervcal pour que le titre devienne visible et invisible */
periode = setInterval(titreClignonant, 800);
