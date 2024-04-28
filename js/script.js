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
        }
    }



}

function abrirReviewNevermind(txt) {

    if (aberto == true) {
        fecharReviewNevermind(aberto);

        aberto = false;
    }
    else {



        aberto = true;





        var album = document.getElementById('localReviewNevermind');



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

function fecharReviewNevermind(aberto) {
    if (aberto == false) {
        album.style.visibility = 'visible';
        console.log('já tá fechado')
    }

    else {
        aberto = false;
        var album = document.getElementById('localReviewNevermind');


        var albumdisplay = document.getElementById('localReviewNevermind').style.display;

        console.log(albumdisplay.toString())

        if (albumdisplay.toString() == 'block') {
            albumdisplay = 'hidden';
            album.style.visibility = 'hidden';
            album.style.position = 'absolute';
        }
    }



}

function abrirReviewLTT(txt) {

    if (aberto == true) {
        fecharReviewLTT(aberto);

        aberto = false;
    }
    else {



        aberto = true;





        var album = document.getElementById('localReviewLTT');



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

function fecharReviewLTT(aberto) {
    if (aberto == false) {
        album.style.visibility = 'visible';
        console.log('já tá fechado')
    }

    else {
        aberto = false;
        var album = document.getElementById('localReviewLTT');


        var albumdisplay = document.getElementById('localReviewLTT').style.display;

        console.log(albumdisplay.toString())

        if (albumdisplay.toString() == 'block') {
            albumdisplay = 'hidden';
            album.style.visibility = 'hidden';
            album.style.position = 'absolute';
        }
    }



}

function abrirReviewCelebritySkin(txt) {

    if (aberto == true) {
        fecharReviewCelebritySkin(aberto);

        aberto = false;
    }
    else {



        aberto = true;





        var album = document.getElementById('localReviewCelebritySkin');



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

function fecharReviewCelebritySkin(aberto) {
    if (aberto == false) {
        album.style.visibility = 'visible';
        console.log('já tá fechado')
    }

    else {
        aberto = false;
        var album = document.getElementById('localReviewCelebritySkin');


        var albumdisplay = document.getElementById('localReviewCelebritySkin').style.display;

        console.log(albumdisplay.toString())

        if (albumdisplay.toString() == 'block') {
            albumdisplay = 'hidden';
            album.style.visibility = 'hidden';
            album.style.position = 'absolute';
        }
    }



}

function abrirReviewCore(txt) {

    if (aberto == true) {
        fecharReviewCore(aberto);

        aberto = false;
    }
    else {



        aberto = true;





        var album = document.getElementById('localReviewCore');



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

function fecharReviewCore(aberto) {
    if (aberto == false) {
        album.style.visibility = 'visible';
        console.log('já tá fechado')
    }

    else {
        aberto = false;
        var album = document.getElementById('localReviewCore');


        var albumdisplay = document.getElementById('localReviewCore').style.display;

        console.log(albumdisplay.toString())

        if (albumdisplay.toString() == 'block') {
            albumdisplay = 'hidden';
            album.style.visibility = 'hidden';
            album.style.position = 'absolute';
        }
    }



}

function abrirReviewPurple(txt) {

    if (aberto == true) {
        fecharReviewPurple(aberto);

        aberto = false;
    }
    else {



        aberto = true;





        var album = document.getElementById('localReviewPurple');



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

function fecharReviewPurple(aberto) {
    if (aberto == false) {
        album.style.visibility = 'visible';
        console.log('já tá fechado')
    }

    else {
        aberto = false;
        var album = document.getElementById('localReviewPurple');


        var albumdisplay = document.getElementById('localReviewPurple').style.display;

        console.log(albumdisplay.toString())

        if (albumdisplay.toString() == 'block') {
            albumdisplay = 'hidden';
            album.style.visibility = 'hidden';
            album.style.position = 'absolute';
        }
    }



}

