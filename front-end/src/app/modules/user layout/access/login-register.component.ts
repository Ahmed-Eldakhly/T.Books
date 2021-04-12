import { AfterViewInit, ElementRef, Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit, AfterViewInit {
  @ViewChild('l_pass') password_login!: ElementRef<HTMLInputElement>;
  @ViewChild('s_pass') password_signup!: ElementRef<HTMLInputElement>;
  @ViewChild('s_pass_confirm') confirm_password_signup!: ElementRef<HTMLInputElement>;
  @ViewChild('login_toggle') login_toggle!: ElementRef<HTMLButtonElement>;
  @ViewChild('signup_toggle') signup_toggle!: ElementRef<HTMLButtonElement>;
  @ViewChild('login_form') login_form!: ElementRef<HTMLButtonElement>;
  @ViewChild('signup_form') signup_form!: ElementRef<HTMLButtonElement>;

  constructor() {
   }

  toggleLogin() {
    this.login_toggle.nativeElement.setAttribute("style","backgroundColor: #DE3241; color: #fff");
    this.signup_toggle.nativeElement.setAttribute("style","backgroundColor: #fff; color: #222");
    this.signup_form.nativeElement.setAttribute("style","display : none");
    this.login_form.nativeElement.setAttribute("style","display : block");
  }
  toggleSignup() {
    console.log("called");
    this.login_toggle.nativeElement.setAttribute("style","background-color: #fff; color : #222");
    this.signup_toggle.nativeElement.setAttribute("style","background-color: #DE3241; color: #fff");
    this.login_form.nativeElement.setAttribute("style","display : none");
    this.signup_form.nativeElement.setAttribute("style","display : block");
  }
  login_showPassword_changed(e:any){
    if(e.target.checked)
      this.password_login.nativeElement.setAttribute("type","text");
    else
      this.password_login.nativeElement.setAttribute("type","password");
  }
  signUp_showPassword_changed(e:any){
    if(e.target.checked){
      this.password_signup.nativeElement.setAttribute("type","text");
      this.confirm_password_signup.nativeElement.setAttribute("type","text")
    }
    else{
      console.log("called")
      this.password_signup.nativeElement.setAttribute("type","password");
      this.confirm_password_signup.nativeElement.setAttribute("type","password")
    }
  }

  ngAfterViewInit(){

  }

  loginForm = new FormGroup({
    userName:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)])
  })

  login()
  {
    // console.log("loged")
    // this.userService.register(User)
    //   .subscribe((data)=>{
    //     this.tokens = data
    //     console.log(this.tokens)
    //     try
    //     {
    //       if(this.tokens.token.accessToken != undefined)
    //       {
    //         // console.log(this.tokens.token.accessToken)
    //         // console.log(this.tokens.token.refreshToken)
    //         sessionStorage.setItem("accessToken", this.tokens.token.accessToken);
    //         sessionStorage.setItem("refreshToken", this.tokens.token.refreshToken);
    //         this.enterSite()
    //       }
    //     }
    //     catch
    //     {
    //       this.userPassStatus = true;
    //     }
    //   },(err)=>{
    //     console.log("post error")
    //   })
  }

  ngOnInit(): void {
    document.body.className = "app-access";
  }
  ngOnDestroy(){
    document.body.className="";
  }
}
