import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuperviseurService {

    private urlApi = environment.serviceApi;
  constructor(private http : HttpClient) { }


  addSuperviseur(data: any) {
    return this.http.post(`${this.urlApi}superviseur`, data)
  }


  getSuperviseurs(): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.urlApi}superviseur`)
  }

  // bloquerEtudiant(ine: any) {
  //   return this.http.delete<any[]>(`${this.urlApi}superviseur/${ine}/bloque`)
  // }

  // debloquerEtudiant(ine: any) {
  //   return this.http.delete<any[]>(`${this.urlApi}superviseur/${ine}/debloque`)
  // }

  // updateVehicle(ine: any, data: any) {
  //   return this.http.put(`${this.urlApi}etudiant/${ine}/edit`, data)
  // }
}
