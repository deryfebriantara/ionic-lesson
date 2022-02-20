import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Accesstoken} from '../interface/accesstoken.interface';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  username: string;
  password: string;
  constructor(
    private loginService : LoginService,
    private router: Router,
    private navContrl: NavController,
    private toastCtrl : ToastController
  ) { }

  ngOnInit() {
  }

  submit():void{
    console.log(this.username +"  "+ this.password)

    this.loginService.login(this.username, this.password)
    .subscribe((value : Accesstoken) =>{
      
      if(value.access_token){
        this.navContrl.navigateRoot(["/home"])
      }
    },error=>{
      this.warning()
    })

  }

  async warning(){
    const toast = await this.toastCtrl.create({
      message: "Password atau Username Salah",
      duration: 30000,
      position: 'top'
    })
    toast.present()
  }


}
