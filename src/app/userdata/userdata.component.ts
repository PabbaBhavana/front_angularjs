import { MyserviceService } from './../myservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
userdata=[];
  constructor(private service:MyserviceService,private router:Router) { }

  ngOnInit():void{
    this.service.getdetails().subscribe(data=>this.userdata=data);
  
}
edituser(id){
  this.router.navigate(['/edituser',id]);
}
}
