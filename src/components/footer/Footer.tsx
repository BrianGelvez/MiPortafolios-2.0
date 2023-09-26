import styles from './footer.module.css'

interface FooterProps {
    lightMode: boolean;
  }

const Footer: React.FC<FooterProps> = ({lightMode}) => {

    const MI_CONSTANTE = "{Mañana es tarde}";

    return (
        <header className={`${styles.header} ${lightMode === true ? `${styles.white}` : `${styles.dark}`}`}>
            <span className='font-bold'>Brian Gelvez Full Stack Developer</span>
            <span className='font-bold'>Agosto 2023</span>
            <span className='font-bold'>{MI_CONSTANTE}</span>
        </header>
    )
}

export default Footer;