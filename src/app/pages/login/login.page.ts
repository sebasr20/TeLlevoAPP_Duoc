import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email: string;
  public password: string; 

  
  constructor(
    private nav: NavController
  ) { }

  irABienvenida() {
    let d={ 
      'email': this.email,
    }

    let humanStringify = JSON.stringify(d);
    this.nav.navigateForward('bienvenida/'+humanStringify);
  }

  ngOnInit() {
  }

}


