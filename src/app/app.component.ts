import { UserService } from './service/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'ngrxServer';

  constructor(private UserService: UserService){}

  user$: any = new Observable<Object>
  id: string = '';
  name: string = '';
  age: string = '';

  // ngOnInit(): void{

  //   this.user$ = this.UserService.getAll();


  // }

  getAll()
  {
    this.user$ = this.UserService.getAll();
  }

  getCreate()
  {
    this.UserService.getCreateUser({
      id: this.id,
      name: this.name,
      age: this.age
    })
    this.id = '';
    this.name = '';
    this.age = '';
  }
}
