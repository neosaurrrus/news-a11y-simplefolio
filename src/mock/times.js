import { nanoid } from 'nanoid';

export const headData = {
  title: 'The Times Results', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'A study into news site accessibility on The Times website', // e.g: Welcome to my website
};
export const heroData = {
  title: 'Accessibility at',
  name: 'The Times:',
  subtitle: 'a few flaws mar an otherwise great experience.',
  cta: 'more',
};

// ABOUT DATA
export const aboutData = {
  img: 'times.png',
  paragraphOne:
    'Automated lighthouse testing found 20 passed audits and 5 flagged opportunities for improvement with a total score of 86. ',
  paragraphTwo:
    'Links lacking names and imgs lacking alt tags was the bulk of the issues detected but these only applied to a minority of the content. The score of 86 appears to be well deserved but area of manual testing means that this score does flatter somewhat.',
  paragraphThree:
    'The manual tests showed up a couple of significant issues however. In articular the tab logic was not consistent and often went MIA, and using a screen reader was more annoying due to small but regular issues.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    title: '2/5 The page has a logical tab order',
    info2:
      'Suggestions: Ensure all focusable elements are indicated as much so that focus is not lost. Revise the layout in certain areas where it gets a bit strange.',
    info:
      'The focus is lost for a couple of tabs in places (presumably focusing on ads and buttons at that point). This was particularly noticeable on the Subscription page that is normally the first thing a user would see. The tab order is not logical in places across the layout (sometimes going up to an article). Though annoying, these issues only occur in certain places with the majority of content following a logical order.',
  },
  {
    id: nanoid(),
    title: '5/5 Interactive Controls are keyboard focusable',
    info: 'As mentioned, while all controls are focusable they may not appear as such.',
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
      'Bar the subscription prompt which redirects to a different page, the only new content to appear was the cookie prompt which, of the page was immediately focusable on Chrome. However I did notice some issues with Safari but that is out of scope for this analysis',
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
    info: 'This appears to be the case in tab testing, buttons and links are as you would expect',
    info2: 'Suggestions: None required.',
  },
  {
    id: nanoid(),
    title: '5/5 Custom controls have ARIA roles',
    info:
      'Controls that are used follow standard patterns and do not use anything that would cause issues at a technical level',
    info2: 'Suggestions: None required.',
  },
  {
    id: nanoid(),
    title: '5/5 Visual order on the page follows DOM order',
    info: 'Elements follow a logical order in relation to the DOM despite a non-simple layout.',
    info2: 'Suggestions: None',
  },
  {
    id: nanoid(),
    title: '2/5 - Offscreen content is hidden from assistive technology',
    info2:
      'Suggestions: Work with sponsored content providers to improve screen reader functionality. Rework the pattern between article images and headings',
    info:
      'The skip to content function was appreciated as well as collapsed navigation. However testing revealed a number of issues: the labels used for images were confusing as they come before the heading and often only made sense in reference to the heading which is spoken afterwards. The sponsored content section makes little to no concession to screen readers.',
  },
  {
    id: nanoid(),
    title: '5/5 - HTML5 landmark elements are used to improve navigation',
    info:
      'Uses a combination of divs and sections as a primary container at a higher level, clear HTML used in general. One of the few news sites that actually uses sections',
    info2: 'Suggestion: None',
  },
];

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
