import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  addTransform(){
    var addIcon = <HTMLDivElement>document.getElementById("addIconId")
    var addIconDivId = <HTMLDivElement>document.getElementById("addIconDivId")

    if(window.getComputedStyle(addIconDivId).display == "none"){
      addIconDivId.style.display = "block"
      addIcon.style.transition = '0.9s';
      addIcon.style.transform = 'rotateZ(45deg)';
    }
    else{
      addIconDivId.style.display = "none"
      addIcon.style.transition = '0.9s';
      addIcon.style.transform = 'rotateZ(0deg)';
    }
  }

 }
