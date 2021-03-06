import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { TokenStorageService } from '../services/token.service';
import { tap, map } from 'rxjs/operators';
import { ToasterService } from '../services/toaster.service';
import { Router } from '@angular/router';


/*
    This interceptor intercepts all HTTP requests received.
*/
@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

    constructor(private tokenStorageService: TokenStorageService, 
        private toasterService: ToasterService, private route: Router) {}

    /*
        Get token from TokenSTorageService and add this token to the authorization header of the HTTP request.
    */
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        /*
            When an response with an invalid/expired token is received, the user is
            immediately logged out from th application.
        */
        tap(
            (event: HttpEvent<any>) => { 
                if(event instanceof HttpResponse) {
                    //console.log("Valid request received!");
                } 
            },
            (err: any) => {  
                if(err instanceof HttpErrorResponse) {
                    if(err.status === 401){ // Error 401 = Unauthorized access
                        // If received Unauthorized access, then redirect to login page
                        this.toasterService.info("Unauthorized access. Please, login to continue.");
                        this.route.navigate(['login']);
                    }
                }
        })
        return next.handle(req);
    }
}
