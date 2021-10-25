/*  
    Creare una pagina che elenchi una lists di post socials a partire da un array di oggetti.
    Gli attributi minimi del modello di un post: id, contenuto, immagine, autore (nome, avatar), numero di likes, data creazione.
    Un secondo array conterrà solo gli id dei posts a cui abbiamo dato like.
*/



//  Array di oggetti per post:

const posts = [
    {
        identity: "",
        content: "",
        image: "",
        writer: "Da'thral",
        imgAvatar: "https://lodisseadelmaster.altervista.org/wp-content/uploads/2016/10/classe-di-prestigio-nano-dd-3.5-500x375.png",
        likes: 86,
        creationDate: ""
    },
    {
        identity: "",
        content: "",
        image: "",
        writer: "Dak'dros",
        likes: 120,
        creationDate: ""
    },
    {
        identity: "",
        content: "",
        image: "",
        writer: "Du-bur",
        likes: 97,
        creationDate: ""
    }
]


for (i=0; i<posts.length; i++) {

    const post = posts[i];
    console.log(post);

    const postPrinted = `
        
    
    
    `
}