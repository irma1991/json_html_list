var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4){
        var mokiniai = JSON.parse(xhr.responseText);

        let output = '';
        let x = '';
        for (var i = 0; i < mokiniai.length; i++) {
                // output += '<li>'+mokiniai[i].vardas+'</li>';
                if(mokiniai[i].lokacija === true){
                    output += '<li>'+"Yra: "+mokiniai[i].vardas+'</li>';
                } if(mokiniai[i].lokacija === false){
                    output += '<li>'+"Nera: "+mokiniai[i].vardas+'</li>';
                }
        }
        document.getElementById('mokiniai').innerHTML = output;
    }

};

xhr.open('GET', 'duomenys/mokiniai.json');

xhr.send();
