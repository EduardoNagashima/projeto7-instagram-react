export default function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <div class="stories">
                    <Story usuario="9gag" imgSrc="assets/img/9gag.svg" />
                    <Story usuario="meowed" imgSrc="assets/img/meowed.svg" />
                    <Story usuario="barked" imgSrc="assets/img/barked.svg" />
                    <Story usuario="nathanwpylestrangeplanet" imgSrc="assets/img/nathanwpylestrangeplanet.svg" />
                    <Story usuario="wawawicomics" imgSrc="assets/img/wawawicomics.svg" />
                    <Story usuario="respondeai" imgSrc="assets/img/respondeai.svg" />
                    <Story usuario="filomoderna" imgSrc="assets/img/filomoderna.svg" />
                    <Story usuario="memeriagourmet" imgSrc="assets/img/memeriagourmet.svg" />
                    <div class="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>
                <div class="posts">
                    <Post iconePost="assets/img/meowed.svg" nome="meowed" imgPost="assets/img/gato-telefone.svg" iconePessoaCurtiu="assets/img/respondeai.svg" pessoaCurtiu="respondeai" numCurtidas="101.523" />

                    <Post iconePost="assets/img/barked.svg" nome="barked" imgPost="assets/img/dog.svg" iconePessoaCurtiu="assets/img/adorable_animals.svg" pessoaCurtiu="adorable_animals" numCurtidas="99.159" />
                </div>
            </div>
            <div class="sidebar">
                <Usuario linkUsuario="catanacomics" nomeUsuario="Catana" />
                <Sugestoes />
                <Links />
                <Copyright />
            </div>
        </div>
    );
}

function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.imgSrc} />
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
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

function Usuario(props) {
    return (
        <div class="usuario">
            <img src="assets/img/catanacomics.svg" />
            <div class="texto">
                <strong>{props.linkUsuario}</strong>
                {props.nomeUsuario}
            </div>
        </div>
    );
}

function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            <Sugestao icone="assets/img/bad.vibes.memes.svg" nome="bad.vibes.memes" />
            <Sugestao icone="assets/img/chibirdart.svg" nome="chibirdart" />
            <Sugestao icone="assets/img/razoesparaacreditar.svg" nome="razoesparaacreditar" />
            <Sugestao icone="assets/img/adorable_animals.svg" nome="adorable_animals" />
            <Sugestao icone="assets/img/smallcutecats.svg" nome="smallcutecats" />
        </div>
    );
}

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.icone} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    );
}

function Links() {
    return (
        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
            Hashtags • Idioma
        </div>
    );
}

function Copyright() {
    return (
        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    );
}