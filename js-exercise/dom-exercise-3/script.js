import { data } from './data.js';

const headerEl = document.querySelector('.header');
const body = document.querySelector('.body');
const authorTitlesEl = document.querySelector('.author-titles');
const authorSkillsEl = document.querySelector('.author-skills');
const qualificationsEl = document.querySelector('.author-qualification');
const keywordsElContainer = document.querySelector('.keywords-container');
const socialLinksContainer = document.querySelector('.social-links');

function author() {
  const titleEl = document.createElement('h1');
  titleEl.innerHTML = name;

  // const socialLinks = document.createElement('nav');
  // socialLinks.innerHTML = `<a href=""></a>`

  const bio = document.createElement('p');
  bio.innerHTML = data.author.bio;

  headerEl.appendChild(titleEl);
  headerEl.appendChild(bio);
}

const name = authorName(data);

function authorName(obj) {
  const name = data.author.firstName + ' ' + data.author.lastName;

  return name;
}

body.style.fontFamily = 'Arial';

function socialLinks() {
  const authorLinks = data.author.socialLinks;

  for (let i = 0; i < authorLinks.length; i++) {
    const link = document.createElement('a');
    link.setAttribute('href', authorLinks[i].url);
    const icon = authorLinks[i].fontawesomeIcon;
    link.innerHTML = icon;

    socialLinksContainer.style.display = 'flex';
    socialLinksContainer.style.justifyContent = 'center';
    socialLinksContainer.style.alignItems = 'center';
    socialLinksContainer.style.margin = '20px';

    link.style.fontSize = '30px';
    link.style.color = 'black';
    link.style.margin = '5px';
    socialLinksContainer.appendChild(link);
  }
}

function titles() {
  const titleListHeading = document.createElement('h4');
  authorTitlesEl.appendChild(titleListHeading);

  const titles = data.author.titles;

  for (let i = 0; i < titles.length; i++) {
    titleListHeading.innerHTML = 'Titles';

    const titleElLists = document.createElement('li');

    const joinTitles = titles[i].join(' ');
    titleElLists.innerHTML = joinTitles;

    authorTitlesEl.appendChild(titleElLists);
    titleElLists.style.listStyleType = 'none';
  }
}

function skills() {
  const skillsListHeading = document.createElement('h4');
  authorSkillsEl.appendChild(skillsListHeading);

  const skills = data.author.skills;
  for (let i = 0; i < skills.length; i++) {
    skillsListHeading.innerHTML = 'Skills';

    const icon = `<i class="fas fa-check-square"></i>`;

    const skillsElLists = document.createElement('li');
    skillsElLists.innerHTML = `${icon} ${skills[i]}`;
    authorSkillsEl.appendChild(skillsElLists);

    skillsElLists.style.listStyleType = 'none';
  }
}

function qualifications() {
  const qualificationHeading = document.createElement('h4');
  qualificationsEl.appendChild(qualificationHeading);

  const qualification = data.author.qualifications;
  for (let i = 0; i < qualification.length; i++) {
    qualificationHeading.innerHTML = 'Qualifications';
    const qualificationElLists = document.createElement('li');
    qualificationElLists.innerHTML = qualification[i];

    qualificationsEl.appendChild(qualificationElLists);

    qualificationElLists.style.listStyleType = 'none';
  }
}

function keywords() {
  const keywordsHeading = document.createElement('h4');
  keywordsElContainer.appendChild(keywordsHeading);

  const keywords = data.keywords;

  for (let i = 0; i < keywords.length; i++) {
    keywordsHeading.innerHTML = 'Keywords';

    const keywordsElLists = document.createElement('li');
    keywordsElLists.innerHTML = ` # ${keywords[i]}`;
    keywordsElContainer.appendChild(keywordsElLists);
    const randomColor = getRandomColor();

    keywordsElLists.style.padding = '5px';
    keywordsElLists.style.margin = '5px 10px';
    keywordsElLists.style.background = randomColor;
    keywordsElLists.style.color = 'black';
    keywordsElLists.style.listStyleType = 'none';

    keywordsElContainer.style.display = 'flex';
    keywordsElContainer.style.alignItems = 'center';
    keywordsElContainer.style.justifyContent = 'center';
    keywordsElContainer.style.flexWrap = 'wrap';
  }
}

titles();
socialLinks();
author();
skills();
qualifications();
keywords();

function getRandomColor() {
  const color = [
    '#FFBCBC',
    '#DA0037',
    '#D83A56',
    '#A239EA',
    '#5D8233',
    '#66DE93',
    '#F3C583',
    '#B3E283',
  ];

  const randomColor = color[Math.floor(Math.random() * color.length)];
  return randomColor;
}
