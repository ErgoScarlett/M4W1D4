const button = document.getElementById("button-search");

// Event listener sul click del pulsante
button.addEventListener("click", () => {
    // Richiama la funzione search()
    search();
    });

// Funzione per la ricerca
function search() {

    // Recupera il valore dell'input
    const input = document.getElementById("searchField");
    const artist = input.value;

    // Fetch degli album dell'artista
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem`)
    .then(res => res.json())
     .then(data => {
        
        // Loop sugli album
        data.data.forEach(album => {

            // Crea elemento per album
            const albumDiv = document.createElement("div");

            // Aggiungi contenuto
            albumDiv.innerHTML =
            `<img src="${album.album.cover_medium}" />
            <h3>${album.album.title}</h3>`;

            // Aggiungi al DOM
            document.getElementById("eminem").appendChild(albumDiv);
            document.getElementById("eminem").classList.remove("d-none");
            });
            })

            //Errore nella fetch
            .catch(err => {console.error("Errore fetch", err);
        });
}

//Seconda fetch + Funzione di ricerca
function search() {

    // Recupera il valore dell'input
    const input = document.getElementById("searchField");
    const artist = input.value;

    // Fetch degli album dell'artista
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica`)
    .then(res => res.json())
     .then(data => {
        
        // Loop sugli album
        data.data.forEach(album => {

            // Crea elemento per album
            const albumDiv = document.createElement("div");

            // Aggiungi contenuto
            albumDiv.innerHTML =
            `<img src="${album.album.cover_medium}" />
            <h3>${album.album.title}</h3>`;

            // Aggiungi al DOM
            document.getElementById("metallica").appendChild(albumDiv);
            document.getElementById("metallica").classList.remove("d-none");
            });
            })

            //Errore nella fetch
            .catch(err => {console.error("Errore fetch", err);
        });
}

//Terza fetch + Funzione di ricerca
function search() {
    // Recupera il valore dell'input
    const input = document.getElementById("searchField");
    const artist = input.value;

    // Fetch degli album dell'artista
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=queen`)
    .then(res => res.json())
     .then(data => {
        
        // Loop sugli album
        data.data.forEach(album => {

            // Crea elemento per album
            const albumDiv = document.createElement("div");

            // Aggiungi contenuto
            albumDiv.innerHTML =
            `<img src="${album.album.cover_medium}" />
            <h3>${album.album.title}</h3>`;

            // Aggiungi al DOM
            document.getElementById("queen").appendChild(albumDiv);
            document.getElementById("queen").classList.remove("d-none");
            });
            })

            //Errore nella fetch
            .catch(err => {console.error("Errore fetch", err);
        });
}
