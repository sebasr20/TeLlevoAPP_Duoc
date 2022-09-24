import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario ={
    email:'',
    password:''

  }
  constructor(
    private ds: DataService
  ) { }

  irABienvenida(){
    this.ds.disparador.emit(this.usuario.email)
  }

  ngOnInit() {
  }

}


