import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRol, Rol } from '../Intefaces/IRol';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolServiceService {
  private endPoint:string= environment.endPoint;
  private apiUrl: string = this.endPoint+ "Rol"

  resultados:  Rol[] = [];
  
  constructor(private http:HttpClient) { }

  getRoles():Observable<IRol>
  {
    console.log(this.apiUrl);
    return this.http.get<IRol>(`${this.apiUrl}`)
  }
  
  add(rol: Rol){
    
    return this.http.post(`${this.apiUrl}`,rol);
  }

  update(id:number, rol: Rol){
    return this.http.put(this.apiUrl+"/"+id, rol);
  }

  delete(rolId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${rolId}`);
  }

}
