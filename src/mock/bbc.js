import { nanoid } from 'nanoid';

export const headData = {
  title: 'BBC News Results', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'A study into news site accessibility on the BBC News Site', // e.g: Welcome to my website
};
export const heroData = {
  title: 'Acessilbilty report for',
  name: 'BBC News',
  subtitle: 'Summary of score',
  cta: 'learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'a11y.png',
  paragraphOne:
    'Some improvements were identified by lighthouse testing but these were most one-off issues.',
  paragraphTwo:
    'Footer Elements with "aria-hidden-true" contain descendants that are focusable which may stop those with screen readers accessing. A few images lack alt tags to explain the images to screen reader users.',
  paragraphThree:
    'The most common issue was that a number of elements lacked a sufficient contract ratio which may limt readability for people with visual impairements',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    title: '4/5 - The page has a logical tab order',
    info2:
      'Suggestions: Avoid text spanning long gaps in elements. See if ads can be better vetted for accessibility',
    info:
      '4/5 : Generally the tab order is clear, occasionally elements with length longer than the viewport cause mildly confusing jumps. The tab order was a bit muddled within an ad displayed on the page.',
  },
  {
    id: nanoid(),
    title: 'Interactive Controls are keyboard focusable',
    info: '10/10 - No issues found, all controls were keyboard focusable.',
    info2: 'Suggestions: None.',
  },
  {
    id: nanoid(),
    title: 'Interactive elements indicate their purpose and state',
    info2:
      'Suggestions: Review style guide to cover elements that might follow interactive element design patterns unintentionally',
    info:
      '4/5 - Most interactive elements are clear, using a filled colour lozenge to distinguish from other content. However, sometimes content, such as the subscribe element can mildly resemble interactive elements.',
  },
  {
    id: nanoid(),
    title: 'The users focus is directed to new content added to the page',
    info2:
      'Suggestions: Allow the cookie prompt to take focus to allow easy response for keyboard only users',
    info:
      '1/5 - The only new content found was the cookie prompt which was not focused, and did not appear focusable. This would be tricky for a keyboard only user to navigate.',
  },
  {
    id: nanoid(),
    title: 'Users focus is not accidentally trapped in a region',
    info2: 'Suggestions: As above but otherwise fine.',
    info:
      '4/5 - As a rule this did not happen in testing bar the cookie prompt as previously mentioned.',
  },
  {
    id: nanoid(),
    title: 'Custom controls have associated labels',
    info: '5/5 -  This appears to be the case in tab testing',
    info2: 'Suggestions: None required, good work',
  },
  {
    id: nanoid(),
    title: 'Custom controls have ARIA roles',
    info:
      '5/5 - Controls that are used follow standard patterns and no not use anything that would cause',
    info2: 'Suggestions: None required, top job!',
  },
  {
    id: nanoid(),
    title: 'Visual order on the page follows DOM order',
    info:
      '4/5 - Main divs follow logical order in relation to the dom. Occasionally large jumps were found in in tabbing which might be disorietating to some users ',
    info2:
      'Suggestions: As noted earlier, taking care to avoid exessively large page elements would reduce the jumpiness experienced on rare occasions.',
  },
  {
    id: nanoid(),
    title: 'Offscreen content is hidden from assistive technology',
    info2:
      'Suggestions: None required, further testing with experienced screenreader tools is recommended.',
    info:
      '5/5 - With the assistive technology I used content could be followed along in a sensible fashion',
  },
  {
    id: nanoid(),
    title: 'HTML5 landmark elements are used to improve navigation',
    info:
      '4/5 - Generally relies on divs as primary container at a higher level, clear HTML used in general.',
    info2: 'Suggestion: Consider use of more semantic tags where appriopriate.',
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
