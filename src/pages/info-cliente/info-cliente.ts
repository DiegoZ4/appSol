import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesLoginProvider } from '../../providers/services-login/services-login';

/**
 * Generated class for the InfoClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-cliente',
  templateUrl: 'info-cliente.html',
})
export class InfoClientePage {
  pet: string = "pagos";

  id = 0;
  ventas = [];
  suma = 0;
  cliente:string;

  comprados = [];
  noComprados = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _login:ServicesLoginProvider
  ) {
    console.log( this.navParams.get('id'));
    this.id = this.navParams.get('id');

    this._login.getProveedores()
        .subscribe( (resp3:any)=>{
          console.log(resp3)
          for(let proveedor of resp3) {
            this.noComprados.push({
              id:proveedor.codigo,
              cant:null,
              nombre:proveedor.razon
            })
          }

          console.log(this.noComprados)
        })

    this._login.getCliente(this.id)
        .subscribe( (resp:any)=>{
          console.log(resp[0].razon)
          this.cliente = resp[0].razon;
        })

    this._login.getNotas(this.id)
        .subscribe( (resp:any)=>{
          this.ventas = resp;
          for (let venta of this.ventas) {
            // console.log(venta.codmov)
            // console.log(parseInt(venta.codmov))

            parseInt(venta.codmov) > 6 ? this.suma = this.suma + parseInt(venta.importe) + 1000 : this.suma = this.suma + parseInt(venta.importe) - 1000;
          }
        })

        this._login.getProveedoresComprados(this.id)
            .subscribe( (resp:any)=>{
              console.log(resp);


              console.log(resp.length);

              if(resp.length > 0){
                for (var i = 1; i < 51; i ++) {

                  let proveedor_id = resp[0]["PROVE"+i];
                  let proveedor_cant = resp[0]["COMPR"+i];
                  let proveedor_name:string;

                  if(resp[0]["PROVE"+i] != 0){

                    this._login.getProveedor(resp[0]["PROVE"+i])
                        .subscribe( (resp2:any)=>{
                          console.log(resp2);

                          console.log(resp2.length);
                          resp2.length ? proveedor_name = resp2[0].razon : proveedor_name = "Sin definir";

                          this.comprados.push({
                            id:proveedor_id,
                            cant:proveedor_cant,
                            nombre:proveedor_name
                          })

                        })

                        let index = this.noComprados.findIndex(x => x.id === proveedor_id);

                        if (index > -1) {
                          this.noComprados.splice(index, 1);
                        }

                  }
                }
              }else{
                console.log("La query de comprados viene vacia");
                this.comprados.push({
                  id:null,
                  cant:null,
                  nombre:'No se encuentra registros'
                })

              }
            })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoClientePage');
  }

}
