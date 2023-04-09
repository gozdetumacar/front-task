import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  removeDisabled(){
    let submitButton = (<HTMLInputElement>document.getElementById("loginButton"));

    let nameLength = (<HTMLInputElement>document.getElementById("name")).value.trim();

    let pswLength = (<HTMLInputElement>document.getElementById("psw")).value.trim();
    if(nameLength.length > 0 && pswLength.length > 0){
      submitButton.disabled = false
    }
    else{
      submitButton.disabled = true
    }
    console.log(nameLength, pswLength)
  }
}
