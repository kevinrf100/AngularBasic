import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    console.log('Deu bom entrar aqui');

    this.dialog.open(EdicaoComponent, {
      
    });
  }

}
