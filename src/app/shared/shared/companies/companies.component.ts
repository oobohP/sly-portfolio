import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/core/companies';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  // Static company data
  companies: Company[] = [
    {
      heading: 'Morris Cerullo World Evangelism',
      description: 'MCWE is a Ministry Located in San Diego. While I\'m here I am creating amazing applications,' +
      ' databases and stunning APIs for our interactive museum.',
      tech: 'Goang, Angular, TypeScript, JQuery, Kubernetes',
      siteLogo: '/assets/mcwe.png'
    },
    {
      heading: 'Edgewave',
      description: 'Edgewave is a cyber security company based in San Diego. During my tenure here, I Improved internal' +
      ' tooling and workflow for security analyst while creating beautiful data sets and analyzing attack vectors',
      tech: 'Python, Flask, Pandas, PostgreSQL',
      siteLogo: '/assets/edgewave.png'
    },
    {
      heading: 'Vien Dong',
      description: 'Vien Dong is a supermarket chain in San Diego. Here I created productive automation tools and scripts' +
      ' for efficient invoicing and stock updates whilist providing support for our Point of Sale systems',
      tech: 'Python, mySQL, Windows 7 & 10, MacOS',
      siteLogo: '/assets/vien-dong.png'
    },
    {
      heading: 'Sanchez Computer Technologies',
      description: 'Sanchez Computer Tech is a small mom and pop shop located in San Diego. I was able to build my foundations of customer service' +
      ' and provide content and work based on clients feedback.',
      tech: 'Wordpress, Angular, HTML, CSS, Bootstrap',
      siteLogo: '/assets/sanchez.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
