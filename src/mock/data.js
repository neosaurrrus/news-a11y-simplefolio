import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'news A11y', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'A study into news site accessibility', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'news should be for',
  name: 'all abilities',
  subtitle: 'a study on WCAG2.1 adherence',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'a11y.png',
  paragraphOne: 'Why are news Sites important? Democrcyy',
  paragraphTwo: 'As well as moral case. Population of disability.',
  paragraphThree: '',
  resume: 'wcag', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    title: 'BBC',
    info:
      'Information and user interface components must be presentable to users in ways they can perceive.',
    info2: 'pookok opk op pko po opk opk ',
    url: 'https://bbc.com/news',
    repo: 'https://', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
