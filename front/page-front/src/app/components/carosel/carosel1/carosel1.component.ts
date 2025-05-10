import { AfterViewInit, Component } from '@angular/core';
import { GridItensComponent } from '../../grid-itens/grid-itens.component';
import { PesquisarPaginaComponent } from '../../pesquisar-pagina/pesquisar-pagina.component';
declare var $: any;

@Component({
  selector: 'carosel1',
  standalone: true,
  imports: [
    GridItensComponent,
    PesquisarPaginaComponent
  ],
  templateUrl: './carosel1.component.html',
  styleUrl: './carosel1.component.scss'
})
export class Carosel1Component implements AfterViewInit {
  ngAfterViewInit() {
    $('.owl-carousel').owlCarousel(
      {
        loop: true,
        margin: 10,
        nav: true,
        items: 3,
        autoplay: true,
        autoWidth: true,
        autoHeight: false,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          }, 1000: {
            items: 3
          }
        },
        autoplayTimeout: 5000,
        autoplayHoverPause: true
        // Número de itens a serem exibidos
      });
  }
}
