
import { Component, OnInit, Input} from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip'


@Component({
  selector: 'app-botoa',
  templateUrl: './botoa.component.html',
  styleUrls: ['./botoa.component.css']
})
export class BotoaComponent implements OnInit {

  @Input()matTooltip: string = 'SubTitle';
  @Input()nome: string;
  @Input()disabled: boolean = false;
  @Input()width: string = "auto";


  constructor() { }

  ngOnInit(): void {
  }

}
