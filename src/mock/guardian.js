import { nanoid } from 'nanoid';

export const headData = {
  title: 'The Guardian Results', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'A study into news site accessibility', // e.g: Welcome to my website
};
export const heroData = {
  title: 'Accessibility at',
  name: 'The Guardian:',
  subtitle: 'a great experience...ignoring the prompts',
  cta: 'more',
};

// ABOUT DATA
export const aboutData = {
  img: 'guardian.png',
  paragraphOne:
    'Automated lighthouse testing Some improvements were identified by lighthouse testing but these were most one-off issues.',
  paragraphTwo:
    'Footer Elements with "aria-hidden-true" contain descendants that are focusable which may stop those with screen readers accessing. A few images lack alt tags to explain the images to screen reader users.',
  paragraphThree:
    'The most common issue was that a number of elements lacked a sufficient contract ratio which may limit readability for people with visual impairments',
  resume: 'https://design.theguardian.com/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    title: '4/5 The page has a logical tab order',
    info2:
      'Suggestions: Avoid text spanning long gaps in elements. See if ads can be better vetted for accessibility',
    info:
      'Generally the tab order is clear, occasionally elements with length longer than the viewport cause mildly confusing jumps. The tab order was a bit muddled within a particular ad displayed on the page.',
  },
  {
    id: nanoid(),
    title: '5/5 Interactive Controls are keyboard focusable',
    info: 'No issues found, all regular controls were keyboard focusable.',
    info2: 'Suggestions: None.',
  },
  {
    id: nanoid(),
    title: '2/5 Interactive elements indicate their purpose and state',
    info2:
      'Suggestions: Review style guide to cover elements that might follow interactive element design patterns unintentionally',
    info:
      'Most interactive elements are clear, using a filled colour lozenge to distinguish from other content. However, the cookie prompt colour choice makes it harder to distinguish focusable elements. Additionally content, such as the subscribe element can mildly resemble interactive elements.',
  },
  {
    id: nanoid(),
    title: '1/5 The users focus is directed to new content added to the page',
    info2:
      'Suggestions: Allow the support the guardian prompt to take focus to allow easy response for keyboard only users',
    info:
      'The cookie prompt was immediately focusable and appeared clearly. However, the support the guardian prompt did not appear focusable at all which makes it difficult to remove with only a keyboard.',
  },
  {
    id: nanoid(),
    title: '4/5 Users focus is not accidentally trapped in a region',
    info2: 'Suggestions: As above but otherwise fine.',
    info:
      'As a rule this did not happen in testing bar the supporter prompt as previously mentioned.',
  },
  {
    id: nanoid(),
    title: '5/5 Custom controls have associated labels',
    info: 'This appears to be the case in tab testing',
    info2: 'Suggestions: None required',
  },
  {
    id: nanoid(),
    title: '5/5 Custom controls have ARIA roles',
    info:
      'Controls that are used follow standard patterns and no not use anything that would cause',
    info2: 'Suggestions: None required',
  },
  {
    id: nanoid(),
    title: '4/5 Visual order on the page follows DOM order',
    info:
      'Main divs follow logical order in relation to the dom. Somewhat related to this, large jumps were found in in tabbing which might be disorientating to some users ',
    info2:
      'Suggestions: As noted earlier, taking care to avoid excessively large page elements would reduce the jumpiness experienced on rare occasions.',
  },
  {
    id: nanoid(),
    title: '5/5 Offscreen content is hidden from assistive technology',
    info2:
      'Suggestions: An element containing a graph could have been tweaked to provide a slightly more clearer experience for a screen reader. Further testing with experienced screenreader tools is recommended.',
    info:
      'With the assistive technology I used, content could be followed along in a sensible fashion. Images deliberately do not have alt content which does help make traversing the site more. ',
  },
  {
    id: nanoid(),
    title: '4/5 HTML5 landmark elements are used to improve navigation',
    info:
      'Generally relies on divs as primary container at a higher level, clear HTML used in general.',
    info2: 'Suggestion: Consider use of more semantic tags where appropriate.',
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
