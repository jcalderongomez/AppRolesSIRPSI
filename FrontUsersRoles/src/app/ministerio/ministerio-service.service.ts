import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IMinisterio, Ministerio } from '../Intefaces/IMinisterio'; 

@Injectable({
  providedIn: 'root'
})
export class MinisterioServiceService {
  private endPoint:string= environment.endPoint;
  private apiUrl: string = this.endPoint+ "Ministerio"

  resultados:  Ministerio[] = [];
  
  constructor(private http:HttpClient) { }

  getMinisterios():Observable<IMinisterio>
  {
    console.log(this.apiUrl);
    return this.http.get<IMinisterio>(`${this.apiUrl}`)
  }
  

  getMinisterios2():Observable<Ministerio[]>
  {
    console.log(this.apiUrl);
    return this.http.get<Ministerio[]>(`${this.apiUrl}`)
  }


  
  add(ministerio: Ministerio){
    return this.http.post(this.apiUrl,ministerio);
  }

  update(id:number, ministerio: Ministerio){
    alert(JSON.stringify(ministerio));
    return this.http.put(this.apiUrl+"/"+id, ministerio);
  }



  delete(MinisterioId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${MinisterioId}`);
  }

}
