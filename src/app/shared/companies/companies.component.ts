import { Component } from '@angular/core';
import { Company } from 'src/app/core/companies';
import { MatDialog } from '@angular/material/dialog';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent {

  // Static company data
  companies: Company[] = [
    {
      heading: 'Morris Cerullo World Evangelism',
      description: 'MCWE is a Ministry Located in San Diego. While I\'m here I am creating amazing applications,' +
      ' databases and stunning APIs for our interactive museum.',
      tech: 'Goang, Angular, TypeScript, JQuery, Kubernetes',
      siteLogo: '/assets/mcwe.png',
      websiteLink: ''
    },
    {
      heading: 'Edgewave',
      description: 'Edgewave is a cyber security company based in San Diego. During my tenure here, I Improved internal' +
      ' tooling and workflow for security analyst while creating beautiful data sets and analyzing attack vectors',
      tech: 'Python, Flask, Pandas, PostgreSQL',
      siteLogo: '/assets/edgewave.png',
      websiteLink: 'https://www.edgewave.com/'
    },
    {
      heading: 'Vien Dong',
      description: 'Vien Dong is a supermarket chain in San Diego. Here I created productive automation tools and scripts' +
      ' for efficient invoicing and stock updates whilist providing support for our Point of Sale systems',
      tech: 'Python, mySQL, Windows 7 & 10, MacOS',
      siteLogo: '/assets/vien-dong.png',
      websiteLink: 'https://www.worldfoodsmkt.com/'
    },
    {
      heading: 'Sanchez Computer Technologies',
      description: 'Sanchez Computer Tech is a small mom and pop shop located in San Diego. I was able to build my foundations of customer service' +
      ' and provide content and work based on clients feedback.',
      tech: 'Wordpress, Angular, HTML, CSS, Bootstrap',
      siteLogo: '/assets/sanchez.png',
      websiteLink: 'https://sanchez-tech.firebaseapp.com/'
    }
  ];

  constructor(
    public dialog: MatDialog
  ) { }

  // showCarousel opens carousel component displays projects using bootstrap carousel
  showCarousel(company: Company): void {
    if (company.heading === 'Morris Cerullo World Evangelism') {
      this.dialog.open(CarouselComponent, {
        disableClose: false,
        panelClass: 'transparent-dialog'
      });
    } else {
      window.open(company.websiteLink);
    }
  }
}
