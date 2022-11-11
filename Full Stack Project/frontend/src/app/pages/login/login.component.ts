import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private fb:FormBuilder,private authservice:AuthService,private router:Router) {
    this.loginForm = this.fb.group({
      id: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

login(){
  const data= this.loginForm.value;
  this.authservice.signin(data).subscribe(
    res=>{
      if(res.success){
        localStorage.setItem('token',res.token)
        this.router.navigate(['/profile'])
      }else{
        alert(res.message)
      }
    },err=>{
      alert("login failed")
    })
}


}
