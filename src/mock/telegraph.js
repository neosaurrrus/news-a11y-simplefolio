import { nanoid } from 'nanoid';

export const headData = {
  title: 'Telegraph Results', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'A study into news site accessibility on the Telegraph site', // e.g: Welcome to my website
};
export const heroData = {
  title: 'Accessibility at',
  name: 'The Telegraph:',
  subtitle: 'a great experience if you can actually subscribe.',
  cta: 'more',
};

// ABOUT DATA
export const aboutData = {
  img: 'telegraph.jpg',
  paragraphOne:
    'Automated lighthouse testing found 20 passed audits and 3 flagged opportunities for improvement with a total score of 94. ',
  paragraphTwo:
    'The issues found are around link names, iframe titles, and unique id attributes. Hoever these issues are the exception than the norm, the 94 score being well earnt overall',
  paragraphThree:
    'Manual testing was broadly good however with one significant exception, handling the subscription prompt that appears on the main page was quite difficult, getting ignored by my screen reader and hard to keyboard focus on. This is particulary frustrating when the content behind the paywall otherwise has great accessibility.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    title: '4/5 The page has a logical tab order',
    info2:
      'Suggestions: Rework the opinion elements to provide a more logical tabbing experience. To help navigate the non-standard layout, consider smaller sections to avoid tabbing going too far down before it goes back up again',
    info:
      'Tab order is generally conistent, though the complex layout does vary between left to right and up and down in a slightly confusing way. The Opinion sidebar cannot be focused till later on in the page, and has slightly odd tab behaviour. Overall the site is good, one nice touch is that it provides a "Jump to Navigation" upon first tab is a great solution to overladen navigation found on most news sites.',
  },
  {
    id: nanoid(),
    title: '5/5 Interactive Controls are keyboard focusable',
    info:
      'No issues found, all controls were keyboard focusable though with issues discussed in other categories.',
    info2: 'Suggestions: None.',
  },
  {
    id: nanoid(),
    title: '3/5 Interactive elements indicate their purpose and state',
    info2:
      'Suggestions: Consider making the author link more clear it is interactive without focused. Change formatting of the subscription box to show the focus more clearly',
    info:
      'Different colours are used consistantly to show interactive elements with an additional underline and colour change provided on focus.  Author links are less clear but still provide good. The subscription prompt however, uses formatting that makes it less clear when interactive eleemnts are focused.  ',
  },
  {
    id: nanoid(),
    title: '2/5 The users focus is directed to new content added to the page',
    info2: 'Suggestions: Focus on the subscription prompt first and foremost.',
    info:
      'The site provides a splash screen to subscribe which, while focusable, is only focusable after focusing on the cookie prompt behind it (which cannot be read properly in this state). Its easy to get stuck behind the subscription prompt, focusing on the newspaper content, as the focus formatting is not very clear on the substriction element itself.',
  },
  {
    id: nanoid(),
    title: '5/5 Users focus is not accidentally trapped in a region',
    info2: 'Suggestions: None.',
    info:
      'In testing, the user foucs is never trapped in a region. But its worth reiterating that the pop-ups provide ample opportunity to get lost while tab focussing.',
  },
  {
    id: nanoid(),
    title: '5/5 Custom controls have associated labels',
    info:
      'This appears to be the case in tab testing, there is little in the way of buttons and such to really have anything to get wrong',
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
      'The main and header elements are flipped according to the DOM, the opinion sidebar is higher in the DOM than the main content. However I was unable to discover any negative consequences to accessibility due to this. ',
    info2:
      'Suggestions: Worth testing further to see if the header location causes issues with other accessibility tooling. Consider the ordering of the opinion sidebar.',
  },
  {
    id: nanoid(),
    title: '1/5 - Offscreen content is hidden from assistive technology',
    info2:
      'Suggestions: Rework subscription prompt. Consider more useful labelling of images in articles. Avoid repetition in contributor photos and name links.',
    info:
      'The subscription prompt is ignored by my screen reader, which makes it difficult to progress. Otherwise it is generally good if you ignore subscription and cookie prompts. The Telegraph does not provide alt tags for images that are particulary clear but the payout is less image-heavy than most so the impact is lessened. Some of the contributor photos repeat what the link next to them says.',
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
