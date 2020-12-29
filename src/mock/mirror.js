import { nanoid } from 'nanoid';

export const headData = {
  title: 'The Mirror results', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'A study into news site accessibility on The Daily Mirror site', // e.g: Welcome to my website
};
export const heroData = {
  title: 'Accessibility report for',
  name: 'The Mirror',
  subtitle: 'Excellent bar screen reader issues.',
  cta: 'more',
};

// ABOUT DATA
export const aboutData = {
  img: 'mirror.png',
  paragraphOne:
    'Automated lighthouse testing found 20 passed audits and 4 flagged opportunities for improvement with a total score of 83. ',
  paragraphTwo:
    'The flags were for a few images and links that lacked the right alt tags and names, as well as some contrast issues (which were not too glaring in my own opinion). The quality of the screen reader experience does make this a fair lighthouse score.',
  paragraphThree:
    'The manual tests scored 42 out of a potential 50, which is a great score. However the labels and tags used through the articles created signicant issues when using a screenreader which should be addressed.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    title: '4/5 The page has a logical tab order',
    info2: 'Suggestions: None required',
    info:
      'Tab order is clear, small elements make it easy to follow the flow though the page. The cookie prompt is focusable though appears at the bottom and has a slightly muddled tab order.',
  },
  {
    id: nanoid(),
    title: '5/5 Interactive Controls are keyboard focusable',
    info: 'No issues found, all controls were keyboard focusable.',
    info2: 'Suggestions: None.',
  },
  {
    id: nanoid(),
    title: '3/5 Interactive elements indicate their purpose and state',
    info2:
      'Suggestions: Consider making a clearer distinction between minor interactive elements and regular content. Adding an underline when focused, like the BBC News site would aid clarity',
    info:
      'Bold font is used consistantly to show interactive elements. Secondary interactive elements such as the links to news categories are a little hard to distinguish before focusing. ',
  },
  {
    id: nanoid(),
    title: '4/5 The users focus is directed to new content added to the page',
    info2: 'Suggestions: None.',
    info:
      'The only new content to appear was the cookie prompt. It appeared at the bottom of the page which is a little unclear, but was immediately focusable though the focus logic was a little muddled inside of it.',
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
    info: 'This appears to be the case in tab testing, consistent labbeling is used throughout',
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
    title: '4/5 Visual order on the page follows DOM order',
    info:
      'Elements follow logical order from the DOM aside from the left and right side advertisments appearing above the central main content.  ',
    info2:
      'Suggestions: Look into order of advertisements to main content. However this is relativly minor and may cause adverse issues',
  },
  {
    id: nanoid(),
    title: '2/5 - Offscreen content is hidden from assistive technology',
    info2:
      'Suggestions: Revise the labelling logic for article images and comments, consider use of ads more suitable for screen readers.',
    info:
      'With the assistive technology, the content was in a logical order. However the article image and comment elements simply used the name of the article which meant that the user would hear the article headline 3 times per article! The advertisments used also has elements that just added to the overal noise.',
  },
  {
    id: nanoid(),
    title: '5/5 - HTML5 landmark elements are used to improve navigation',
    info:
      'Generally relies on divs as primary container at a higher level, clear HTML used in general.',
    info2:
      'Suggestion: Consider use of more semantic tags where appriopriate but this may not be appropriate with further investigation',
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
