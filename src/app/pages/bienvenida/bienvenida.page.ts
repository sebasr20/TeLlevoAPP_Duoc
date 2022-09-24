import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {
  
  datos: any;
  constructor(
    public route:ActivatedRoute) { 
      this.datos = JSON.parse(this.route.snapshot.paramMap.get('Object'));
    }

  ngOnInit() {
  }


}
