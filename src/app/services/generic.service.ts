import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  private _http = inject(HttpClient)
  constructor() { }

  get<T>(url: string, params?: HttpParams, headers?: HttpHeaders) {
    return this._http.get<T>(url, { params, headers });
  }

  post<T>(url: string, body: T, headers?: HttpHeaders) {
    return this._http.post<T>(url, body, { headers });
  }

  
  put<T>(url: string, body: T, headers?: HttpHeaders) {
    return this._http.put<T>(url, body, { headers });
  }

  
  delete<T>(url: string, params?: HttpParams, headers?: HttpHeaders) {
    return this._http.delete<T>(url, { params, headers });
  }

}
