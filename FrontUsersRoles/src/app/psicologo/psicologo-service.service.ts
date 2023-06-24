import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPsicologo, Psicologo } from '../Intefaces/IPsicologo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PsicologoServiceService {
  private endPoint:string= environment.endPoint;
  private apiUrl: string = this.endPoint+ "Psicologo"

  resultados:  Psicologo[] = [];
  
  constructor(private http:HttpClient) { }

  getPsicologos():Observable<IPsicologo>
  {
    console.log(this.apiUrl);
    return this.http.get<IPsicologo>(`${this.apiUrl}`)
  }
  
  add(modelo:IPsicologo):Observable<IPsicologo>{
    return this.http.post<IPsicologo>(`${this.apiUrl}`,modelo);
  }

  update(PsicologoId:number, psicologo:Psicologo):Observable<IPsicologo>{
    console.log(psicologo);
    return this.http.put<IPsicologo>(`${this.apiUrl}/${PsicologoId}`,psicologo);
  }

  delete(PsicologoId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${PsicologoId}`);
  }

}
