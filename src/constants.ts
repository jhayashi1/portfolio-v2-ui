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
