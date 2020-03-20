import { MyserviceService } from './../myservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
public list=[];
  constructor(private service:MyserviceService) { }

  ngOnInit(): void {
    this.service.getdetails().subscribe(data=>this.list=data);
  }

}
