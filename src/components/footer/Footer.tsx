import styles from './footer.module.css';

interface FooterProps {
  lightMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ lightMode }) => {
  const MI_CONSTANTE = "{Nunca es tarde} ♾️";

  return (
    <footer
      className={`${styles.footer} ${
        lightMode === true ? `${styles.white}` : `${styles.dark}`
      }`}
    >
      <span className='font-bold'>Brian Gelvez Full Stack Developer 👨‍💻</span>
      <span className='font-bold'>🗓️ Julio 2023</span>
      <span className='font-bold'>{MI_CONSTANTE}</span>
    </footer>
  );
};

export default Footer;
