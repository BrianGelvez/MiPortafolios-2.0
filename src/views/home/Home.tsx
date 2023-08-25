import React from "react";
import styles from "./home.module.css";
import pin from '../../assets/pin.svg'
import message from '../../assets/message.svg'
import share from '../../assets/share.svg'
import Buttons from "../../components/buttoons/Buttons";
import AnimacionOne from "../../components/animations/animationOne/AnimationOne";

const Home: React.FC = () => {
  
  return (
    <section className={styles.home}>
      <article className={`${styles.full}`}>
        <h2 className="font-bold">sofwore Developer</h2>
        <p>
        Programador con enfoque en desarrollo de aplicaciones web, tengo habilidades tanto en desarrollo backend como frontend.
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
      <article className={`${styles.brian}`}>
        <h2 className="font-bold text-center z-20">Brian Gelvez</h2>
        <Buttons url="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSHxjQCvzsDSFMjbMznTjRBjbpJZFZmltSXxFDNvCBJbMdXfxNMXkCrWbPZRNnmcRZmdVmJM" title="GMAIL" />
        <Buttons url="https://drive.google.com/file/d/1aAZRjTjyI2OqX2nNjAyKxNzzX7MZBLne/view" title="CV"/>
      </article>
      <AnimacionOne/>
    </section>
  );
};

export default Home;
