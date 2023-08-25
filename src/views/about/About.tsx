import React from "react";
import styles from "./about.module.css";
import arrow from "../../assets/arrow.svg";
import pin from "../../assets/pin.svg";
import message from "../../assets/message.svg";
import share from "../../assets/share.svg";
import brian from "../../assets/brian.jpeg";
import AnimationTwo from "../../components/animations/animationTwo/AnimationTwo";
import Footer from "../../components/footer/Footer";

interface AboutProps {
  lightMode: boolean;
}

const About: React.FC<AboutProps> = ({ lightMode }) => {
  return (
    <section className={`${styles.about}`}>
      <span className="flex items-center gap-1">
        <h2 className="text-2xl text-primary-color font-bold">About</h2>
        <img className="w-7" src={arrow} alt="" />
      </span>
      <div className={styles.aboutMe}>
        <article className={styles.me}>
          <img
            className={`${styles.img} z-10 m-auto hover:animate-wiggle-more animate-once
`}
            src={brian}
            alt=""
          />
          <p>
           Hola, Mi nombre es Brian Leonel Gelvez, soy amante de la tecnología, los deportes y la música. Soy un ex militar Argentino, fui soldado durante 4 años, en estos años de mi vida he aprendido el valor del esfuerzo duro, la disciplina y la perseverancia. Estoy preparado para nuevos desafíos en el mundo IT.
          </p>
          <span className="text-primary-color">From:BrianGelvez</span>
          <div className="flex gap-3">
            <span className="flex justify-center items-center gap-1">
              <img className="w-5" src={message} alt="" />
              <h5>25</h5>
            </span>

            <span className="flex justify-center items-center gap-1">
              <img className="w-5" src={share} alt="" />
              <h5>83</h5>
            </span>

            <span className="flex justify-center items-center gap-1">
              <img className="w-5" src={pin} alt="" />
              <h5>45</h5>
            </span>
          </div>
        </article>
        <article className={styles.cards}>
          <div className={`${styles.card} ${styles.blue}`}>
            <p className={styles.tip}>academia: Soy Henry</p>
            <p className={styles.secondText}>JavaScript, React, Node.JS, Express, SQL</p>
          </div>

          <div className={`${styles.card} ${styles.blue}`}>
            <p className={styles.tip}>Autodidacta</p>
            <p className={styles.secondText}>HTML, CSS, Tailwind, TypeScript</p>
          </div>
        </article>
      </div>
      <Footer lightMode={lightMode} />
      <AnimationTwo lightMode={lightMode} />
    </section>
  );
};

export default About;
