export default function Sugestoes() {
    const sugestoesProps = [{ icone: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes" }, { icone: "assets/img/chibirdart.svg", nome: "chibirdart" }, { icone: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar" }, { icone: "assets/img/adorable_animals.svg", nome: "adorable_animals" }, { icone: "assets/img/smallcutecats.svg", nome: "smallcutecats" }]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestoesProps.map((props) => <Sugestao icone={props.icone} nome={props.nome} />)}

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