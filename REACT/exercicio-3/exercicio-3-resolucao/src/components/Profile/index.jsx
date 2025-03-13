import styles from "./styles.module.css"

export default function Profile(props) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <h2 className={styles.name}>{props.name}</h2>
      <div>{props.bio}</div>
      <div>{props.phone}</div>
      <div>{props.email}</div>
      <div className={styles.links}>
        <a href={props.githubUrl} target="_blank">GitHub</a>
        <a href={props.linkedinUrl} target="_blank">LinkedIn</a>
        <a href={props.twitterUrl} target="_blank">Twitter</a>
      </div>
    </div>
  )
}