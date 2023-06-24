import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPermiso, Permiso } from '../Intefaces/IPermiso';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermisoServiceService {
  private endPoint:string= environment.endPoint;
  private apiUrl: string = this.endPoint+ "Permiso"

  resultados:  Permiso[] = [];
  
  constructor(private http:HttpClient) { }

  getPermisos():Observable<IPermiso>
  {
    console.log(this.apiUrl);
    return this.http.get<IPermiso>(`${this.apiUrl}`)
  }
  
  add(modelo:IPermiso):Observable<IPermiso>{
    return this.http.post<IPermiso>(`${this.apiUrl}`,modelo);
  }

  update(PermisoId:number, modelo:Permiso):Observable<IPermiso>{
    return this.http.put<IPermiso>(`${this.apiUrl}/${PermisoId}`,modelo);
  }

  delete(PermisoId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${PermisoId}`);
  }

}
