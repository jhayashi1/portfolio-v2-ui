export const pages: Record<string, string> = {
    Home    : '/',
    About   : '/about',
    Work    : '/work',
    Projects: '/projects',
};

export const content = {
    name        : 'Jared Hayashi',
    title       : 'Software Engineer',
    statement   : 'I build efficient and robust fullstack applications for the cloud',
    introduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    about       : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

export const workContent = [
    {
        company: 'John Deere',
        description: content.introduction,
        skills: ['Typescript', 'React', 'Node', 'AWS', 'Terraform', 'API Gateway', 'PostgreSQL'],
        team: 'Digitize My Docs',
        time: '2024 - Present',
        title: 'Software Engineer',
    },
    {
        company: 'John Deere',
        description: content.introduction,
        skills: ['Python', 'Java', 'Springboot', 'AWS', 'Azure', 'Github Actions', 'Terraform', 'Docker'],
        team: 'Landing Zone',
        time: '2023 - 2024',
        title: 'Software Engineer',
    },
    {
        company: 'Kent Corporation',
        description: content.introduction,
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
];
