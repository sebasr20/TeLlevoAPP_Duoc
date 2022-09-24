import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {
  
  nombreUsuario: string;
  constructor(
    private ds: DataService)
    {}

  ngOnInit() {
    this.ds.disparador.subscribe(info=>{
      console.log(info)
      this.nombreUsuario=info 
      console.log(this.nombreUsuario)
    })
    
  }


}
