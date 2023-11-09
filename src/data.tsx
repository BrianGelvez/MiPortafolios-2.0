import nifytigo from "./assets/nifytigo.png";
import cteen from './assets/cteenuruguay.png'
import portafolios2 from "./assets/portafolios2.0.png"
import countries from "./assets/countries.png";
import miPortafolios from "./assets/miPortafolio.png"
import rickandmorty from "./assets/rickandmorty.png"
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import videogames from "./assets/videogames.png"
import js from "./assets/js.svg";
import react from "./assets/react.svg";
import tailwind from "./assets/tailwind.svg";






const cards = [
  {
    id: 1,
    name: "Cteen Uruguay",
    image: [cteen],
    tecno: [react, css, tailwind],
    descrip:
      ".",
    url: "https://cteenuy.org/",
    urlGithub: "https://github.com/talischatz/cteen-project",
  },
  {
    id: 2,
    name: "NifytiGo",
    image: [nifytigo],
    tecno: [react, css, tailwind],
    descrip:
      "NifytiGo is a comprehensive platform for buying and selling Nfts (Fictisios).",
    url: "https://nifytigo.vercel.app/",
    urlGithub: "https://github.com/rodri154321/nifytigo",
  },

  {
    id: 3,
    name: "Countries CRUD",
    image: [countries],
    tecno: [html, css, js],
    descrip: "Countries App is an app to see all the countries of the world and to create activities.",
    url: "https://countries-blush.vercel.app/",
    urlGithub: "https://github.com/BrianGelvez/countries",
  },
  {
    id: 4,
    name: "Videogames App",
    image: [videogames],
    tecno: [react, tailwind, css],
    descrip: "Practice with React, State Management, Filters and Dark Mode.",
    url: "https://videogames-nine.vercel.app/",
    urlGithub: "https://github.com/BrianGelvez/videogames",
  },


  {
    id: 5,
    name: "Portafolios 1.0",
    image: [miPortafolios],
    tecno: [html, css, js],
    descrip:
      "my first portfolio using html tailwind and some javascript",
    url: "https://mi-portafolios.vercel.app/",
    urlGithub: "https://github.com/BrianGelvez/miPortafolios",
  },

  {
    id: 6,
    name: "Portafolios 2.0",
    image: [portafolios2],
    tecno: [react, tailwind, css],
    descrip: "Practice with React, State Management, Filters and Dark Mode.",
    url: "#",
    urlGithub: "https://github.com/BrianGelvez/MiPortafolios-2.0",
  },

  {
    id: 7,
    name: "Rick And Morty",
    image: [rickandmorty],
    tecno: [react, tailwind, css],
    descrip: "practice with the rick and morty api",
    url: "#",
    urlGithub: "https://github.com/BrianGelvez/rickandmorty",
  },
];

export default cards;
