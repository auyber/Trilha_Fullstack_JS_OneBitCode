import LinkButton from "../LinkButton"
import ProfileSection from "../ProfileSection"
import Title from "../Title"
import styles from "./styles.module.css"

function handClick(ev) {
  console.log(ev)
  alert("Você agora está seguindo!")
}

export default function Profile(props) {

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title >
        <span>{props.name}</span>
        <button
          className={styles.followButton}
          onClick={handClick}
        >
          Follow
          </button>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection> 
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection
        className={styles.links}
        id="links-section"
        data-test="some value"
        aria-label="social links"
      >
        <LinkButton href={props.githubUrl}>GitHub</LinkButton>
        <LinkButton href={props.linkedinUrl}>LinkedIn</LinkButton>
        <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
      </ProfileSection>
    </div>
  )
}