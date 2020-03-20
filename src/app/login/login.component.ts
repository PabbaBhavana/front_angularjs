import { MyserviceService } from './../myservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   public login:any;
  constructor(private service:MyserviceService ,private router:Router) {
    this.login={
      username:null,
      password:null
    }
  }
ngOnInit():void{
  }
userlogin(){

  this.service.loginuser(this.login)
  .subscribe(data=>{
    console.log(data);
    if( data.success==200){
      this.router.navigate(['/userdata']);
    } else {
    console.log("error in login");
    }
  });
}
}

