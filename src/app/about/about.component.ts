import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit() {
    this.user = { 
      email: "jovanibrasil.com", 
      gitHubUserName: "jovanibrasil", 
      fullName: "Jovani Brasil", 
      googleScholarUrl: "https://scholar.google.com.br/citations?user=nQYs1z4AAAAJ&hl=en", 
      lattesUrl: "http://lattes.cnpq.br/3411257639128251", 
      linkedInUserName: "jovanibrasil",  phone: null, userName: "jovanibrasil" 
    } 
  }

}
