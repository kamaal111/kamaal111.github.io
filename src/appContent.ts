const termsAndConditionContent = [
  {
    header: 'Content',
    content: [
      `The Service allows you to use the apps (Color Selector and Iron Buddy)
        for the use it was intended for. You are responsible for the data you
        create and share.`,
    ],
  },
  {
    header: 'Links To Other Web Sites',
    content: [
      `The Service may contain links to third-party web sites or services that
        are not owned or controlled by me (iCloud for example). I have no
        control over, and assume no responsibility for, the content, privacy
        policies, or practices of any third party web sites or services. You
        further acknowledge and agree that I shall not be responsible or liable,
        directly or indirectly, for any damage or loss caused or alleged to be
        caused by or in connection with use of or reliance on any such content,
        goods or services available on or through any such web sites or
        services.`,
    ],
  },
  {
    header: 'Changes',
    content: [
      `I reserve the right, at my sole discretion, to modify or replace these
        Terms at any time. If a revision is material I will try to provide at
        least 30 days' notice prior to any new terms taking effect. What
        constitutes a material change will be determined at our sole discretion.`,
    ],
  },
];
const termsAndConditionTitle = 'Terms and Conditions';
const termsAndConditionDescription = `Please read these Terms and Conditions ("Terms", "Terms and Conditions")
        carefully before using the Color Selector / Iron Buddy. Your access to
        and use of the Service is conditioned on your acceptance of and
        compliance with these Terms. These Terms apply to all visitors, users
        and others who access or use the Service. By accessing or using the
        Service you agree to be bound by these Terms. If you disagree with any
        part of the terms then you may not access the Service.`;
const termsAndConditionDescription2 = `By accessing or using the Service you agree to be bound by these Terms. 
        If you disagree with any part of the terms then you may not access the Service.`;
export const termsAndCondition = {
  title: termsAndConditionTitle,
  description: [termsAndConditionDescription, termsAndConditionDescription2],
  content: termsAndConditionContent,
};

const privacyTitle = 'Privacy Policy';
const privacyDescription = `This policy applies to all information collected or submitted on
        Kamaal's apps for iPhone, iPad and Mac.`;
const privacyDescription2 = `This page is used to inform visitors regarding my policies with the
        collection, use, and disclosure of Personal Information if anyone
        decided to use my Service.`;
const privacyDescription3 = `If you choose to use my Service, then you agree to the collection and
        use of information in relation to this policy. The Personal Information
        that I collect is used for providing and improving the Service. I will
        not use or share your information with anyone except as described in
        this Privacy Policy.`;

const privacyContent = [
  {
    header: 'Information Collection and Use',
    content: [
      `For a better experience, while using our Service, I may require you to
        provide us with certain personally identifiable information. The
        information that I request will be retained on your device and is not
        collected by me in any way.`,
      `The app does use third party services that may collect information used
        to identify you.`,
    ],
  },
  {
    header: 'Log Data',
    content: [
      `I want to inform you that whenever you use my Service, in a case of an
        error in the app I collect data and information (through third party
        products) on your phone called Log Data. This Log Data may include
        information such as your device Internet Protocol (“IP”) address, device
        name, operating system version, the configuration of the app when
        utilizing my Service, the time and date of your use of the Service, and
        other statistics.`,
    ],
  },
  {
    header: 'Changes to This Privacy Policy',
    content: [
      `I may update our Privacy Policy from time to time. Thus, you are advised
        to review this page periodically for any changes. I will notify you of
        any changes by posting the new Privacy Policy on this page. These
        changes are effective immediately after they are posted on this page.`,
    ],
  },
];

export const work = [
  {
    title: 'Color Selector App',
    link: 'https://kamaal.io/colorselector/',
  },
  {
    title: 'Web assembly game of life',
    link: 'https://kamaal.io/wasm-game-of-life/',
  },
];

export const privacy = {
  title: privacyTitle,
  description: [privacyDescription, privacyDescription2, privacyDescription3],
  content: privacyContent,
};

const appContent = {
  termsAndCondition,
  privacy,
  work,
};

export default appContent;
