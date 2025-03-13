import Card from "./components/Card";
import euImg from "../src/assets/eu.jpeg";
import Button from "./components/Button";


export default function App() {
    return (
    <div>
        <Card avatar={euImg} name="Auyber Genesini" bio="Desenvolvedor Full Stack JS" email="auybergg@hotmail.com" phone="+5570707070"/>
    </div>
    )
}