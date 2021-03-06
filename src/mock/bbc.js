import { nanoid } from 'nanoid';

export const headData = {
  title: 'BBC News Results', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'A study into news site accessibility on the BBC News Site', // e.g: Welcome to my website
};
export const heroData = {
  title: 'Accessibility at',
  name: 'BBC News:',
  subtitle: 'excellent experience despite poor lighthouse score.',
  cta: 'more',
};

// ABOUT DATA
export const aboutData = {
  img: 'bbc.png',
  paragraphOne:
    'Automated lighthouse testing found 19 passed audits and 6 flagged opportunities for improvement with a total score of 68. ',
  paragraphTwo:
    'Aria usage was the bulk of the flagged content mostly around the search tooling. "aria-hidden-true" elements contain focusable descendants, ARIA roles, attributes and IDs were misconfigured in a limited way. These flags give the BBC News home page a lower score than manual testing would suggest',
  paragraphThree:
    'The manual tests were extremely positive, scoring 49 out of a potential 50. Overall, the BBC News home page has excellent accessibility with only ARIA usage in a few areas being an issue to address.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    title: '5/5 The page has a logical tab order',
    info2: 'Suggestions: None required',
    info:
      'Tab order is clear, small elements make it easy to follow the flow though the page. The cookie prompt is focusable and appears at the top.',
  },
  {
    id: nanoid(),
    title: '5/5 Interactive Controls are keyboard focusable',
    info: 'No issues found, all controls were keyboard focusable.',
    info2: 'Suggestions: None.',
  },
  {
    id: nanoid(),
    title: '4/5 Interactive elements indicate their purpose and state',
    info2:
      'Suggestions: Consider making a clearer distinction between minor interactive elements and regular content.',
    info:
      'Bold font is used consistently to show interactive elements with an additional underline provided on focus. Secondary interactive elements such as the links to news categories are a little hard to distinguish before focusing. ',
  },
  {
    id: nanoid(),
    title: '5/5 The users focus is directed to new content added to the page',
    info2: 'Suggestions: None.',
    info:
      'The only new content to appear was the cookie prompt which, as it appeared clearly at the top of the page was immediately focusable.',
  },
  {
    id: nanoid(),
    title: '5/5 Users focus is not accidentally trapped in a region',
    info2: 'Suggestions: None.',
    info: 'In testing, the user focus is never trapped in a region',
  },
  {
    id: nanoid(),
    title: '5/5 Custom controls have associated labels',
    info: 'This appears to be the case in tab testing',
    info2: 'Suggestions: None required.',
  },
  {
    id: nanoid(),
    title: '5/5 Custom controls have ARIA roles',
    info:
      'Controls that are used follow standard patterns and no not use anything that would cause issues',
    info2: 'Suggestions: None required.',
  },
  {
    id: nanoid(),
    title: '5/5 Visual order on the page follows DOM order',
    info: 'Elements follow logical order in relation to the DOM. ',
    info2: 'Suggestions: None',
  },
  {
    id: nanoid(),
    title: '5/5 - Offscreen content is hidden from assistive technology',
    info2:
      'Suggestions: None required, further testing with experienced screen reader users is recommended.',
    info:
      'With the assistive technology I used content could be followed along in a sensible fashion. The skip to content function was appreciated as the top navigation options are extenstive. The BBC News site is only one tested that used image alt tags in a helpful way.',
  },
  {
    id: nanoid(),
    title: '5/5 - HTML5 landmark elements are used to improve navigation',
    info:
      'Generally relies on divs as primary container at a higher level, clear HTML used in general.',
    info2:
      'Suggestion: Consider use of more semantic tags where appropriate but this may not be appropriate with further investigation',
  },
];
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
