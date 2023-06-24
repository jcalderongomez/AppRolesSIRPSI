import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ICentroApoyo, CentroApoyo } from '../Intefaces/ICentroApoyo'; 

@Injectable({
  providedIn: 'root'
})
export class CentroService {
  private endPoint:string= environment.endPoint;
  private apiUrl: string = this.endPoint+ "CentroApoyo"

  resultados:  CentroApoyo[] = [];
  
  constructor(private http:HttpClient) { }

  getCentrosApoyo():Observable<ICentroApoyo>
  {
    console.log(this.apiUrl);
    return this.http.get<ICentroApoyo>(`${this.apiUrl}`)
  }
  
  add(centroApoyo:ICentroApoyo):Observable<ICentroApoyo>{
    return this.http.post<ICentroApoyo>(`${this.apiUrl}`,centroApoyo);
  }

  update(CentroApoyoId:number, modelo:CentroApoyo):Observable<ICentroApoyo>{
    return this.http.put<ICentroApoyo>(`${this.apiUrl}/${CentroApoyoId}`,modelo);
  }

  delete(CentroApoyoId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${CentroApoyoId}`);
  }

}
