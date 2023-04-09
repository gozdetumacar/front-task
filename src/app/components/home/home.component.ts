import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  ngOnInit(){
    
    var height_window = window.innerHeight - 100
    var card = <HTMLInputElement>document.getElementById("cardId")
    card.style.height = `${height_window}px`
    console.log("height",`${height_window}`)
  }

}
