export const pages: Record<string, string> = {
    Home    : '/',
    // About   : '/about',
    Work    : '/work',
    Projects: '/projects',
};

export const content = {
    name     : 'Jared Hayashi',
    title    : 'Cloud Software Engineer',
    statement: 'I am a software engineer that is experienced in building efficient and robust fullstack applications for the cloud.',
    about    : 'Hi, my name is Jared Hayashi. I graduated from Iowa State University in Fall of 2022 with a Bachelor\'s in Software Engineering. Since graduating, I have had the privilege to employ my skills at John Deere where I discovered my passion for creating cloud applications. \n\nMy current focus is on gaining experience with building fullstack cloud applications primarily using Node and React. \n\nIn my free time, I can usually be found playing video games, tennis, pickleball, ping pong, or rock climbing.',
};

export const workContent = [
    {
        company    : 'John Deere Financial',
        description: 'Supporting and developing two customer-facing applications with over 50,000 users, MyFinancial and the John Deere Online Credit Application. \n\nDeveloped a Model Context Protocol (MCP) server that provides ~1000 technical documents as contextual knowledge for GitHub Copilot, significantly enhancing AI-assisted development and streamlining knowledge transfer for new team members.',
        skills     : ['Typescript', 'React', 'Node', 'AWS', 'Terraform', 'Docker'],
        team       : 'Customer Crew',
        time       : '2025 - Present',
        title      : 'Software Engineer',
    },
    {
        company    : 'John Deere Financial',
        description: 'Led infrastructure modernization initiatives including migrating team websites from deprecated libraries to modern frameworks and transitioning resources from on-premise systems to AWS cloud infrastructure. \n\nMaintained Jenkins CI/CD pipelines and contributed to company-wide cost optimization efforts to improve operational efficiency. \n\nAssisted with implementation of an AI chatbot solution to automate reminders and provide assistance to development teams for infrastructure updates, streamlining deployment processes and reducing manual overhead.',
        skills     : ['Python', 'Typescript', 'React', 'AWS', 'Terraform', 'Jenkins'],
        team       : 'Cloudabunga',
        time       : '2025',
        title      : 'Software Engineer',
    },
    {
        company    : 'John Deere Financial',
        description: 'Developed and maintained REST API\'s to provide automation for document processing and text extraction while maintaining General Data Protection Regulation (GDPR) compliance.\n\nThe API\'s are delivered in the form of a serverless design using API Gateway, Lambda, SQS, SNS, Eventbridge, and S3. They are rigorously tested using a combination of unit, fullstack, and regression tests utilizing Vitest and Cypress.\n\nFocused on developing features for our API that utilizes AWS Textract\'s machine learning model to automate the extraction of information from PDFs and images.',
        skills     : ['Typescript', 'React', 'Node', 'AWS', 'Terraform'],
        team       : 'Digitize My Docs',
        time       : '2024 - 2025',
        title      : 'Software Engineer',
    },
    {
        company    : 'John Deere',
        description: 'Developed and supported AWS and Azure applications to supply foundational infrastructure throughout the company. Primarily worked with VPC, Route53, Cloudformation, ECS, and Lambda in AWS as well as VNET and Virtual Machines in Azure to ensure proper connectivity in accounts.   \n\nI helped maintain Spring API\'s which were used to create and manage accounts as well as deploy infrastructure. Also provided support to other team\'s throughout the company with issues related to networking, DNS, migrations, etc.',
        skills     : ['Python', 'Java', 'Springboot', 'AWS', 'Azure', 'Github Actions', 'Terraform', 'Docker'],
        team       : 'Landing Zone',
        time       : '2023 - 2024',
        title      : 'Software Engineer',
    },
    {
        company    : 'Kent Corporation',
        description: 'Created and managed applications in Dynamics AX 2012 using X++ and Microsoft SQL. \n\nPrimarily updated various parts of their primary application to ensure compliance with updated TTB standards.',
        skills     : ['X++', 'Dynamics AX 2012', 'MSSQL'],
        team       : undefined,
        time       : '2022',
        title      : 'Application Developer Intern',
    },
];

export const projectContent = [
    {
        title      : 'Portfolio v2',
        description: 'This website created using Typescript, React, Material UI, and Vite. Deployed to AWS Cloudfront using Terraform and GitHub Actions.',
        skills     : ['Typescript', 'React', 'AWS', 'Terraform', 'Github Actions'],
        image      : 'portfolio-v2-image.png',
        link       : 'https://github.com/jhayashi1/portfolio-v2-ui',
    },
    {
        title      : 'Discord Bot (js)',
        description: 'Most recent discord bot created to start and stop EC2 instances to host game servers. Uses discord\'s new slash command API.\n\nImplemented using Typescript and Node. Bundled in a docker container and deployed to AWS ECS.\n\nStill in development.',
        skills     : ['Typescript', 'Node', 'AWS'],
        image      : 'discord-js-image.png',
        link       : 'https://github.com/jhayashi1/berry-bot-js',
    },
    {
        title      : 'Shorts Extension',
        description: 'Simple chrome extension to inject a button to redirect a youtube shorts video to the normal video player\n\nPlan to add other functionality to improve youtube experience.',
        skills     : ['Typescript', 'React', 'Chrome'],
        image      : 'shorts-extension-image.png',
        link       : 'https://github.com/jhayashi1/shorts-extension',
    },
    {
        title      : 'Toolkit',
        description: 'Archive of tools that I use for development',
        skills     : ['Bash'],
        image      : 'toolkit-image.png',
        link       : 'https://github.com/jhayashi1/toolkit',
    },
    {
        title      : 'Discord Bot (py)',
        description: 'Old discord bot created to perform miscellaneous tasks including AWS and reddit. Located in the discord-bot directory of the repository. No longer in development',
        skills     : ['Python', 'AWS'],
        image      : 'discord-py-image.png',
        link       : 'https://github.com/jhayashi1/aws-server',
    },
    {
        title      : 'Portfolio v1',
        description: 'Older website created with React and Typescript and deployed to github pages.',
        skills     : ['React', 'Javascript'],
        image      : 'portfolio-v1-image.png',
        link       : 'https://github.com/jhayashi1/jhayashi1.github.io',
    },
];
