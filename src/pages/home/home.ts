import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormGroup, FormControl } from '@angular/forms';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

//Services
import { ServicesLoginProvider } from '../../providers/services-login/services-login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loginForm:FormGroup;

  usuarios = [];

  islogin:boolean = false;

  constructor(
    public navCtrl: NavController,
    public _login:ServicesLoginProvider
  ) {
    this.loginForm = new FormGroup ({
        user: new FormControl(),
        pass: new FormControl(),
    });
  }

  login(){
    console.log(this.loginForm)
    console.log(this.loginForm.value.user);
    console.log(this.loginForm.value.pass);

    let userLogin = this.loginForm.value.user;
    let passLogin = this.loginForm.value.pass;
    this._login.login()
    .then(data => {
      this.usuarios.push(data);
      console.log(this.usuarios);


      for(let user of this.usuarios[0]){
        //console.log(user.dni)
        if(user.id == userLogin && user.Pass == passLogin){
          console.log("hubo Login")
          let userData = {
            id: user.id,
            pass: user.Pass,
            nombre: user.nombre
          }
          localStorage.setItem('userData', JSON.stringify(userData));

          // if(user.dni == user.pass){
          //   "Es primer login"
          //   this.navCtrl.push(AboutPage)
          //   return this.islogin = false;
          // }else{
          //   console.log("Ya tiene clave nueva");
          //   this.navCtrl.push(ContactPage)
          //   return this.islogin = false;
          // }

          this.navCtrl.push(ContactPage)
          return this.islogin = false;

        }else{
          console.log("no hay login")
          this.islogin = true;
        }
      }

      return this.islogin;
    });
  }

}
