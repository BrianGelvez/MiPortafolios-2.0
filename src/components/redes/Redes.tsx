import instram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import styles from './redes.module.css'

const Redes = () => {
    return (
        <article className={styles.redes}>
            <a target='_blank' className={`${styles.linkedin} hover:animate-pulse animate-once`} href="https://www.linkedin.com/in/briangelvez97/"><img src={linkedin} alt="logo de linkedin" /></a>
            <a target='_blank' className={`${styles.github} hover:animate-pulse animate-once`} href="https://github.com/BrianGelvez"><img src={github} alt="logo de github" /></a>
            <a target='_blank' className={`${styles.instagram} hover:animate-pulse animate-once`} href="https://instagram.com/brian.gelvez?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"><img src={instram} alt="logo de instagram" /></a>
        </article>
    )
}

export default Redes;