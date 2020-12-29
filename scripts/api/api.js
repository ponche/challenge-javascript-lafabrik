class LibraryApi {
    
    /**
     * @todo Instancier Axios
     * @param {string} base_url
     * @see https://jikan.docs.apiary.io/#introduction/information
     * @see https://github.com/axios/axios
     */
    constructor(base_url) {
        this.base_url = base_url; 
        
    }

    /**
     * @todo Utiliser axios pour récupérer les données de la ressources
     * @param {string} resource_url => peut être par exemple '/anime/10087'
     * @returns {Promise} Promesse qui retourne les données JSON en cas de succès
     * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise
     */
    fetch(resource_url) {
        axios(this.base_url + resource_url)
        .then(function (response) {
            console.log(response);
            return response; 
        })
        .catch(function(error){
            console.error(error);
        })

        
    }
}