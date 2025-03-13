import Button from './Button'
import styles from './styles.module.css'

export default function Card({avatar, name, bio, phone, email, text }) {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={avatar} alt="Foto de perfil" />
            <h1>{name}</h1>
            <hr />
            <p>{bio}</p>
            <hr />
            <p>{phone}</p>
            <hr />
            <p>{email}</p>
            <hr />
            <Button text="Github"/>
            <Button text="LinkedIn"/>
            <Button text="Instagran"/>
        </div>
    )
}