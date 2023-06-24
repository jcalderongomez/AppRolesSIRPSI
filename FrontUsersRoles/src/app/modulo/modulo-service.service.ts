import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IModulo, Modulo } from '../Intefaces/IModulo'; 
@Injectable({
  providedIn: 'root'
})
export class ModuloServiceService {
  private endPoint:string= environment.endPoint;
  private apiUrl: string = this.endPoint+ "Modulo"

  resultados:  Modulo[] = [];
  
  constructor(private http:HttpClient) { }

  getModulos():Observable<IModulo>
  {
    console.log(this.apiUrl);
    return this.http.get<IModulo>(`${this.apiUrl}`)
  }
  
  add(modelo:IModulo):Observable<IModulo>{
    return this.http.post<IModulo>(`${this.apiUrl}`,modelo);
  }

  update(ModuloId:number, modelo:Modulo):Observable<IModulo>{
    return this.http.put<IModulo>(`${this.apiUrl}/${ModuloId}`,modelo);
  }

  delete(ModuloId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${ModuloId}`);
  }

}
