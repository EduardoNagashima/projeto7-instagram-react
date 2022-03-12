export default function Stories() {
    const storiesProps = [{ usuario: "9gag", imgSrc: "assets/img/9gag.svg" }, { usuario: "meowed", imgSrc: "assets/img/meowed.svg" }, { usuario: "barked", imgSrc: "assets/img/barked.svg" }, { usuario: "nathanwpylestrangeplanet", imgSrc: "assets/img/nathanwpylestrangeplanet.svg" }, { usuario: "wawawicomics", imgSrc: "assets/img/wawawicomics.svg" }, { usuario: "respondeai", imgSrc: "assets/img/respondeai.svg" }, { usuario: "filomoderna", imgSrc: "assets/img/filomoderna.svg" }, { usuario: "memeriagourmet", imgSrc: "assets/img/memeriagourmet.svg" }];

    return (
        <div class="stories">

            {storiesProps.map((props) => <Story usuario={props.usuario} imgSrc={props.imgSrc} />)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
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
