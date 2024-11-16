export const pages: Record<string, string> = {
    home    : '/',
    about   : '/about',
    work    : '/work',
    projects: '/projects',
};

export const content = {
    name        : 'Jared Hayashi',
    title       : 'Cloud Software Engineer',
    statement   : 'I am a software engineer that is experienced in building efficient and robust fullstack applications for the cloud.',
    introduction: 'Hi, my name is Jared Hayashi. \n\nI am a fullstack developer with about 2 years of experience. My main focus in on building cloud applications primarily using Typescript or Python paired with AWS.   \n\nIn my free time, I can usually be found playing video games, tennis, pickleball, ping pong, or rock climbing. ',
    about       : 'Hi, my name is Jared Hayashi. I graduated from Iowa State University in Fall of 2022 with a Bachelor\'s in Software Engineering. Since graduating, I have had the privilege to employ my skills at John Deere where I discovered my passion for creating cloud applications. \n',
};

export const workContent = [
    {
        company: 'John Deere',
        description: 'Currently developing and maintaining REST API\'s that provide automation for document processing and text extraction while maintaining General Data Protection Regulation (GDPR) compliance.\n\nThe API\'s are delivered in the form of a serverless design using API Gateway, Lambda, SQS, SNS, Eventbridge, and S3. They are rigorously tested using a combination of unit, fullstack, and regression tests utilizing Vitest and Cypress.\n\nMy current focus is on developing features for our API that utilizes AWS Textract\'s machine learning model to automate the extraction of information from PDFs and images.',
        skills: ['Typescript', 'React', 'Node', 'AWS', 'Terraform', 'API Gateway', 'PostgreSQL'],
        team: 'Digitize My Docs',
        time: '2024 - Present',
        title: 'Software Engineer',
    },
    {
        company: 'John Deere',
        description: 'Developed and supported AWS and Azure applications to supply foundational infrastructure throughout the company. Primarily worked with VPC, Route53, Cloudformation, ECS, and Lambda in AWS as well as VNET and Virtual Machines in Azure to ensure proper connectivity in accounts.   \n\nI helped maintain Spring API\'s which were used to create and manage accounts as well as deploy infrastructure. I also provided support to other team\'s throughout the company with issues related to networking, DNS, migrations, etc.',
        skills: ['Python', 'Java', 'Springboot', 'AWS', 'Azure', 'Github Actions', 'Terraform', 'Docker'],
        team: 'Landing Zone',
        time: '2023 - 2024',
        title: 'Software Engineer',
    },
    {
        company: 'Kent Corporation',
        description: 'Created and managed applications in Dynamics AX 2012 using X++ and Microsoft SQL. \n\nPrimarily updated various parts of their primary application to ensure compliance with updated TTB standards.',
        skills: ['X++', 'Dynamics AX 2012', 'MSSQL'],
        team: undefined,
        time: '2022',
        title: 'Application Developer Intern',
    },
];

export const projectContent = [
    {
        title: 'Portfolio v2',
        description: content.introduction,
        skills: ['Typescript', 'React', 'AWS', 'Terraform', 'Github Actions'],
    },
    {
        title: 'Discord Bot',
        description: content.introduction,
        skills: ['Typescript', 'React', 'AWS', 'Terraform', 'Github Actions'],
    },
    {
        title: 'Portfolio v4',
        description: content.introduction,
        skills: ['Typescript', 'React', 'AWS', 'Terraform', 'Github Actions'],
    },
];
