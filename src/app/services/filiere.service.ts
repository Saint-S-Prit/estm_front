import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  private urlApi = environment.serviceApi;
   constructor(private http: HttpClient) { }

  addFiliere(data:any)
  {
    return this.http.post(`${this.urlApi}filiere`, data)
  }

  getFilieres()
  {
    return this.http.get(`${this.urlApi}filiere`)
  }
}
