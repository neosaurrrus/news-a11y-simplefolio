import { nanoid } from 'nanoid';

export const headData = {
  title: 'The Sun Results', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'A study into news site accessibility on The Sun site.', // e.g: Welcome to my website
};
export const heroData = {
  title: 'Acessilbilty at',
  name: 'The Sun:',
  subtitle: 'a few tweaks short of a good experience',
  cta: 'more',
};

// ABOUT DATA
export const aboutData = {
  img: 'sun.png',
  paragraphOne:
    'Automated lighthouse testing found 20 passed audits and 4 flagged opportunities for improvement with a total score of 83. ',
  paragraphTwo:
    'The only issues that appear repeatedly are the lack of names for links and constrast not being sufficient. This would suggest a score of 83 for The Sun is well deserved score, but the manual testing does let it down somewhat.',
  paragraphThree:
    'Manual testing reveals that the tab order and the handling of screen readers leads to a suboptimal experience. These would take relatively small tweaks in order to fix but would make a huge difference for users that rely on those features. ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    title: '2/5 The page has a logical tab order',
    info2:
      'Suggestions: Rework layout of article elements with regards to the anchor link. Article carousel needs to avoid multiple tabs for traversal.',
    info:
      'Though small elements and a simple layout make tab navigation clear, the tab experience within each article element is strange with lowers elelements focusing before higher elements. On some elements, the tab focus disapoints for no decernible reason but another tab moves to the next element as expected.',
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
    info2: 'Suggestions: Consider making interactive elements more clear upon hover.',
    info:
      'The vast majority of the page is interactive though particular secondary elelemtns such as the news category selector use a different colour which does help make it clearer compared to other sites. However, the nav bar and comments icons are unclear due to the lack of distinction and overall the lack of focus styling does reduce clarity.',
  },
  {
    id: nanoid(),
    title: '4/5 The users focus is directed to new content added to the page',
    info2: 'Suggestions: None.',
    info:
      'The only new content to appear was the cookie prompt which, as it appeared clearly at the center of the page was immediately focusable with a good tab order. A custom notification prompt that appears is difficult to focus as it focuses after the end of page content.',
  },
  {
    id: nanoid(),
    title: '5/5 Users focus is not accidentally trapped in a region',
    info2: 'Suggestions: None.',
    info: 'In testing, the user foucs is never trapped in a region.',
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
      'Controls that are used follow standard patterns and do not use anything that would cause issues',
    info2: 'Suggestions: None required.',
  },
  {
    id: nanoid(),
    title: '4/5 Visual order on the page follows DOM order',
    info:
      'At a high level, the clear layout follows the DOM closely. However there are some sub-elements that are misordered in relation to the DOM  ',
    info2: 'Suggestions: None',
  },
  {
    id: nanoid(),
    title: '2/5 Offscreen content is hidden from assistive technology',
    info2:
      'Suggestions: Remove offscreen elements from being narrated. Provide alt tags for images that do not repeat the headline. ',
    info:
      'While a skip to content function is provided. there is a lot of content which is hidden which gets narrated, resulting in a confusing experience. Like a number of sites, the image alt text is the headline again, leading to a poor experience when using a screen reader. An instance was found of different figures being used in the alt text than on the headline. ',
  },
  {
    id: nanoid(),
    title: '4/5 HTML5 landmark elements are used to improve navigation',
    info: 'Generally relies on divs throughout with large amounts of classes.',
    info2:
      'Suggestion: Consider use of more semantic tags where appriopriate but this may not be appropriate with furthger investigation',
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
