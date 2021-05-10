import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-observacoes',
  templateUrl: './observacoes.component.html',
  styleUrls: ['./observacoes.component.css']
})
export class ObservacoesComponent implements OnInit {

  @Input() formulario!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
