import { Component, OnInit } from '@angular/core';

import { faBlog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faBlog = faBlog;

  lastActiveElement: any = null;

  constructor() { }

  ngOnInit() {

  }

  setActive(event: any){
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    event.currentTarget.className = "nav-item active"
  }

  logout(){
    console.log("logout")
  }

}
