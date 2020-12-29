import { nanoid } from 'nanoid';

export const headData = {
  title: 'The Times Results', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'A study into news site accessibility on the BBC News Site', // e.g: Welcome to my website
};
export const heroData = {
  title: 'Acessilbilty report for',
  name: 'The Times',
  subtitle: ' Rating: Excellent (Xth of 7.)',
  cta: 'more',
};

// ABOUT DATA
export const aboutData = {
  img: 'bbc.png',
  paragraphOne:
    'Automated lighthouse testing found 20 passed audits and 5 flagged opportunities for improvement with a total score of 86. ',
  paragraphTwo:
    'Links lacking names and imgs lacking alt tags was the bulk of the issues detected but these only applied to a minority of the content. The score of 86 appears to be well deserved.',
  paragraphThree: 'The manual tests were ...',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    title: '3/5 The page has a logical tab order',
    info2:
      'Suggestions: Ensure all focusable elements are indicated as much so that focus is not lost. Revise the layout in certain areas where it gets a bit strange.',
    info:
      'The focus is lost for a couple of tabs in places (presumably focusing on ads and buttons at that point). This was particulary noticeableThe tab order is not logical in places across the layout (sometimes going up to an article). Though annoying, these issues only occur in certain places with the majority of content following a logical order.',
  },
  {
    id: nanoid(),
    title: '5/5 Interactive Controls are keyboard focusable',
    info: 'As mentioned, while all controls are focusable they may not appear so.',
    info2: 'Suggestions: None.',
  },
  {
    id: nanoid(),
    title: '2/5 Interactive elements indicate their purpose and state',
    info2:
      'Suggestions: Ensure all elements have clear focus styling, add additional styling for elements on focus.',
    info:
      'Certain buttons and adverts do not show the focus highlight making it unclear they are interactive. While, on hover, there is a subtle colour change indicating interactive elements, this is not the case on focus.',
  },
  {
    id: nanoid(),
    title: '5/5 The users focus is directed to new content added to the page',
    info2: 'Suggestions: None.',
    info:
      'The only new content to appear was the cookie prompt which, of the page was immediately focusable.',
  },
  {
    id: nanoid(),
    title: '5/5 Users focus is not accidentally trapped in a region',
    info2: 'Suggestions: None.',
    info: 'In testing, the user foucs is never trapped in a region',
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
      'Suggestions: None required, further testing with experienced screenreader users is recommended.',
    info:
      'With the assistive technology I used content could be followed along in a sensible fashion. The skip to content function was appreciated as the top navigation options are extenstive',
  },
  {
    id: nanoid(),
    title: '5/5 - HTML5 landmark elements are used to improve navigation',
    info:
      'Generally relies on divs as primary container at a higher level, clear HTML used in general.',
    info2:
      'Suggestion: Consider use of more semantic tags where appriopriate but this may not be appropriate with furthger investigation',
  },
];

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
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
