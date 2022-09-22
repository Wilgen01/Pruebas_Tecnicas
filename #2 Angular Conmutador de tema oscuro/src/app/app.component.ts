import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oscuro';
  tema = 'Claro'
  oscuro = false
  




  cambiarTema(){
       document.body.classList.toggle('dark-body')
    document.querySelector('#navbar')?.classList.toggle('navbar-dark')
    document.querySelector('#navbar')?.classList.toggle('bg-dark')
    let card = document.getElementsByClassName('card-body')
    for (let i = 0; i < card.length; i++) {
      card[i].classList.toggle('card-body-dark')
      
    }

    if (this.tema === 'Claro') {
        this.tema = 'Oscuro'
        this.oscuro = !this.oscuro
    }else{
      this.tema = 'Claro'
        this.oscuro = !this.oscuro

    }

  }
}


