import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'news for all of us', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'news site accessibility for 2020', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'UK News Accessibility in',
  name: '2020',
  subtitle: 'a status report on accessibility on popular news sites',
  cta: 'more',
};

// ABOUT DATA
export const aboutData = {
  img: 'a11y.png',
  paragraphOne: 'Democracy relies on all people being informed. When online news is made inconvenient to 1 in 5 of the UK population that have a disability, it can lead to underrepresentation and marginalisation of those views.',
  paragraphTwo: 'Putting the moral case aside, 14.1 million people is a large market and designs that put accessibiity at the forefront often are great designs for everyone.',
  paragraphThree: 'My findings for 2020 are positive overall, most publications reviewed have great accessibility though most also have one or two areas that could use improvement.',
  // resume: 'wcag', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    title: 'BBC',
    img: 'bbc.png',
    info:
      'Information and user interface components must be presentable to users in ways they can perceive.',
    info2: 'pookok opk op pko po opk opk ',
    url: 'bbc',
    repo: 'https://bbc.com/news', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    title: 'The Guardian',
    img: 'guardian.png',
    info: 'Launched in 1999',
    info2: 'Something about the guardian',
    url: 'the-guardian',
    repo: 'https://theguardian.com', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mirror.png',
    title: 'The Daily Mirror',
    info: 'Launched in 1999',
    info2: 'Something about the guardian',
    url: 'the-daily-mirror',
    repo: 'https://www.mirror.co.uk/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'telegraph.jpg',
    title: 'The Daily Telegraph',
    info: 'Something about the site',
    info2: 'Something about the organisation',
    url: 'the-telegraph',
    repo: 'https://www.telegraph.co.uk/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mail.png',
    title: 'The Daily Mail',
    info: 'Something about the site',
    info2: 'Something about the organisation',
    url: 'the-daily-mail',
    repo: 'https://www.dailymail.co.uk/home/index.html', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'times.png',
    title: 'The Times',
    info: 'Something about the site',
    info2: 'Something about the organisation',
    url: 'the-times',
    repo: 'https://thetimes.co.uk', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sun.png',
    title: 'The Sun',
    info: 'Something about the site',
    info2: 'Something about the organisation',
    url: 'the-sun',
    repo: 'https://thesun.co.uk', // if no repo, the button will not show up
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
      url: 'https://twitter.com/lukie_k',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/lukiek/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/neosaurrrus',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
