import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  successmsg: any;

  constructor(private service:AuthService) { }

  readData:any;

  ngOnInit(): void {
    this.getAllData();
  }

deleteId(id:any){
    console.log(id);
    
    this.service.deleteData(id).subscribe((res)=>{
      console.log(res);
    });
    this.successmsg="delate successfully";
    this.getAllData();
  }

  getAllData(){

    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData=res;
    });
  }
}
