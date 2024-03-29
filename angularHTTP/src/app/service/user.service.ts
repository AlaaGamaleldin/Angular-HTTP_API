import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {} 
    getUsers(): Observable<User[]> {
      let myParam = new HttpParams().set('page', '5').set('sort', 'true');
      myParam = myParam.append('name', 'Alaa')

      return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`, {params: myParam});
    }
  
  getUser(): Observable<User> {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/1`);
  }
  creatUser(user: User): Observable<User> {
    return this.http.post<User>(`https://jsonplaceholder.typicode.com/users`, user);
  }
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
  }
  patchUser(user: User): Observable<User> {
    return this.http.patch<User>(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
  }
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}



