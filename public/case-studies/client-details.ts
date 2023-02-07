export const clientDetails = [
  {
    clientName: 'revio',
    coverImage: 'revioBackground-2.png',
    problem:
      'We joined Revio shortly after their inception to add debit order collections as one of the tools on their system. Integrating with local banking systems offered some very interesting and unique challenges',
    solution:
      'Here is how we created a system that abstracts the bank’s payment and collection flows into a more modern and simple to use API.',
    challenge: [
      {
        title: 'Concept Behind the Product',
        description:
          'Direct debits (or debit orders) are generally a foreign concept for most international clients, but for medium to large companies in South Africa this is the most effective tool for collecting insurance premiums, rent, car payments, etc. on a large scale.',
      },
      {
        title: 'Gap in the Market',
        description:
          'Give smaller businesses the opportunity to affordably play within the debit order collection space. Handle large amounts of collections for larger businesses. Abstract banking processes for clients. Transparency and early warning on negative collection results.',
      },
      {
        title: 'The Problem',
        description:
          'Easier way for clients to utilise the full suite of collection tools provided by the banks. Mandate management (Create, Amendments and Authentication). Automatic recon and settlement from intermediary accounts.',
      },
    ],
    services: [
      'System Architecture',
      'Database Design',
      'Infrastructure Design',
      'Back-end Development',
    ],
    teamSize: 3,
    quoteSectionImage: '/../public/case-studies/clay.png',
    infoGathered: [
      'What were the banks’ limitations? Which technologies do they use?',
      'What was our average amount of projected collections? Per day? Per month?',
      'Are we able to find a better way to handle the banks’ file-based systems?',
      'How can we be better than the competitions’ systems?',
      'How do we simplify some of the concepts?',
      'How do we secure the whole process?',
      'How do we test the system?',
    ],
    infoGatheringMethod: [
      ' Going through bank integration specification documents',
      'Speaking to stakeholders',
      'Researching the tech available on cloud platforms such as AWS',
      'Looking at best practices for enterprise systems',
    ],
    designProcess: [
      'Talking to stakeholders to ask about possible pitfalls and known hiccups',
      'Created multiple iterations of entity relationship diagrams (ERD) to flesh out possible database structures.',
      'Drafted many flow diagrams to determine the lifecycle of a collection or mandate.',
      'Discussed which technologies to use to solve problems created by older banking technologies.',
      'Discuss ways to test system without actually connecting to the bank',
    ],
    buildingProcess: [
      'Talking to stakeholders to ask about possible pitfalls and known hiccups.',
      'Created multiple iterations of entity relationship diagrams (ERD) to flesh out possible database structures.',
      'Drafted many flow diagrams to determine the lifecycle of a collection or mandate.',
      'Discussed which technologies to use to solve problems created by older banking technologies.',
      'Discuss ways to test system without actually connecting to the bank',
    ],
    results: [
      'Mandate management made easy. Intuitive creation, authentication and amendment calls.',
      'Able to create collections from existing mandates to save time.',
      'Able to handle the processing of collections end-to-end.',
      'Comprehensive testing and monitoring',
    ],
    resultsBackgroundImage: '/case-studies/revioLandingPage.png',
    clientResults: '50 Contracted Clients at Present',
  },
  {
    clientName: 'raubex',
    coverImage: 'raubexBackground-2.png',
    problem:
      'Originally Bluebird was contracted to maintain a 2nd generation system for Raubex Building Group. As this system started scaling it started to show some serious cracks.',
    solution:
      'After about a year and a half, we convinced Raubex to rebuild this from the ground up.',
    challenge: [
      {
        title: 'Concept Behind the Product',
        description:
          'The system needs to cater for the day-to-day operations at Raubex. This involves loading requisitions, creating orders and managing deliveries.',
      },
      {
        title: 'Gap in the Market',
        description:
          'No affordable systems exist that focus specifically on the “building world”. A new system could open up the possibilities of automating tasks that have been manual up to this point.',
      },
      {
        title: 'The Problem',
        description:
          'The previous system was very slow and sometimes even unusable. Some processes are manual and Excel-based.',
      },
    ],
    services: [
      'System Architecture',
      'Database Design',
      'Infrastructure Design',
      'Back-end Development',
      'Web Development',
    ],
    teamSize: 2,
    quoteSectionImage: '/../public/case-studies/raubex-clay.png',
    infoGathered: [
      'We needed to determine a breakdown of all the intended roles and permissions ',
      'Distill core concepts that would define the system',
      'Determine regular process flows to optimise for scaling',
      'Possible Architecture constraints(cloud hosting, email server hosting, internal firewall access, etc.).',
    ],
    infoGatheringMethod: [
      'Calls and meetings with stakeholders',
      ' Domain knowledge acquired by working on older system',
      'Meetings with internal IT department',
    ],
    designProcess: [
      'Created multiple iterations of entity relationship diagrams (ERD) to flesh out possible database structures.',
      'Created wireframes to visualise the website flow and function. ',
      'Determined which parts of the old system could be reused to not reinvent the wheel',
    ],
    buildingProcess: [
      'Domain driven design principles on the backend to clean up the structure and make it more manageable and scalable.',
      'Used our own internal boilerplate for the website structure(react, tailwind, d - man, etc.).',
      ' Opted for a code - first database option to facilitate easy changes and maintenance.',
      ' Hosted all infrastructure on Azure, with repo and CI / CD on Github.',
    ],
    results: [
      'Multiple roles and permission based system.',
      'Able to create, edit and delete Requisitions.',
      'Able to create, edit and delete orders',
      'Able to create deliveries and call - offs.',
      'Able to export orders and deliveries to external accounting system.',
      'Able to produce PDF quotes, orders and delivery notes.',
    ],
    resultsBackgroundImage: '/case-studies/raubexLandingPage.png',
    clientResults: 'Used as the main system actively at the company',
  },
];
