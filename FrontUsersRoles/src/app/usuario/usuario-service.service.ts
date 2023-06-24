import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IUsuario, Usuario } from '../Intefaces/IUsuario'; 


@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  private endPoint:string= environment.endPoint;
  private apiUrl: string = this.endPoint+ "Usuario"

  resultados:  Usuario[] = [];
  
  constructor(private http:HttpClient) { }

  getUsuarios():Observable<IUsuario>
  {
    console.log(this.apiUrl);
    return this.http.get<IUsuario>(`${this.apiUrl}`)
  }
  
  add(usuario:Usuario){
    alert(JSON.stringify(usuario));
    return this.http.post(this.apiUrl,usuario);
  }
  

  update(UsuarioId:number, usuario:Usuario):Observable<IUsuario>{
    alert(JSON.stringify(usuario));
    return this.http.put<IUsuario>(this.apiUrl+"/"+UsuarioId,usuario);
  }

  delete(UsuarioId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${UsuarioId}`);
  }

}
