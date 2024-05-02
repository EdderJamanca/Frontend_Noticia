import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { RptNewAPI } from '../models/NewApi.interfaces';

const apinew=environment.urlNewApi;

@Injectable({
  providedIn: 'root'
})
export class NewApiService {

  constructor(
    private http:HttpClient
  ) { }

   getNoticias(palabraClave:string):Observable<RptNewAPI>
   {
      const url=`${apinew}=${palabraClave}&language=es&apiKey=e49db7002d114162b716e554eeeb5621`

      return this.http.get<RptNewAPI>(`${url}`)
   }
}
