import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { tema } from '../model/tema';

@Injectable({
  providedIn: 'root'
})
export class temaService {

  constructor(private http: HttpClient) { }

    token = {
    headers: new HttpHeaders().set('authorization', environment.token)
  }

  getAllTema(): Observable<tema[]>{
    return this.http.get<tema[]>('https://bpdarafa.herokuapp.com/tema', this.token)
  }

  getByIdTema(id: number): Observable<tema>{
    return this.http.get<tema>(`https://bpdarafa.herokuapp.com/tema/${id}`, this.token)
  }

  postTema(tema: tema): Observable<tema>{
    return this.http.post<tema>('https://bpdarafa.herokuapp.com/tema',tema, this.token)
  }

  putTema(tema: tema): Observable<tema>{
    return this.http.put<tema>('https://bpdarafa.herokuapp.com/tema', tema, this.token)
  }

  deleteTema(id: number){
    return this.http.delete(`https://bpdarafa.herokuapp.com/tema/${id}`, this.token)
  }

}
