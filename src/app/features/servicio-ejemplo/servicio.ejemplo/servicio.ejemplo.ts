import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../model/categoria.model';
import { CategoriaService } from '../../servicios/categoria.service';

@Component({
  selector: 'app-servicio.ejemplo',
  standalone: true,
  imports: [],
  templateUrl: './servicio.ejemplo.html',
  styleUrl: './servicio.ejemplo.css'
})
export class ServicioEjemplo implements OnInit{
  categorias: Categoria[] = [];
  constructor(private categoriaService: CategoriaService){}
  ngOnInit(): void {
      this.categoriaService.listarCategorias().subscribe(data => this.categorias = data);
  }

}
