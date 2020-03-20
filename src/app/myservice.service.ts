import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private loginurl="http://localhost:4200/login"
private getdetailsurl="http://localhost:3000/getdetails"
//private inserturl="http://localhost:3000/insert"
private getbyidurl="http://localhost:3000/id"
private editurl="http://localhost:3000/update"
//private deleteurl="http://localhost:3000/delete"
  constructor(private http:HttpClient) { }
  loginuser(user):Observable<any>{
    return this.http.get<any>(this.loginurl,user);
  }
  getdetails():Observable<any>{
    return this.http.get<any>(this.getdetailsurl);
  }
  getbyid(id):Observable<any>{
    return this.http.get<any>(this.getbyidurl,id);
  }
  //insert(user){
    //return this.http.post<any>(this.inserturl,user);
  //}
  edituser(data){
    return this.http.put<any>(this.editurl,data);
  }
  //deleteuser(id){
   // return this.http.delete<any>(this.deleteurl,id);
 // }
}
