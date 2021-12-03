import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ahorcado';

  palabra='AGUACATE';
  palabraOculta='';


  letras=['A','B','C','D','E','F','G','H','I', 'J',
          'K','L','M', 'N','Ñ','O','P','Q','R','S',
          'T','U','V','W','X','Y','Z'];

  constructor() {
    // console.log('se creo la app');
    // por cada letra que tenga la palabra se va agregar un '_ '
    this.palabraOculta ='_ '.repeat(this.palabra.length);
  }

  // Metodo para comprobar la letra que el usuario presiona
  comprobar( letra: string ){

    // console.log('lA letra presionada es <- '+ letra);
    // .split(' '); permite separar los componentes de una palabra y transformarlos en un array

    const palabraOcultaArr = this.palabraOculta.split(' ');
    // console.log(palabraOcultaArr);
    for(let i=0; i<this.palabra.length; i ++){
      if(this.palabra[i]===letra){
        palabraOcultaArr[i]= letra;
      }
    }
    // .join(' '); sirve para unir palabras
    this.palabraOculta=palabraOcultaArr.join(' ');
  }

 
}
