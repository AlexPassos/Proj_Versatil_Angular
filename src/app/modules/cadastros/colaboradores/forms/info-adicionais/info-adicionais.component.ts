import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-info-adicionais',
  templateUrl: './info-adicionais.component.html',
  styleUrls: ['./info-adicionais.component.css']
})
export class InfoAdicionaisComponent implements OnInit {

  @Input() formulario!: UntypedFormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
