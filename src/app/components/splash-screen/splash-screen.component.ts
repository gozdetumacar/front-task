import { Component, OnInit } from '@angular/core';
import {RouterModule,Router} from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(){
    this.hideSplash()
    
  }

  hideSplash(){
    let splashId = window.document.getElementById('splashId')!
    console.log(splashId)
    setTimeout(() => {
      splashId.classList.add('hidden');
      this.router.navigate(["/login"]);
    },1000)
  }
}
