import { Component, OnInit } from '@angular/core';
import { People } from '../interface/people.interface';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  nama: string 
  umur : number ;
  arrayNama: string[] = ["test1","test2"]

  people : People[]= [
    {
      nama: 'kevin',
      umur: 18
    },
    {
      nama: 'ronald',
      umur: 19
    }
  ]

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
    
  }

  async showToast():Promise<void>{
    const toast = await this.toastCtrl.create({
      message: "ini adalah notifokasi",
      duration: 3000,
      position: 'middle'
    })
    toast.present()
  }

  tambah(){
    console.log(this.nama, this.umur);
    const orang : People = { nama: this.nama, umur: this.umur};
    this.people.push(orang);
    this.nama="";
    this.umur=0;

  }

}
