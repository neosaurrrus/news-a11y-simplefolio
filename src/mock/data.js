import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'newsA11y', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'news site accessibility for 2020', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'UK News Accessibility in',
  name: '2020',
  subtitle: 'because the news is for everyone.',
  cta: 'more',
};

// ABOUT DATA
export const aboutData = {
  img: 'a11y.png',
  paragraphOne:
    'Democracy ultimately suffers when news does not speak clearly to us all. When 20% of the UK that have a disability, there is a significant risk of marginalising a large portion of our population',
  paragraphTwo:
    'Putting the moral case aside, 14.1 million people is a large market and designs that put accessibiity first tend to be great designs period.',
  paragraphThree:
    'This site takes look at seven popular UK news sites and see how well thier front pages stack up against basic accessibiity testing.',
  // resume: 'wcag', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    title: 'BBC',
    img: 'bbc.png',
    info: 'The BBC News website was launched in 1997 with its latest design going live from 2015.',
    info2:
      'Despite some flagging of ARIA related issues, the BBC News site is very accessible with care taken over tab order and screen readers.',
    url: 'bbc',
    repo: 'https://bbc.com/news', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    title: 'The Guardian',
    img: 'guardian.png',
    info: 'The Guardian is the biggest UK Newspaper website with 13.9m average daily views.',
    info2:
      'A great experience overall but lets itself down in the handling of new content that appears on the page.',
    url: 'the-guardian',
    repo: 'https://theguardian.com', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mirror.png',
    title: 'The Daily Mirror',
    info:
      'The Mirror is part of Reach PLC which has a collection of over 70 publications and over one billion views every month.',
    info2:
      'The site has excellent accessibility overall. However the alt tags used for images makes for an annoying experience when using a screen reader.',
    url: 'the-daily-mirror',
    repo: 'https://www.mirror.co.uk/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'telegraph.jpg',
    title: 'The Daily Telegraph',
    info:
      'In 1994, it became the first daily web-based newspaper in Europe. It has remained popular, becoming subscription only in 2013.',
    info2:
      'The handling of initial pop ups is an awful first experience which hides a very accessible news site underneath',
    url: 'the-telegraph',
    repo: 'https://www.telegraph.co.uk/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mail.png',
    title: 'The Daily Mail',
    info:
      'The Mail online has more than 218 million unique visitors per month and has one of the highest proportion of female readers ',
    info2:
      'The lowest scoring of sites tested. There a number of issues with regards to tab order, screen reading and unfocusable pop-up elements',
    url: 'the-daily-mail',
    repo: 'https://www.dailymail.co.uk/home/index.html', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'times.png',
    title: 'The Times',
    info:
      'Originally founded in 1795, the Times exists as a susidiary of News UK. It has had a paywall since 2010.',
    info2:
      'A good experience overall, but many minor improvements can be found especially in how sponsored content is used.',
    url: 'the-times',
    repo: 'https://thetimes.co.uk', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sun.png',
    title: 'The Sun',
    info:
      'Another member of News UK, the Sun is the biggest selling physical newspaper in the UK. The current website was designed in 2016',
    info2: 'Easily fixable issues in a number of areas result in a poor experience overall.',
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
