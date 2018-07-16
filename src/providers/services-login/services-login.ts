//import { HttpClient } from '@angular/common/http';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the ServicesLoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesLoginProvider {

  apiUrl = 'http://appsausol.com.ar.elserver.com/vendedores.php';
  apiUrlPass = 'http://appsausol.com.ar.elserver.com/saveNewPass.php';
  apiUrlPagos = 'http://appsausol.com.ar.elserver.com/getClientes.php';
  apiUrlNotas = 'http://appsausol.com.ar.elserver.com/getCuentas.php';
  apiUrlCliente = 'http://appsausol.com.ar.elserver.com/getCliente.php';
  apiUrlProveedor = 'http://appsausol.com.ar.elserver.com/getProveedor.php';
  apiUrlProveedores = 'http://appsausol.com.ar.elserver.com/getProveedores.php';
  apiUrlProveedoresComprados = 'http://appsausol.com.ar.elserver.com/getProveedoresComprados.php';

  constructor(public http: HttpClient) {
    console.log('Hello ServicesLoginProvider Provider');
  }


  login() {
    console.log("aca")
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        //console.log(data);
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  changePass(data){
    console.log(data)
    let body = JSON.stringify(data);
    console.log(body);

    let headers = new HttpHeaders({
       'Access-Control-Allow-Origin': '*',
       'Content-Type': 'application/json'
    });

    return this.http.post(this.apiUrlPass, data, { headers })
      .map(res => {
          return res;
        }, (err) => {
          console.log(err);
        });


  }

  getPagos(id){
    console.log(id)


    return this.http.get(this.apiUrlPagos+'?id='+id)
      .map(res => {
          return res;
        }, (err) => {
          console.log(err);
        });
  }

  getNotas(id){
    return this.http.get(this.apiUrlNotas+'?id='+id)
      .map(res => {
          return res;
        }, (err) => {
          console.log(err);
        });
  }

  getCliente(id){
    return this.http.get(this.apiUrlCliente+'?id='+id)
      .map(res => {
          return res;
        }, (err) => {
          console.log(err);
        });
  }

  getProveedor(id){
    return this.http.get(this.apiUrlProveedor+'?id='+id)
      .map(res => {
          return res;
        }, (err) => {
          console.log(err);
        });
  }

  getProveedores(){
    return this.http.get(this.apiUrlProveedores)
      .map(res => {
          return res;
        }, (err) => {
          console.log(err);
        });
  }

  getProveedoresComprados(id){
    return this.http.get(this.apiUrlProveedoresComprados+'?id='+id)
      .map(res => {
          return res;
        }, (err) => {
          console.log(err);
        });
  }

}
