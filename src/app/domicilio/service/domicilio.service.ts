import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDomicilio } from '../interfaces/domicilio.interface';
import  {environment} from '../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class DomicilioService {

  API_URL:string = environment.apiURL;

  constructor( private readonly htttpClient: HttpClient) { }

  getDomicilios():Observable<IDomicilio[]>{
    return this.htttpClient.get<IDomicilio[]>(`${this.API_URL}/domicilio`);
  }

  getDomiciliosById(domicilioId:number):Observable<IDomicilio>{
    return this.htttpClient.get<IDomicilio>(`${this.API_URL}/domicilio/${domicilioId}`);
  }

  createDomicilio(product:IDomicilio):Observable<IDomicilio>{
    return this.htttpClient.post<IDomicilio>(`${this.API_URL}/domicilio/create`, product);
  }

  updateDomicilio(domicilioId:number, product:IDomicilio):Observable<IDomicilio>{
    return this.htttpClient.put<IDomicilio>(`${this.API_URL}/domicilio/update/${domicilioId}`, product);
  }

  deleteDomicilio(domicilioId:number):Observable<IDomicilio>{
    return this.htttpClient.delete<IDomicilio>(`${this.API_URL}/domicilio/delete/${domicilioId}`);
  }
}
