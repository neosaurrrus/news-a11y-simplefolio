import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hello', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
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
  paragraphOne:
    'Web Content Accessibility Guidelines (WCAG) 2.1 defines how to make Web content more accessible to people with disabilities. Accessibility involves a wide range of disabilities, including visual, auditory, physical, speech, cognitive, language, learning, and neurological disabilities.',
  paragraphTwo:
    'Although these guidelines cover a wide range of issues, they are not able to address the needs of people with all types, degrees, and combinations of disability. ',
  paragraphThree:
    'These guidelines also make Web content more usable by older individuals with changing abilities due to aging and often improve usability for users in general.',
  resume: 'https://www.w3.org/TR/WCAG21/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    title: '1. Perceivable',
    info:
      'WCAG Definition: Information and user interface components must be presentable to users in ways they can perceive.',
    info2: 'In other words: ',
  },
  {
    id: nanoid(),
    title: '2. Operable',
    info: 'WCAG Definition: User interface components and navigation must be operable.',
    info2: 'In other words: ',
  },
  {
    id: nanoid(),
    title: '3. Understandable',
    info:
      'WCAG Definition: Information and the operation of user interface must be understandable.',
    info2: 'In other words: ',
  },
  {
    id: nanoid(),
    title: '4. Robust',
    info:
      'WCAG Definition: Content must be robust enough that it can be interpreted by by a wide variety of user agents, including assistive technologies.',
    info2: 'In other words: ',
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
