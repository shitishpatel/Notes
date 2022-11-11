import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {ActivatedRoute} from '@angular/router'
import {Router} from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  userForm: any;
  service: any;
  // successmsg: any;
  // errormsg: any;
  errormsg:any;
  msg="Data Inserted";
  successmsg:any;
  getparamId:any;
  constructor(private fb:FormBuilder, private auth:AuthService,private router:ActivatedRoute,private route:Router) {

    this.signupForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]

   })
  }

  ngOnInit(): void {
    this.getparamId=this.router.snapshot.paramMap.get('id');
    if(this.getparamId)
    {
      this.auth.getSingleData(this.getparamId).subscribe((res:any)=>{
        console.log(res);
        this.signupForm.patchValue({
          id:res[0].id,
          name:res[0].name,
          password:res[0].password,
          email:res[0].email
        });
      });
    }
  }


  // signup(){
  //   const data= this.signupForm.value;
  //   this.auth.signup(data).subscribe(res=>{
  //     alert("success")
  //   },
  //   err=>{
  //     alert("error")
  //   })
  //   this.successmsg="Upadte data";
  //   this.signupForm.reset();
  // }

  signup(){
    const data= this.signupForm.value;
    if(this.signupForm.valid){
      this.auth.signup(data).subscribe((res: any)=>{
        console.log(res);
        // this.route.navigate(['/login'])
      });
      this.successmsg="signup successful";
      this.signupForm.reset();
    }else{
      this.errormsg="all field required";
    }
  }




  userUpdate(){

    console.log(this.signupForm.value);
    if(this.signupForm.valid){
      this.auth.updateData(this.signupForm.value,this.getparamId).subscribe((res: any)=>{
        console.log(res);
      });
      this.successmsg="Upadte data";
      this.signupForm.reset();
    }else{
      this.errormsg="all field required";
    }
  }

  // getparamId(value: any, getparamId: any) {
  //   throw new Error('Method not implemented.');
  // }



}
