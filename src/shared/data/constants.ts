import brShoesBigVideo from '@/shared/assets/projects/brShoes/brshoes.mp4';
import brShoesImg from '@/shared/assets/projects/brShoes/brshoes_light.webp';
import brShoesVideo from '@/shared/assets/projects/brShoes/brshoes-light.mp4';
// import portfolioMain from '@/shared/assets/projects/portfolio/main.png';
// import portfolioSeo from '@/shared/assets/projects/portfolio/seo.png';
// import portfolioPageSpeed from '@/shared/assets/projects/portfolio/pagespeed.png';
import waxomMainImg from '@/shared/assets/projects/waxom/image_original.jpg';
import waxomPhoneImg from '@/shared/assets/projects/waxom/phone.jpg';
import waxomPhoneHImg from '@/shared/assets/projects/waxom/phoneH.jpg';
import yavorskaphotographyBigVideo from '@/shared/assets/projects/yavorskaphotography/yavorskaphotography.mp4';
import yavorskaphotographyImg from '@/shared/assets/projects/yavorskaphotography/yavorskaphotography.webp';
import yavorskaphotographyVideo from '@/shared/assets/projects/yavorskaphotography/yavorskaphotography-light.mp4';
import sharmBigVideo from '@/shared/assets/projects/sharm/sharm.mp4';
import sharmImg from '@/shared/assets/projects/sharm/sharm.webp';
import sharmVideo from '@/shared/assets/projects/sharm/sharm-light.mp4';
import currencyConvertorVideo from '@/shared/assets/projects/currencyConvertor/currencyConvertor.mp4';
import currencyConvertorImg from '@/shared/assets/projects/currencyConvertor/currencyConvertor.webp';
import expressApiBigVideo from '@/shared/assets/projects/expressApi/expressApi.mp4';
import expressApiImg from '@/shared/assets/projects/expressApi/expressApi.webp';
import spotifyBigVideo from '@/shared/assets/projects/spotify/spotify.mp4';
import spotifyImg from '@/shared/assets/projects/spotify/spotify.webp';
import spotifyVideo from '@/shared/assets/projects/spotify/spotify_2mb.mp4';
import towersBattleImg from '@/shared/assets/projects/towersBattle/towersBattle.webp';
import towersBattleVideo from '@/shared/assets/projects/towersBattle/towersBattle_light.mp4';
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
import laravel from '@/shared/assets/techStack/Laravel.svg';
import tailwind from '@/shared/assets/techStack/Tailwind.svg';
import gsap from '@/shared/assets/techStack/Gsap.svg';
import nextjs from '@/shared/assets/techStack/NextJs.svg';
import framerMotion from '@/shared/assets/techStack/FramerMotion.svg';

import { createRouteParams } from '../libs';

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
  link: string | undefined;
};

export type infoLinks = {
  name: string;
  link: string;
};

export type Projects = {
  id: string;
  mainImg: string;
  imgs?: string[];
  title: string;
  date: string;
  tags: string[];
  desc: string;
  infoLinks?: infoLinks[];
  descBig?: string;
  gitLink?: string;
  deployed?: string;
  video?: string;
  bigVideo?: string;
  techs: string[] | [];
  usedApi: string[] | [];
  architectPatterns: ArchitectPatterns[] | [];
};

export const techStack: Tech[] = [
  { name: 'Angular', link: angular },
  { name: 'Next.js', link: nextjs },
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
  { name: 'Framer Motion', link: framerMotion },
  { name: 'GSAP', link: gsap },
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
    desc: "My name Roman Klymashenko and I'm a Front end developer with experience in designing new features from ideation to production. I take into consideration the user experience while writing reusable and efficient code. I passionately combine good design, technology, and innovation in all my projects, which I like to accompany from the first idea to release.",
  },

  {
    title: 'Technologies and Tools',
    desc: 'Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.',
  },
];

