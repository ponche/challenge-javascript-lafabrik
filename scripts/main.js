

/**
 * @todo Point d'entrée pour faire vos exercices...
 */
window.onload = init

function init() {
     axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'; 
     axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'; 
    // console.log("Coucou ! C'est ici que l'aventure commence ! Bon courage :-)")
    // const API = new LibraryApi('https://api.jikan.moe/v3'); 
    // console.log(API.fetch('/'))

    // test desepéré 
    fetch('https://api.jikan.moe/v3').then(function(response){
        console.log('avec un fetch classique'); 
        console.log(response); 
    });

    const API = new LibraryApi('https://api.kikan.moe/v3'); 
    API.fetch('/').then(function(response){
        console.log('avec Axios'); 
        console.log(response); 
    })
}