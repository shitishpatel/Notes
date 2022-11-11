import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // deleteData(id: any) {
  //   throw new Error('Method not implemented.');
  // }
  // getAllData() {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private http:HttpClient) { }

  apiUrl='http://localhost:8000/auth/users';

  signup(data: any):Observable<any>  {
    return this.http.post('http://localhost:8000/auth/signup', data );
  }

  signin(data:any):Observable<any>{
    return this.http.post('http://localhost:8000/auth/login',data);
  }

  getProfile():Observable<any>{
    let headers={
      'Authorization': "Bearer "+ localStorage.getItem('token')
    }
    return this.http.get('http://localhost:8000/auth/profile', {headers: headers})
  }




  getAllData():Observable <any>{
    return this.http.get(`${this.apiUrl}`);
  }

  createData(data:any):Observable<any>{
    console.log(data,'craeteapi');
    return this.http.post(`${this.apiUrl}`,data);
  }

  deleteData(id:any):Observable<any>{
    let ids=id;
    return this.http.delete(`${this.apiUrl}/${ids}`);

  }

  updateData(data:any,id:any):Observable<any>{
    let ids=id;
    return this.http.put(`${this.apiUrl}/${ids}`,data);
  }

  getSingleData(id:any):Observable<any>{
    let ids =id;
    return this.http.get(`${this.apiUrl}/${ids}`);
  }

}