export const projects: Projects[] = [
  {
    get id() {
      return createRouteParams(this.title);
    },
    title: 'Sharmbeauty',
    desc: ' This website, based in Ukraine, specializes in selling household goods and cosmetics. It stands as a robust platform, offering a vast array of categories and products. Presently, the site is undergoing upgrades and transitioning to new technologies to enhance the overall customer experience.',
    descBig: `SharmBeauty is an operational website specializing in the sale of household goods and cosmetics. However, recognizing the need for enhancements, we are currently in the process of revamping and improving the platform.

    Our dedicated team, consisting of front-end developers, back-end specialists, designers, and testers, is actively engaged in the development of an updated version. This collaborative effort incorporates cutting-edge solutions to ensure a seamless and modernized user experience.
    
    Rest assured, the development process is in full swing, and we anticipate unveiling the fruits of our labor in the near future.`,
    date: 'In Work',
    tags: ['Front-end', 'Back-end', 'Next.js', 'Framer-motion', 'Gsap'],
    mainImg: sharmImg,
    video: sharmVideo,
    bigVideo: sharmBigVideo,
    techs: [nextjs, sass, framerMotion, gsap, html, typescript],
    architectPatterns: [],

    usedApi: [],
  },
  {
    get id() {
      return createRouteParams(this.title);
    },
    title: 'Yavorska Photography',
    desc: "This site is a visual business card, showcasing diverse works and the photographer's approach. The user-friendly interface simplifies navigation and bookings. Discover a range of styles, from timeless black and white to vibrant palettes, ensuring a seamless experience from creative works.",
    descBig: `  The website has been meticulously crafted using the Laravel framework, built entirely from the ground up. We've ensured comprehensive site adaptability, integrated SEO practices to optimize its visibility across search engines, and successfully indexed it for efficient online discovery. Supporting a bilingual experience, the website boasts a dynamic database and an intuitive admin panel.

    The admin panel provides clients with the ability to effortlessly modify sections, manage tags, customize content for each section individually, and fine-tune meta tags for specific pages. Additionally, clients can easily introduce new pages and selectively conceal certain sections as needed, granting them unprecedented control over the website's dynamic content.`,
    date: 'Dec 22,2023',
    tags: ['Front-end', 'Back-end', 'Laravel', 'Real-Project'],
    mainImg: yavorskaphotographyImg,
    video: yavorskaphotographyVideo,
    bigVideo: yavorskaphotographyBigVideo,
    deployed: 'https://yavorskaphotography.com/',
    techs: [laravel, tailwind, bootstrap, html, sass, javascript],
    architectPatterns: [],

    usedApi: [],
  },
  // {
  //   get id() {
  //     return createRouteParams(this.title);
  //   },
  //   title: 'Portfolio',
  //   desc: "This website presents my projects and demonstrates my skills. It includes a Content Security Policy (CSP), SEO optimization with microformatting and structured data, and a user-friendly interface. Also, there's a contact form to easily contact me via email.",
  //   descBig: `    This website serves as a comprehensive portfolio showcasing my various projects and expertise in programming. Built on a robust tech stack it offers a dynamic and visually appealing user experience.

  //   Utilizing lazy-loading techniques for content and React components, the website achieves an impressive page speed score of 92 for mobile devices, ensuring optimal performance. Additionally, meticulous SEO optimization has resulted in an 86 score, enhancing the website's visibility and reach on search engines.

  //   The architecture of the project is based on the principles of Feature-Slice Design, providing a structured and scalable foundation for seamless development and maintenance. With a focus on both technical excellence and user experience, this website serves as a testament to my skills and dedication to delivering high-quality web solutions.`,
  //   date: 'Oct 15,2023',
  //   tags: ['Front-end', 'React', 'Feature-Slice Design', 'CSP', 'SEO'],
  //   mainImg: 'https://semklim.vercel.app/ogImg/defaultImg1200-min.webp',
  //   gitLink: 'https://github.com/semklim/portfolio',
  //   infoLinks: [
  //     {
  //       name: 'PageSpeed',
  //       link: 'https://pagespeed.web.dev/analysis/https-semklim-vercel-app/ugefvxtg3c?form_factor=mobile',
  //     },
  //     {
  //       name: 'Prefect SEO',
  //       link: 'https://sitechecker.perfect-seo.com.ua/en/inner-optimization/analyzer/?url=semklim.vercel.app',
  //     },
  //   ],
  //   techs: [react, framerMotion, html, sass, typescript, eslint],
  //   architectPatterns: [
  //     {
  //       name: 'Feature-Slice Design',
  //       link: 'https://feature-sliced.design/',
  //     },
  //   ],
  //   imgs: [portfolioMain, portfolioPageSpeed, portfolioSeo],
  //   usedApi: ['Emailjs'],
  // },
  {
    get id() {
      return createRouteParams(this.title);
    },
    title: 'Express API',
    desc: 'This pet project is a Full-stack application with key features including Authentication and Registration API. It utilizes CORS, JSON Web Tokens, nodemailer, Express.js, and MongoDB for seamless functionality.',
    descBig: `
    Key Features:

    1) Authentication and Registration API: The project boasts a sophisticated Authentication and Registration API that ensures a seamless and secure onboarding process for users.

    2) CORS with Whitelist: Cross-Origin Resource Sharing (CORS) is implemented with a carefully curated whitelist, enhancing security by controlling which origins are allowed to access the server resources.

    3) JWT for Token-Based Authentication: JSON Web Tokens (JWT) play a pivotal role in ensuring secure communication between the frontend and backend. They are utilized for generating access and refresh tokens, providing a scalable and efficient authentication mechanism.

    4) Nodemailer Integration: FullStack Pet-Project employs Nodemailer to facilitate the sending of activation emails to users upon successful registration. This adds an extra layer of security and verification to the account creation process.

    5) Express.js Backend Framework: The backend runs on Express.js, a powerful framework for Node.js web apps. It makes building APIs a breeze and keeps the conversation between the client and server nice and smooth.

    6) MongoDB Database Integration: MongoDB serves as the project's database, storing user credentials securely. The server performs validation checks on user-provided email and password data before persisting it in the database, ensuring data integrity.

    7) Token Management: After registration, users are issued both access and refresh tokens. The refresh token is securely stored in the browser's cookies with the 'httpOnly' flag, enhancing security by preventing client-side access.

    8) Activation Workflow: Upon registration, users receive an email with an activation link. The server validates the email and password before activating the account, maintaining a stringent registration process.

    On the front-end, users can explore the registration process, activate their accounts through the provided link, and log in to experience the full functionality of the application.
    `,
    date: 'Oct 20,2023',
    tags: ['Front-end', 'Back-end', 'mailer', 'Pet-project'],
    mainImg: expressApiImg,
    video: undefined,
    bigVideo: expressApiBigVideo,
    gitLink: 'https://github.com/semklim/Expressjs_Mongo_Api_example',
    deployed: 'https://webapi-example.vercel.app/',
    techs: [express, nodejs, mongodb, thunder, html, css, javascript],
    architectPatterns: [
      {
        name: 'Model-View-Controller',
        link: 'https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller',
      },
    ],

    usedApi: [],
  },
  {
    get id() {
      return createRouteParams(this.title);
    },
    title: 'BrShoes',
    desc: 'This is a pet-project of internet shop where you can buy a shoes, admin can add new shoes and clients can add comment for each product and buy it. All data about products refresh in real time and clients always see actual information.',
    descBig: `
      This is a small online store I've been working on! It's a place where you can easily buy shoes. The person in charge can update the shoe options, and customers can leave comments and purchase their favorite pairs. Everything about the products is updated instantly, so customers always get the latest info.

      I've also made sure the website shows up well on Google by making it SEO-friendly. To help with loading speed, I've included a feature that loads images only when needed, keeping things quick and smooth.

      And to make sure everything runs smoothly, I've tested it using a framework called Jest.
    `,
    date: 'Aug 08,2023',
    tags: ['Front-end', 'Shop', 'Pet-project'],
    mainImg: brShoesImg,
    video: brShoesVideo,
    bigVideo: brShoesBigVideo,
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
  },
  {
    get id() {
      return createRouteParams(this.title);
    },
    title: 'Currency Convertor',
    desc: 'Simple currency conversion app designed with simplicity in mind. You gain access to a world of 145+ currencies. Powered by FastForex API, it delivers real-time exchange rates. The intuitive Angular interface ensures effortless and precise currency conversion.',
    date: 'Jun 20,2023',
    tags: ['Front-end', 'WebApp', 'Test task'],
    mainImg: currencyConvertorImg,
    video: currencyConvertorVideo,
    gitLink: 'https://github.com/semklim/currency-converter-forex',
    deployed: 'https://currency-converter-forex.web.app/',
    techs: [angular, rxjs, firebase, eslint, airbnb],
    architectPatterns: [],
    usedApi: ['fastforex API'],
  },
  {
    get id() {
      return createRouteParams(this.title);
    },
    title: 'Spotify Demo',
    desc: 'This project is a exam project that aims to help me and my command learn how to use the Spotify Web API, built entirely with HTML, CSS, and JavaScript. The application uses the Spotify Web API to retrieve data about artists, albums, and tracks, and presents it in a user-friendly way.',
    date: 'Apr 10,2023',
    tags: ['Front-end', 'MusicApp', 'Pet-project', 'VanillaJs'],
    mainImg: spotifyImg,
    video: spotifyVideo,
    bigVideo: spotifyBigVideo,
    gitLink: 'https://github.com/semklim/SpotifyAPI_Exame_Step',
    deployed: 'https://semklim.github.io/SpotifyAPI_Exame_Step/',
    techs: [html, css, javascript, electron],
    architectPatterns: [],
    usedApi: ['Spotify Web Api'],
  },
  {
    get id() {
      return createRouteParams(this.title);
    },
    title: 'Towers Battle',
    desc: 'This is a canvas game. All you need is yourself and a friend. Each of you decides which tower to choose and then hits the play button. The winner is the one whose tower survives. The whole game is based on randomness.',
    date: 'Jan 15,2023',
    tags: ['Front-end', 'Canvas', 'Game', 'VanillaJs'],
    mainImg: towersBattleImg,
    video: towersBattleVideo,
    gitLink: 'https://github.com/semklim/Towers_Battle',
    deployed: 'https://semklim.github.io/Towers_Battle/',
    techs: [html, css, javascript],
    architectPatterns: [
      {
        name: 'SOLID',
        link: 'https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898',
      },
    ],
    usedApi: [],
  },
  {
    get id() {
      return createRouteParams(this.title);
    },
    title: 'Waxom layout',
    desc: 'A web site was created based on the picture, with all the animations, sliders. The site structure consists of section, header, footer, main. On the page, where possible, svg pictures were used. Work was also carried out to adapt the website for all types of devices and it is provided that the site can be opened in different browsers.',
    date: 'Sep 20,2021',
    tags: ['Front-end', 'HTML', 'CSS', 'SVG'],
    mainImg: waxomMainImg,
    gitLink: 'https://github.com/semklim/Waxom_ITStep_Landing',
    deployed: 'https://semklim.github.io/Waxom_ITStep_Landing/',
    techs: [html, css],
    architectPatterns: [],
    usedApi: [],
    imgs: [waxomMainImg, waxomPhoneImg, waxomPhoneHImg],
  },
];
