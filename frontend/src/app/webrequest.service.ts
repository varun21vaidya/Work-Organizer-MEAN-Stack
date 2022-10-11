import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class WebrequestService {
  readonly ROOT;
  constructor(private http: HttpClient) {
    this.ROOT = 'http://localhost:3000';
  }

  get(url: string) {
    return this.http.get(`${this.ROOT}/${url}`);
  }

  post(url: string, payload: Object) {
    return this.http.post(`${this.ROOT}/${url}`, payload);
  }
  put(url: string, payload: Object) {
    return this.http.put(`${this.ROOT}/${url}`, payload);
  }
  delete(url: string) {
    return this.http.delete(`${this.ROOT}/${url}`);
  }
}
