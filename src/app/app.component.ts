import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ahorcado';


  letras=['A','B','C','D','E','F','G','H','I', 'J',
          'K','L','M', 'N','Ñ','O','P','Q','R','S',
          'T','U','V','W','X','Y','Z'];

  constructor(){
    console.log('se creo la app');
  }
}
