import { Component, OnInit } from '@angular/core';
import {Users, tmpGlobalUsers} from "../model/user";
import {ToastService} from "../service/ToastService";

@Component({
  selector: 'app-regist',
  templateUrl: './regist.page.html',
  styleUrls: ['./regist.page.scss'],
})
export class RegistPage implements OnInit {
  user:Users;
  constructor(private toastservice:ToastService) {
    this.user=new Users();
  }

  ngOnInit() {
  }
  save(){
    // local check
    console.log("id:"+this.user.username+",pass:"+this.user.pass+"!");
    if(this.user.username === undefined || this.user.pass === undefined){
      this.toastservice.showErrrorToast("regist fail, must input username and password");
      return;
    }
    if(this.user.pass.length < 8){
      this.toastservice.showErrrorToast("regist fail, password is at least 8 characters");
      return;
    }
    var upper_case, low_case, special_case = false;
    for(var i=0; i < this.user.pass.length; i ++){
      var c = this.user.pass.charAt(i);
      if(c >= 'a' && c <= 'z'){
        low_case = true;
      }else if(c >= 'A' && c <= 'Z'){
        upper_case = true;
      }else if(c >= '0' && c <= '9'){
        // pass
      }else{
        special_case = true;
      }
    }
    if(!upper_case || !low_case || !special_case){
      this.toastservice.showErrrorToast("regist fail, password must contain upper case, low case and special character");
      return;
    }

    // check email

    let d = this.user.email.length - 4
    if(d >= 0 && (this.user.email.lastIndexOf(".com") == d || this.user.email.lastIndexOf(".edu") == d)){
      // jump to login
      tmpGlobalUsers.push(this.user);
      this.toastservice.showSuccessToast("regist success");
    }else{
      this.toastservice.showErrrorToast("regist fail, email must end with .com or .edu");
    }
  }

}