
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
    description: 'Angular description here',
    techLogo: 'assets/dev-icons/angular.png'
  },
  {
    techName: 'React',
    description: 'React description here',
    techLogo: 'assets/dev-icons/react.png'
  },
  {
    techName: 'Typescript',
    description: 'Typescript description here',
    techLogo: 'assets/dev-icons/typescript.png'
  },
  {
    techName: 'Javascript',
    description: 'Javascript description here',
    techLogo: 'assets/dev-icons/javascript.png'
  },
  {
    techName: 'HTML and CSS',
    description: 'HTMLCSS description here',
    techLogo: 'assets/dev-icons/htmlcss.png'
  },
  {
    techName: 'Bootstrap',
    description: 'Bootstrap description here',
    techLogo: 'assets/dev-icons/bootstrap.png'
  }
];

// Backend objects for gridlist view
export const backendTech: Technolgy[] = [
  {
    techName: 'NodeJS',
    description: 'NodeJS description here',
    techLogo: 'assets/dev-icons/nodejs.svg'
  },
  {
    techName: 'Golang',
    description: 'Golang description here',
    techLogo: 'assets/dev-icons/golang.png'
  },
  {
    techName: 'PostgreSQL',
    description: 'postgresql description here',
    techLogo: 'assets/dev-icons/postgresql.png'
  },
  {
    techName: 'MySQL',
    description: 'mysql description here',
    techLogo: 'assets/dev-icons/mysql.png'
  },
  {
    techName: 'Docker',
    description: 'Docker description here',
    techLogo: 'assets/dev-icons/docker.png'
  },
  {
    techName: 'Kubernetes',
    description: 'Kubernetes description here',
    techLogo: 'assets/dev-icons/kubernetes.png'
  },
];
