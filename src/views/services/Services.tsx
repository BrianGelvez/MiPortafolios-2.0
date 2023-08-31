import styles from "./services.module.css";
import typescrip from "../../assets/typ.svg";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import tailwin from "../../assets/tailwind.svg";
import postgresql from "../../assets/postgresql.svg";
import node from "../../assets/node.svg";
import react from "../../assets/react.svg";
import redux from "../../assets/redux.svg";
import mongo from "../../assets/mongo.svg"
import arrow from "../../assets/arrow.svg";
import code from "../../assets/code.svg";
import desing from "../../assets/desing.svg";
import web from "../../assets/web.svg";
import gitflow from "../../assets/gitflow.png"
import javascript from "../../assets/javascript.png"



const Tecnologies = [
  {
    tecno: html,
    name: "HTML",
  },

  {
    tecno: css,
    name: "CSS",
  },

  {
    tecno: javascript,
    name: "JavaScript",
  },

  {
    tecno: typescrip,
    name: "Typescript",
  },

  {
    tecno: tailwin,
    name: "Tailwind",
  },

  {
    tecno: react,
    name: "React",
  },

  {
    tecno: redux,
    name: "Redux",
  },

    {
    tecno: gitflow,
    name: "GitFlow",
  },

  {
    tecno: node,
    name: "Node",
  },
  {
    tecno: mongo,
    name: "MongoBD",
  },
  {
    tecno: postgresql,
    name: "PostgreSQL",
  },
];

const Services = () => {
  return (
    <section className={styles.services}>
      <span className="flex items-center gap-1">
        <h2 className="text-2xl text-primary-color font-bold">Services</h2>
        <img className="w-7" src={arrow} alt="" />
      </span>
      <div className={styles.servicesContainer}>
        <article className={styles.tecnology}>
          <div className={`${styles.tecno}`}>
            {Tecnologies.map((tecno, index) => (
              <div className={`${styles.svg} w-14 flex flex-col justify-center items-center hover:animate-pulse animate-once`} key={index}>
                <img src={tecno.tecno} alt={tecno.name} />
                <h6>{tecno.name}</h6> 
              </div>
            ))}
          </div>
        </article>
        <article className={`${styles.cards}`}>
          <div className={`${styles.card} ${styles.blue}`}> <img className="w-10" src={code} alt="" /> <span>Desarrollo de soluciones específicas para sus aplicaciones web modernas.</span></div>
          <div className={`${styles.card} ${styles.blue}`}> <img className="w-10" src={web} alt="" /> <span>Proyectos tecnológicos a medida adaptados por expertos a sus necesidades específicas.</span></div>
          <div className={`${styles.card} ${styles.blue}`}> <img className="w-10" src={desing} alt="" /> <span>Garantizar un diseño adaptable para disfrutar de una experiencia fluida en todos los dispositivos.</span></div>
        </article>
      </div>
    </section>
  );
};

export default Services;
