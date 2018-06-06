import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ServicesLoginProvider } from '../../providers/services-login/services-login';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  pet: string = "pagos";
  id:string;
  nombre:string;
  datosPagos = []
  datosNotas = []

  constructor(
    public navCtrl: NavController,
    private _login:ServicesLoginProvider
  ) {
    let dataStorage =  JSON.parse(localStorage.getItem('userData'))
    this.id = dataStorage.id;
    this.nombre = dataStorage.nombre;
    console.log(this.id);

    this._login.getPagos(this.id)
        .subscribe((resp:any)=>{
          console.log(resp);
          this.datosPagos = resp;
          console.log(this.datosPagos)
        })

    this._login.getNotas(this.id)
        .subscribe((resp:any)=>{
          console.log(resp);
          this.datosNotas = resp;
          console.log(this.datosNotas)
        })
  }

}
