
// Data model for Technolgies to display on grid list
export interface Technolgy {
  techName: string;
  description: string;
  techLogo: string;
}

// TODO: Host Database & backend to send API to front-end
// Two tables, for Companies & technolgies

// frontend objects for gridlist view
export const webTech: Technolgy[] = [
  {
    techName: 'Angular',
    description: 'is a front end javascript framework that provides the developer' +
    'with the whole package out of the box. Routing, Testing, Modules, CLI, and Animations.',
    techLogo: 'assets/dev-icons/angular.png'
  },
  {
    techName: 'React',
    description: 'is a front end javascript framework often referenced as a "view library"' +
    'a bit different from angular, React does not come with many things included. Both have their' +
    'use cases and flexibility for each team.',
    techLogo: 'assets/dev-icons/react.png'
  },
  {
    techName: 'Typescript',
    description: 'is a superset of Javascript. Typescript provides a way to describe the shape' +
    'of an object. Typescript provides type safe checking easing development time in the long run.' +
    'This website you\'re looking at right now is created in Typescript!',
    techLogo: 'assets/dev-icons/typescript.png'
  },
  {
    techName: 'Javascript',
    description: 'probably needs no introduction. However Javascript is a scripting language' +
    'that allows you to implement complex features on web pages.',
    techLogo: 'assets/dev-icons/javascript.png'
  },
  {
    techName: 'HTML and CSS',
    description: 'are brothers that work together Hypertext Markup Language and Cascading style sheets' +
    'HTML is markup for the browser and CSS provides the styling for your markup.',
    techLogo: 'assets/dev-icons/htmlcss.png'
  },
  {
    techName: 'Bootstrap',
    description: 'is a free and open source CSS framework dictated at a mobile first approach.',
    techLogo: 'assets/dev-icons/bootstrap.png'
  }
];

// Backend objects for gridlist view
export const backendTech: Technolgy[] = [
  {
    techName: 'NodeJS',
    description: 'is an asynchronous Javascript runtime, designed to build scalable network applications.' +
    'NodeJS is paired well for a backend framework such as ExpressJS.',
    techLogo: 'assets/dev-icons/nodejs.svg'
  },
  {
    techName: 'Golang',
    description: 'is an open source language focused around simplicity and concurrency. Golang can be used for things such as' +
    'Cloud API Services, Frameworks for web applications, networking, and distributed functions.',
    techLogo: 'assets/dev-icons/golang.png'
  },
  {
    techName: 'PostgreSQL',
    description: 'is a flavor of database is a free and open source relational database management system.',
    techLogo: 'assets/dev-icons/postgresql.png'
  },
  {
    techName: 'MySQL',
    description: 'is a flavor of database service, it is a relational database management system.',
    techLogo: 'assets/dev-icons/mysql.png'
  },
  {
    techName: 'Docker',
    description: 'is Amazing! Instead of spinning up a virtual machine for everything and wasting resources.' +
    'Docker\'s aim is to put all your apps on a container and use only the resources it needs to run them it is one' +
    'of the key factors of microservices and cloud computing today.',
    techLogo: 'assets/dev-icons/docker.png'
  },
  {
    techName: 'Kubernetes',
    description: 'is an open source container orchestration system for automating deployment of containers.' +
    'Kubernetes will automatically be able to redeploy, scale resources, manage resources and much more.',
    techLogo: 'assets/dev-icons/kubernetes.png'
  },
];
