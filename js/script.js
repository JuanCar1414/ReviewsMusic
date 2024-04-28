var aberto = false;

function retornarConsole() {
    console.log('Funcionou')
}


function fecharReviewAnacronico(aberto) {
    if (aberto == false) {
        album.style.visibility = 'visible';
        console.log('já tá fechado')
    }

    else {
        aberto = false;
        var album = document.getElementById('localReviewJarOfFiles');


        var albumdisplay = document.getElementById('localReviewJarOfFiles').style.display;

        console.log(albumdisplay.toString())

        if (albumdisplay.toString() == 'block') {
            albumdisplay = 'hidden';
            album.style.visibility = 'hidden';
            album.style.position = 'absolute';
        }
    }



}

function abrirReviewJarOfFiles(txt) {

    if (aberto == true) {
        fecharReviewJarOfFiles(aberto);

        aberto = false;
    }
    else {



        aberto = true;





        var album = document.getElementById('localReviewJarOfFiles');



        album.style.backgroundColor = '#cf9191';
        album.style.display = 'block';
        album.style.visibility = 'visible';
        album.style.position = 'relative';
        album.style.width = '300px';
        album.style.height = '200px';
        album.style.borderRadius = '20px';
        album.style.padding = '8px';
        album.style.marginLeft = '8px';

        album.innerText = 'Review do Album: \n \n' + txt;

        album.style.fontFamily = 'Arial, Helvetica, sans-serif';
        album.style.fontSize = '16px';

        console.log(aberto);
    }


}

function fecharReviewJarOfFiles(aberto) {
    if (aberto == false) {
        album.style.visibility = 'visible';
        console.log('já tá fechado')
    }

    else {
        aberto = false;
        var album = document.getElementById('localReviewJarOfFiles');


        var albumdisplay = document.getElementById('localReviewJarOfFiles').style.display;

        console.log(albumdisplay.toString())

        if (albumdisplay.toString() == 'block') {
            albumdisplay = 'hidden';
            album.style.visibility = 'hidden';
            album.style.position = 'absolute';
            console.log('cu')
        }
    }



}

function abrirReviewAnacronico(txt) {

    if (aberto == true) {
        fecharReviewAnacronico(aberto);

        aberto = false;
    }
    else {



        aberto = true;





        var album = document.getElementById('localReviewAnacronico');



        album.style.backgroundColor = '#cf9191';
        album.style.display = 'block';
        album.style.visibility = 'visible';
        album.style.position = 'relative';
        album.style.width = '300px';
        album.style.height = '200px';
        album.style.borderRadius = '20px';
        album.style.padding = '8px';
        album.style.marginLeft = '8px';

        album.innerText = 'Review do Album: \n \n' + txt;

        album.style.fontFamily = 'Arial, Helvetica, sans-serif';
        album.style.fontSize = '16px';

        console.log(aberto);
    }


}

function fecharReviewAnacronico(aberto) {
    if (aberto == false) {
        album.style.visibility = 'visible';
        console.log('já tá fechado')
    }

    else {
        aberto = false;
        var album = document.getElementById('localReviewAnacronico');


        var albumdisplay = document.getElementById('localReviewAnacronico').style.display;

        console.log(albumdisplay.toString())

        if (albumdisplay.toString() == 'block') {
            albumdisplay = 'hidden';
            album.style.visibility = 'hidden';
            album.style.position = 'absolute';
            console.log('cu')
        }
    }



}

function abrirReviewAnacronico(txt) {

    if (aberto == true) {
        fecharReviewAnacronico(aberto);

        aberto = false;
    }
    else {



        aberto = true;





        var album = document.getElementById('localReviewAnacronico');



        album.style.backgroundColor = '#cf9191';
        album.style.display = 'block';
        album.style.visibility = 'visible';
        album.style.position = 'relative';
        album.style.width = '300px';
        album.style.height = '200px';
        album.style.borderRadius = '20px';
        album.style.padding = '8px';
        album.style.marginLeft = '8px';

        album.innerText = 'Review do Album: \n \n' + txt;

        album.style.fontFamily = 'Arial, Helvetica, sans-serif';
        album.style.fontSize = '16px';

        console.log(aberto);
    }


}