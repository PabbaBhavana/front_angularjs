import { MyserviceService } from './../myservice.service';
import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { Router,ParamMap,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
public id:number;

  constructor(private service:MyserviceService,private router:Router,private activatedRoute: ActivatedRoute) { }
  editform={
    name:String,
    gender:String
  };
  ngOnInit():void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id'));
      console.log(this.id);
    });
  this.service.getbyid(this.id).subscribe(data=>{
    this.editform=data;
  })
}
  edit(){
  this.service.edituser(this.editform)
.subscribe(data=>{
  console.log(data);
}
);
alert("record updated");
this.router.navigate(['/userdata']);
}
}
