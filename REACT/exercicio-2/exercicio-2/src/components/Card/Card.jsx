import Button from '../Button'
import styles from './styles.module.css'



export default function Card({title, posterImg}) { 
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={posterImg} alt={title} />
            <div>
                <h1>{title}</h1>
                <p>
                    Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!
                </p>
                <Button />
            </div>
        </div>
    )
}