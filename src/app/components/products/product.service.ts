import { product } from './products.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductServicervice {

  baseURL = 'http://localhost:3001/produtcs';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMenssage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    })
  }

  showOnConsole(msg: string): void {
    console.log(msg);
  }

  creat(product: product): Observable<product> {
    return this.http.post<product>(this.baseURL, product);
  }

  read(): Observable<product[]> {
    return this.http.get<product[]>(this.baseURL);
  }
}
