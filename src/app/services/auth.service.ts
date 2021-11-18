import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import jwt_decode  from 'jwt-decode';
import {Injectable}  from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlApi = environment.serviceApi;
  private decodedToken:any ;

  constructor(private http: HttpClient) { }

  login (user:any)
  {
    return this.http.post(`${this.urlApi}login`, user)
  }


    getUserByEmail(username: any):Observable<any[]> {
       return this.http.get<any>(`${this.urlApi}user/${username}`)
    }

    decodeToken(token: string): string {
        return jwt_decode(token);
    }

    getRole(token: string): string {
        this.decodedToken = jwt_decode(token);
        return  this.decodedToken.roles;
    }

    getUsername(token: string): string {
        this.decodedToken = jwt_decode(token);
        return  this.decodedToken.username;
    }

    getExpiryTime(token: string): any {
        this.decodedToken = jwt_decode(token);
        return  this.decodedToken.exp;
    }

    getDecodedToken(token: string): any {
        this.decodedToken = jwt_decode(token);
        return  this.decodedToken;
    }

    getToken()
    {
        // modify variable localStorage and add token
        return localStorage.getItem('token');
    }

    logout()
    {
        // clear localStoragetoken
        return localStorage.clear();
    }


}
