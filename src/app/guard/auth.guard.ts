import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private cookieService: CookieService ) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    // ログインしていない場合ログイン画面へ飛ばす
    if (!this.getSession()) {
      let loginUrl = environment.loginUrl + '/login';
      window.location.href = loginUrl;
      return false;
    }
    return true;
  }

  getSession() {
    let cookieValue = this.cookieService.get('api_session_key');
    if(cookieValue !== ""){
      return true 
    }
    return false 
  }
}