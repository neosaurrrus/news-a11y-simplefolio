import { nanoid } from 'nanoid';

export const headData = {
  title: 'Daily Mail Results', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'A study into news site accessibility on the Daily Mail Site', // e.g: Welcome to my website
};
export const heroData = {
  title: 'Accessibility report for',
  name: 'The Daily Mail',
  subtitle: 'More work needed',
  cta: 'Summary',
};

// ABOUT DATA
export const aboutData = {
  img: 'mail.png',
  paragraphOne:
    'Automated lighthouse testing found 17 passed audits and 6 flagged opportunities for improvement with a total score of 84. ',
  paragraphTwo:
    'The most common flags were for many of the images, links and iframes missing the relevent titles or tages and the heading elements do not follow a sequentially decending order. While the lighthouse score is excellent, the issues flagged occur with greater frequency than the score would suggest.',
  paragraphThree:
    'The manual tests were less glowing however, scoring 29 out of a potential 50. There are several issues that stem of the flags found in the automated testing and the cookie prompt is hear to deal with.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    title: '2/5 The page has a logical tab order',
    info2:
      'Suggestions: Establish a more consistent top to bottom tab order. Make sections of the site clearly distinguishable that would make the sidebar/main column jumps clearer. The Mirror is a good example of how this can be achieved.',
    info:
      'The tab order is muddled in places. Some examples include the top bar focusing after the navbar and unclear jumps to the sidebar and back. Within the articles, which is the majority of the page, there is a logical order however',
  },
  {
    id: nanoid(),
    title: '5/5 - Interactive Controls are keyboard focusable',
    info: 'No issues found, all regular controls were keyboard focusable.',
    info2: 'Suggestions: None',
  },
  {
    id: nanoid(),
    title: '4/5 Interactive elements indicate their purpose and state',
    info2:
      'Suggestions: Consider making a clearer distinction between minor interactive elements and regular content.',
    info:
      'Bold font is used consistantly to show interactive elements with an additional underline provided on focus. Secondary interactive elements such as the links to news categories are a little hard to distinguish before focusing. ',
  },
  {
    id: nanoid(),
    title: '1/5 The users focus is directed to new content added to the page',
    info2:
      'Suggestions: Allow the cookie prompt to take focus at the top of the page to allow easy response for keyboard only users',
    info:
      'The only new content found was the cookie prompt which was not focused, and did not appear focusable. This would be tricky for a keyboard only user to navigate.',
  },
  {
    id: nanoid(),
    title: '4/5 Users focus is not accidentally trapped in a region',
    info2: 'Suggestions: Consider the use of clearer, smaller regions',
    info:
      'Generally good, however due to the size of regions, it can feel a little confining as its hard to see when it will focus on the side bar and then back to main bar',
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
      'Controls that are used follow standard patterns and no not use anything that would cause issues. Perfect use of ARIA labels throughout.',
    info2: 'Suggestions: None required.',
  },
  {
    id: nanoid(),
    title: '2/5 Visual order on the page follows DOM order',
    info: 'E ',
    info2: 'Suggestions: None',
  },
  {
    id: nanoid(),
    title: '1/5 - Offscreen content is hidden from assistive technology',
    info2:
      'Suggestions: Better labelling of links and images. Further work with UI elements such as the carousel to be clearer for screen readers.',
    info:
      'The issues flagged in the automated lighthouse testing, namely a lack of image and link labelling cause a fair amount of confusion for screen readers. A custom carousel used in a prominent place was very confusing when relying on screen reading. ',
  },
  {
    id: nanoid(),
    title: '3/5 - HTML5 landmark elements are used to improve navigation',
    info:
      'Generally unclear from the HTML5 how the page is structured with heavily reliance on unlabelled iframes and divs',
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
