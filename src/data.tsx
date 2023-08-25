import nifytigo from "./assets/nifytigo.png";
import portafolios2 from "./assets/portafolios2.0.png"
import dominios from "./assets/Dominios.webp";
import countries from "./assets/countries.png";
import kfc from "./assets/kfc.webp";
import mui from "./assets/mui.png";
import porta2 from "./assets/porta2.webp";
import miPortafolios from "./assets/miPortafolio.png"
import rickandmorty from "./assets/rickandmorty.png"
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import videogames from "./assets/videogames.png"
import js from "./assets/js.svg";
import react from "./assets/react.svg";
import tailwind from "./assets/tailwind.svg";
import sass from "./assets/sass.svg";

const cards = [
  {
    id: 1,
    name: "NifytiGo",
    image: [nifytigo],
    tecno: [react, css, tailwind],
    descrip:
      "NifytiGo is a comprehensive platform for buying and selling Nfts (Fictisios).",
    url: "https://nifytigo.vercel.app/",
    urlGithub: "https://github.com/rodri154321/nifytigo",
  },

  {
    id: 2,
    name: "Countries CRUD",
    image: [countries],
    tecno: [html, css, js],
    descrip: "Countries App is an app to see all the countries of the world and to create activities.",
    url: "https://countries-blush.vercel.app/",
    urlGithub: "https://github.com/BrianGelvez/countries",
  },
  {
    id: 3,
    name: "Videogames App",
    image: [videogames],
    tecno: [react, tailwind, css],
    descrip: "Practice with React, State Management, Filters and Dark Mode.",
    url: "https://videogames-nine.vercel.app/",
    urlGithub: "https://github.com/BrianGelvez/videogames",
  },

  
  {
    id: 4,
    name: "Portafolios 1.0",
    image: [miPortafolios],
    tecno: [html, css, js],
    descrip:
      "my first portfolio using html tailwind and some javascript",
    url: "https://mi-portafolios.vercel.app/",
    urlGithub: "https://github.com/BrianGelvez/miPortafolios",
  },

  {
    id: 5,
    name: "Portafolios 2.0",
    image: [portafolios2],
    tecno: [react, tailwind, css],
    descrip: "Practice with React, State Management, Filters and Dark Mode.",
    url: "https://books-eight-phi.vercel.app/",
    urlGithub: "https://github.com/MINOTAURO18/Books",
  },

  {
    id: 6,
    name: "Rick And Morty",
    image: [rickandmorty],
    tecno: [react, tailwind, css],
    descrip: "practice with the rick and morty api",
    url: "#",
    urlGithub: "https://github.com/BrianGelvez/rickandmorty",
  },


  // {
  //   id: 6,
  //   name: "Copia_MUI",
  //   image: [mui],
  //   tecno: [react, sass, css],
  //   descrip: "copy of the MUI home page",
  //   url: "https://minotauro18.github.io/Copia-MUI/",
  //   urlGithub: "https://github.com/MINOTAURO18/Copia-MUI",
  //   youtube: true,
  //   youtubeUrl: "https://www.youtube.com/watch?v=YYG6sy8t-t8&t=6346s",
  // },
  // {
  //   id: 7,
  //   name: "DominiosYa",
  //   image: [dominios],
  //   tecno: [html, css, js],
  //   descrip: "Practice with React, State Management, Filters and Dark Mode.",
  //   url: "https://minotauro18.github.io/DominiosYa/",
  //   urlGithub: "https://github.com/MINOTAURO18/DominiosYa",
  // },

  // {
  //   id: 8,
  //   name: "Template-KFC",
  //   image: [kfc],
  //   tecno: [html, css],
  //   descrip: "Practice with React, State Management, Filters and Dark Mode.",
  //   url: "https://minotauro18.github.io/KFC/",
  //   urlGithub: "https://github.com/MINOTAURO18/KFC",
  // },

  // {
  //   id: 9,
  //   name: "Template-Portafolio",
  //   image: [porta2],
  //   tecno: [html, css, js],
  //   descrip:
  //     "Portfolio created by JAMY, so you have a place to show your projects to the world.",
  //   url: "https://minotauro18.github.io/pagina-2/",
  //   urlGithub: "https://github.com/MINOTAURO18/pagina-2",
  // },
];

export default cards;
