import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IEmpresa, Empresa } from '../Intefaces/IEmpresa'; 

@Injectable({
  providedIn: 'root'
})
export class EmpresaServiceService {
  private endPoint:string= environment.endPoint;
  private apiUrl: string = this.endPoint+ "Empresa"

  resultados:  Empresa[] = [];
  
  constructor(private http:HttpClient) { }

  getEmpresas():Observable<IEmpresa>
  {
    console.log(this.apiUrl);
    return this.http.get<IEmpresa>(`${this.apiUrl}`)
  }
  
  add(empresa:Empresa){
    console.log("Datos que llegan de empresa "+ empresa);
    return this.http.post<IEmpresa>(this.apiUrl,empresa);
  }

  update(empresaId:number, empresa:Empresa){
    console.log("Datos que llegan de empresa "+ empresa);

    return this.http.put( this.apiUrl+"/"+empresaId, empresa );
  }

  delete(empresaId:number):Observable<void>{
    console.log("id a borrar: "+ empresaId);
    return this.http.delete<void>(`${this.apiUrl}/${empresaId}`);
  }

}
