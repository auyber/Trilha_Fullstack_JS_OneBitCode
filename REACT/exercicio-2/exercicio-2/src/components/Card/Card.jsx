import ImgPoster from '../../assets/star.jpg'
import styles from './styles.module.css'



export default function Card() { 
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={ImgPoster} alt="Poster do Star Wars" />
            <div>
                <h1>Pôster: Star Wars (1997)</h1>
                <p>
                    Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!
                </p>
                <button className={styles.button}>Comprar Agora</button>
            </div>
        </div>
    )
}