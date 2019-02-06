import { Component, OnInit } from '@angular/core';

import { faLaptop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faLaptop = faLaptop;
  authority: string = 'ROLE_USER';
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

  getLocationPath(){
    return "/";
  }

  // private authority: string;

  // constructor(private tokenStorageService: TokenStorageService, private router: Router, 
  //     location: Location, private toasterService: ToasterService) {};

  // getLOcationPath(){
  //     return location.pathname;
  // }

  // ngOnInit() {
  //     this.updateNavigation();
  //     this.tokenStorageService.getTheBoolean().subscribe(
  //         value => { 
  //             this.updateNavigation() 
  //         }
  //     );
  // }

  // updateNavigation(){
  //     this.authority = null;
  //     // get authority from using auth service
  //     console.log("Updating navigaation component")
  //     let roles = this.tokenStorageService.getAuthorities();
  //     console.log(roles);
  //     roles.every(role => {
  //         this.authority = role;
  //         console.log(this.authority)
  //         if(role === 'ROLE_ADMIN'){
  //             return false
  //         }
  //         return true; // continue iterating the role vector
  //     });
  // }

  // logout() {
  //     this.tokenStorageService.signOut();
  //     //window.location.reload();
  //     this.toasterService.success("You have been logged out successfully.", true);
  //     this.router.navigate(['']);
  // }


}
