import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ahorcado';


  palabra='';
  vectorPalabras= ['AGUACATE','AGUA','ELECTRONICA','PERRO', 'GATO', 'JESUS','CUADERNO','LAPIZ','MUESTRA', 'GARCIA', 
  'LOBO','ESTERNOCLEIDOMASTOIDEO', 'PERICO', 'HERNANDEZ'];
  

  palabraOculta='';

  num=0;
  intentos=0;

  gano=false;
  perdio=false;


  letras=['A','B','C','D','E','F','G','H','I', 'J',
          'K','L','M', 'N','Ñ','O','P','Q','R','S',
          'T','U','V','W','X','Y','Z'];

  constructor() {
    this.numRandon();
    this.Agry();
   
  }

  Agry(){
    this.palabraOculta ='_ '.repeat(this.palabra.length);
  }

  siguiente(){

    this.numRandon();
    this.Agry();

    this.gano=false;
    this.perdio=false;
    this.intentos=0;

  }

  // Metodo para comprobar la letra que el usuario presiona
  comprobar( letra: string ){

    this.existeLetra(letra);

    /* console.log('lA letra presionada es <- '+ letra);
    .split(' '); permite separar los componentes de una palabra y transformarlos en un array
    */
    const palabraOcultaArr = this.palabraOculta.split(' ');
    // console.log(palabraOcultaArr);
    for(let i=0; i<this.palabra.length; i ++){
      if(this.palabra[i]===letra){
        palabraOcultaArr[i]= letra;
      }
    }
    // .join(' '); sirve para unir palabras
    this.palabraOculta=palabraOcultaArr.join(' ');

    this.verificaGane();
  }

  /* Este metodo es para unir la palabra infresada sin espacios
    y validar se ganó o perdio*/ 
  verificaGane(){
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');
    if(palabraEvaluar === this.palabra){
      this.gano=true;
    }

    if(this.intentos>=9){
      this.perdio=true;
    }
  }
  existeLetra(letra:string){
    if(this.palabra.indexOf( letra ) >=0){
      // Encontro la letra

    }else{
      // No encontre la letra
      this.intentos++;
    }
  }
 
  // Este metodo recarga la pagina
  // refresh(){ 
  //   window.location.reload();
  //  }

   numRandon(){
     this.num=Math.round(Math.random()*(this.vectorPalabras.length - 1));
     this.palabra=this.vectorPalabras[this.num];
     console.log(this.num+'->  ' + this.palabra);
   }


   
}