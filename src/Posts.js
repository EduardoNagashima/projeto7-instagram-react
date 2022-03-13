export default function Posts() {
    const postsProps = [{ iconePost: "assets/img/meowed.svg", nome: "meowed", imgPost: "assets/img/gato-telefone.svg", iconePessoaCurtiu: "assets/img/respondeai.svg", pessoaCurtiu: "respondeai", numCurtidas: "101.523" }, { iconePost: "assets/img/barked.svg", nome: "barked", imgPost: "assets/img/dog.svg", iconePessoaCurtiu: "assets/img/adorable_animals.svg", pessoaCurtiu: "adorable_animals", numCurtidas: "99.159" }]

    return (
        <div class="posts">

            {postsProps.map(props => <Post iconePost={props.iconePost} nome={props.nome} imgPost={props.imgPost} iconePessoaCurtiu={props.iconePessoaCurtiu} pessoaCurtiu={props.pessoaCurtiu} numCurtidas={props.numCurtidas} />)}

        </div>

    );
}

function Post(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.iconePost} />
                    {props.nome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imgPost} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.iconePessoaCurtiu} />
                    <div class="texto">
                        Curtido por <strong>{props.pessoaCurtiu}</strong> e <strong>outras {props.numCurtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
