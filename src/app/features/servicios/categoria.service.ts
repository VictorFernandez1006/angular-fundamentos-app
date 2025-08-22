import { Injectable } from '@angular/core';
import { Categoria } from '../model/categoria.model';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

@Injectable( {providedIn: 'root'})
export class CategoriaService {
  private categoriasMock: Categoria[] = [
    { id: 1, name: 'Electrónica', description: 'Dispositivos y gadgets' },
    { id: 2, name: 'Ropa', description: 'Vestimenta y accesorios' },
    { id: 3, name: 'Hogar', description: 'Artículos para el hogar' }
  ];

  listarCategorias(): Observable<Categoria[]> {
    return of(this.categoriasMock);
  }
}
