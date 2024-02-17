import { Component } from '@angular/core';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  campoBusca: string = '';

  listaLivros: [];

  constructor(private service: LivroService) { }

  buscarLivros() {
    this.service.buscar(this.campoBusca).subscribe({
      next: retornoAPI => console.log(retornoAPI),
      error: erro => console.error(erro),
      complete: () => console.log("Observable Completado")
    })
  }

}



