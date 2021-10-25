/*  
    Creare una pagina che elenchi una lists di post socials a partire da un array di oggetti.
    Gli attributi minimi del modello di un post: id, contenuto, immagine, autore (nome, avatar), numero di likes, data creazione.
    Un secondo array conterrà solo gli id dei posts a cui abbiamo dato like.
*/



//  Array di oggetti per post:

const posts = [
    {
        identity: "",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quas, beatae delectus illum non natus modi doloremque fugiat, quibusdam laborum eveniet porro a placeat blanditiis nihil facilis repudiandae possimus suscipit, commodi alias amet earum! Doloremque.",
        image: "https://i.picsum.photos/id/1022/367/267.jpg?hmac=0mbNHdQLUp_d5Cat6xNrL06S_07ikrdfLb6FDKJuir4",
        writer: "Da'thral",
        imgAvatar: "https://lodisseadelmaster.altervista.org/wp-content/uploads/2016/10/classe-di-prestigio-nano-dd-3.5-500x375.png",
        likes: 86,
        creationDate: "today"
    },
    {
        identity: "",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ullam voluptate maiores inventore nobis animi suscipit magni, quis eveniet corporis!",
        image: "https://i.picsum.photos/id/1003/367/267.jpg?hmac=1VHS13exKZ5QWJdtDTu0iCUTBZKCE_clSpR-wc3PW3g",
        writer: "Dak'dros",
        likes: 120,
        creationDate: "today"
    },
    {
        identity: "",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod placeat dignissimos voluptates consectetur soluta, alias repellat! Aperiam fuga non adipisci ex sunt quos, nisi in amet cumque qui officiis dolores labore rem ea unde excepturi dignissimos omnis, exercitationem tempore, dolorem eveniet? Voluptates veniam omnis error.",
        image: "https://i.picsum.photos/id/1015/367/267.jpg?hmac=mjgo8WXn4uxkZ_GhSDNN7rUSzP9jgyPBsHrDF02oU-o",
        writer: "Du-bur",
        likes: 97,
        creationDate: "today"
    }
]


for (i=0; i<posts.length; i++) {

    const post = posts[i];
    console.log(post);

    const postPrinted = `

        <div class="post">

            <header class="post_header">
                <img src=${post.imgAvatar} alt="">
                <section class="published">
                    <h4>${post.writer}</h4>
                    <div>${post.creationDate}</div>
                </section>

            </header>

            <main class="post_main">
                <p>${post.content}</p>
                <img src="${post.image}" alt="">
            </main>

            <footer class="post_footer">
                <div class="add_like">Mi Piace</div>
                <div class="total_like">${post.likes} like</div>
            </footer>

        </div>

        `
        document.querySelector(".container").insertAdjacentHTML("beforebegin", postPrinted)

    console.log(postPrinted);
}
