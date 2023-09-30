import brShoesImg from '@/shared/assets/projects/brShoes/brshoes_light.webp';
import brShoesVideo from '@/shared/assets/projects/brShoes/brshoes-light.mp4';
import currencyConvertorVideo from '@/shared/assets/projects/currencyConvertor/currencyConvertor.mp4';
import currencyConvertorImg from '@/shared/assets/projects/currencyConvertor/currencyConvertor.webp';
import spotifyImg from '@/shared/assets/projects/spotify/spotify.webp';
import spotifyVideo from '@/shared/assets/projects/spotify/spotify_2mb.mp4';
import airbnb from '@/shared/assets/techStack/Airbnb.svg';
import angular from '@/shared/assets/techStack/Angular.svg';
import bootstrap from '@/shared/assets/techStack/Bootstrap.svg';
import css from '@/shared/assets/techStack/CSS.svg';
import electron from '@/shared/assets/techStack/Electronjs.svg';
import eslint from '@/shared/assets/techStack/ESLint.svg';
import express from '@/shared/assets/techStack/Express.svg';
import firebase from '@/shared/assets/techStack/Firebase.svg';
import git from '@/shared/assets/techStack/Git.svg';
import html from '@/shared/assets/techStack/HTML.svg';
import javascript from '@/shared/assets/techStack/Javascript.svg';
import jest from '@/shared/assets/techStack/Jest.svg';
import mongodb from '@/shared/assets/techStack/MongoDb.svg';
import nodejs from '@/shared/assets/techStack/Nodejs.svg';
import npm from '@/shared/assets/techStack/npm.svg';
import react from '@/shared/assets/techStack/React.svg';
import redux from '@/shared/assets/techStack/Redux.svg';
import reduxSaga from '@/shared/assets/techStack/Redux-Saga.svg';
import rxjs from '@/shared/assets/techStack/Rxjs.svg';
import sass from '@/shared/assets/techStack/SASS.svg';
import thunder from '@/shared/assets/techStack/Thunder.svg';
import typescript from '@/shared/assets/techStack/Typescript.svg';
import vite from '@/shared/assets/techStack/Vite.svg';
import webpack from '@/shared/assets/techStack/Webpack.svg';

export type Tech = {
  name: string;
  link: string;
};

export type AboutMe = {
  title: string;
  desc: string;
};

export type ArchitectPatterns = {
  name: string;
  link: string | null;
};

export type ProjectsInfo = {
  mainImg: string;
  imgs: string[] | [];
  title: string;
  desc: string;
  gitLink: string;
  deployed: string | null;
  video: string | undefined;
  techs: string[] | [];
  usedApi: string[] | [];
  architectPatterns: ArchitectPatterns[] | [];
};

export const techStack: Tech[] = [
  { name: 'Angular', link: angular },
  { name: 'React', link: react },
  { name: 'Redux', link: redux },
  { name: 'Redux-Saga', link: reduxSaga },
  { name: 'npm', link: npm },
  { name: 'Nodejs', link: nodejs },
  { name: 'Webpack', link: webpack },
  { name: 'Express', link: express },
  { name: 'Vite', link: vite },
  { name: 'Electronjs', link: electron },
  { name: 'HTML', link: html },
  { name: 'CSS', link: css },
  { name: 'Bootstrap', link: bootstrap },
  { name: 'SASS', link: sass },
  { name: 'Javascript', link: javascript },
  { name: 'Typescript', link: typescript },
  { name: 'ESLint', link: eslint },
  { name: 'AirBnB', link: airbnb },
  { name: 'Jest', link: jest },
  { name: 'Git', link: git },
  { name: 'MongoDb', link: mongodb },
  { name: 'Firebase', link: firebase },
  { name: 'Thunder', link: thunder },
];

export const aboutMe: AboutMe[] = [
  {
    title: 'A bit of me',
    desc: "I'm a Front end developer with experience in designing new features from ideation to production. I take into consideration the user experience while writing reusable and efficient code. I passionately combine good design, technology, and innovation in all my projects, which I like to accompany from the first idea to release.",
  },

  {
    title: 'Technologies and Tools',
    desc: 'Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.',
  },
];

export const projects: ProjectsInfo[] = [
  {
    title: 'BrShoes',
    desc: 'This is a pet-project of internet shop where you can buy a shoes, admin can add new shoes and clients can add comment for each product and buy it. All data about products refresh in real time and clients always see actual information.',
    mainImg: brShoesImg,
    video: brShoesVideo,
    gitLink: 'https://github.com/semklim/BrShop_angular',
    deployed: 'https://brshoes.pp.ua/',
    techs: [angular, rxjs, bootstrap, firebase, jest, eslint, airbnb],
    architectPatterns: [
      {
        name: 'Observer',
        link: 'https://www.patterns.dev/posts/observer-pattern',
      },
      {
        name: 'Module',
        link: 'https://www.patterns.dev/posts/module-pattern',
      },
    ],
    usedApi: ['Intersection Web Api'],
    imgs: [],
  },
  {
    title: 'Currency Convertor',
    desc: 'Simple currency conversion app designed with simplicity in mind. You gain access to a world of 145+ currencies. Powered by FastForex API, it delivers real-time exchange rates. The intuitive Angular interface ensures effortless and precise currency conversion.',
    mainImg: currencyConvertorImg,
    video: currencyConvertorVideo,
    gitLink: 'https://github.com/semklim/currency-converter-forex',
    deployed: 'https://currency-converter-forex.web.app/',
    techs: [angular, rxjs, firebase, eslint, airbnb],
    architectPatterns: [],
    usedApi: ['fastforex API'],
    imgs: [],
  },
  {
    title: 'Spotify Demo',
    desc: 'This project is a exam project that aims to help me and my command learn how to use the Spotify Web API, built entirely with HTML, CSS, and JavaScript. The application uses the Spotify Web API to retrieve data about artists, albums, and tracks, and presents it in a user-friendly way.',
    mainImg: spotifyImg,
    video: spotifyVideo,
    gitLink: 'https://github.com/semklim/SpotifyAPI_Exame_Step',
    deployed: 'https://semklim.github.io/SpotifyAPI_Exame_Step/',
    techs: [html, css, javascript, electron],
    architectPatterns: [],
    usedApi: ['Spotify Web Api'],
    imgs: [],
  },
];
