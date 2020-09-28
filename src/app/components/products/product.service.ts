import { product } from './products.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductServicervice {

  baseURL = 'http://localhost:3001/produtcs';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMenssage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  showOnConsole(msg: string): void {
    console.log(msg);
  }

  creat(product: product): Observable<product> {
    return this.http.post<product>(this.baseURL, product).pipe(
      //map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMenssage('Ocorreu durante a operação', true);
    return EMPTY;
  }

  read(): Observable<product[]> {
    return this.http.get<product[]>(this.baseURL).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: string ): Observable<product> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(product: product): Observable<product> {
    const url = `${this.baseURL}/${product.id}`;
    return this.http.put<product>(url, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: string): Observable<product> {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }
}
