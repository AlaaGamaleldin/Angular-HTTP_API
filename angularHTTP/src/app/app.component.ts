import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './interface/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularHTTP';
  private user: User = {
     'id': 1,
    'name': 'Alaa Graham',
    'username': 'Alaa',
    'email': 'alaa@april.biz',
    'address': {
      'street': 'Kulas Light',
      'suite': 'Apt. 556',
      'city': 'Gwenborough',
      'zipcode': '92998-3874',
      'geo': {
        'lat': '-37.3159',
        'lng': '81.1496'
      }
    },
    'phone': '01145091170',
    'website': 'hildegard.org',
    'company': {
      'name': 'Soudi',
      'catchPhrase': 'Multi-layered client-server neural-net',
      'bs': 'harness real-time e-markets'
    }
  }
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.onGetUsers();
    //this.onGetUser();
    //this.onCreatUser();
    //this.onUpdateUser();
    //this.onPatchUser();
    this.onDeleteUser();
  }
  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => console.table(response),
      (error: any) => console.log(error),
      () => console.log('Done getting users'),

    );
  }
  onGetUser(): void {
    this.userService.getUser().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done getting user'),

    );
  }
  onCreatUser(): void {
    this.userService.creatUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done creating user'),

    );
  }
  onUpdateUser(): void {
    this.userService.updateUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done updateing user'),

    );
  }
  onPatchUser(): void {
    this.userService.patchUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done patching user'),

    );
  }
  onDeleteUser(): void {
    this.userService.deleteUser(1).subscribe(
      (response) => console.log('Response from delete',response),
      (error:any) => console.log(error),
    () => console.log('Done deleteing user') 
    )
  }
}
