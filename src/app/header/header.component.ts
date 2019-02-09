import { Component, OnInit } from '@angular/core';

import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { TokenStorageService } from '../shared/services/token.service';
import { ToasterService } from '../shared/services/toaster.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faLaptop = faLaptop;
  authority: string = '';
  lastActiveElement: any = '';

  constructor(private router: Router, private tokenStorageService: TokenStorageService, 
    private toasterService: ToasterService) { }

  ngOnInit() {
    this.updateNavigation();
      this.tokenStorageService.getTheBoolean().subscribe(
          value => { 
              this.updateNavigation() 
          }
      );
  }

  updateNavigation(){
    this.authority = null;
    // get authority from using auth service
    console.log("Updating navigaation component")
    let roles = this.tokenStorageService.getAuthorities();
    console.log(roles);
    roles.every(role => {
        this.authority = role;
        console.log(this.authority)
        if(role === 'ROLE_ADMIN'){
            return false
        }
        return true; // continue iterating the role vector
    });
  }

  setActive(event: any){
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    event.currentTarget.className = "nav-item active"
  }

  logout(){
    this.tokenStorageService.signOut();
    //window.location.reload();
    this.toasterService.success("You have been logged out successfully.", true);
    this.router.navigate(['']);
  }

  getLocationPath(){
    return "/";
  }

}
