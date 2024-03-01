import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
})
export class AcessoComponent implements OnInit {
  @Input() formulario!: UntypedFormGroup;

  hide = false;
  habilitado: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  disabilitaInputs() {
    this.habilitado = !this.habilitado;
    this.formulario.controls['nivel'].setValue('');
    this.formulario.controls['login'].setValue('');
    this.formulario.controls['senha'].setValue('');

    if (this.habilitado) {
      this.formulario.controls['nivel'].enable();
      this.formulario.controls['login'].enable();
      this.formulario.controls['senha'].enable();
    } else {
      this.formulario.controls['nivel'].disable();
      this.formulario.controls['login'].disable();
      this.formulario.controls['senha'].disable();
    }
  }
}
