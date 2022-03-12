import Stories from "./Stories";
import Posts from "./Posts";
import Sugestoes from "./Sugestoes";

export default function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
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