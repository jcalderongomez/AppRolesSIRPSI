import { Injectable } from '@angular/core';
import { Empleado, IEmpleado } from '../Intefaces/IEmpleado';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private endPoint:string= environment.endPoint;
  private apiUrl: string = this.endPoint+ "Empleado"

  resultados:  Empleado[] = [];
  
  constructor(private http:HttpClient) { }

  getEmpleados():Observable<IEmpleado>
  {
    console.log(this.apiUrl);
    return this.http.get<IEmpleado>(`${this.apiUrl}`)
  }
  
  add(modelo:IEmpleado):Observable<IEmpleado>{
    alert(JSON.stringify(modelo));
    return this.http.post<IEmpleado>(`${this.apiUrl}`,modelo);
  }

  update(EmpleadoId:number, modelo:Empleado):Observable<IEmpleado>{
    return this.http.put<IEmpleado>(`${this.apiUrl}/${EmpleadoId}`,modelo);
  }

  delete(EmpleadoId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${EmpleadoId}`);
  }

}
