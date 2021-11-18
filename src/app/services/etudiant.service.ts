import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private urlApi = environment.serviceApi;
  constructor(private http : HttpClient) { }


  addEtudiant(data: any) {
    return this.http.post(`${this.urlApi}etudiant`, data)

  }


  getEtudiants(): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.urlApi}etudiant`)
  }


  bloquerEtudiant(ine: any) {
    return this.http.delete<any[]>(`${this.urlApi}etudiant/${ine}/bloque`)
  }

  debloquerEtudiant(ine: any) {
    return this.http.delete<any[]>(`${this.urlApi}etudiant/${ine}/debloque`)
  }

  updateEtudiant(ine: any, data: any) {
    return this.http.put(`${this.urlApi}etudiant/${ine}/edit`, data)
  }

}
