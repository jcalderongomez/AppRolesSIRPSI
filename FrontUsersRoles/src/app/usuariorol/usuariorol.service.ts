import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUsuarioRol, UsuarioRol } from '../Intefaces/IUsuarioRol';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariorolService {
  private endPoint:string= environment.endPoint;
  private apiUrl: string = this.endPoint+ "UsuarioRol"

  resultados:  UsuarioRol[] = [];
  
  constructor(private http:HttpClient) { }

  getUsuariosRoles():Observable<IUsuarioRol>
  {
    console.log(this.apiUrl);
    return this.http.get<IUsuarioRol>(`${this.apiUrl}`)
  }
  
  add(usuarioRol: UsuarioRol){
    alert(JSON.stringify(usuarioRol));
    return this.http.post(`${this.apiUrl}`,usuarioRol);
  }

  update(id:number, usuarioRol: UsuarioRol){
    alert(JSON.stringify(usuarioRol))
    return this.http.put(this.apiUrl+"/"+id, usuarioRol);
  }

  delete(usuarioRolId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${usuarioRolId}`);
  }
}
