// config.js

export const fullName = 'Kamaal Farah';

export const lastUpdatedTermsAndConditions = 'February 14th 2022';
export const contactEmail = 'app.kamaal@gmail.com';

export const currentRoles = [
  'Full Stack Software Engineer',
  'iOS/macOS Developer',
];

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
export const copyWrite = `Ⓒ 2020-${currentYear} ${fullName}`;

type Social = {
  id: string;
  icon: string;
  url: string;
  name: string;
};

export const socials: Social[] = [
  {
    id: '69f7f3ca-72a0-4feb-aa17-27da51e09351',
    icon: 'fa fa-2x fa-github',
    name: 'GitHub',
    url: 'https://github.com/kamaal111/',
  },
  {
    id: '59083d8c-399a-49dd-be52-4e4031a14023',
    icon: 'fa fa-2x fa-linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kamaalfarah/',
  },
  {
    id: '62959d55-66a9-4212-8ded-33e817c88c50',
    icon: 'fa fa-2x fa-apple',
    name: 'App Store',
    url: 'https://apps.apple.com/bj/developer/kamaal-farah/id1502158009/',
  },
];

export const menuItems: { id: string; link: string; name: string }[] = [
  {
    id: '7845be0e-c294-48a4-9515-235d97b9ce83',
    link: '/projects',
    name: 'Projects',
  },
];
