import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { ProfissoesService } from 'src/app/shared/services/profissoes.service';
import { ProfissaoModel } from 'src/app/shared/models/profissao-model';

@Component({
  selector: 'app-info-adicionais',
  templateUrl: './info-adicionais.component.html',
  styleUrls: ['./info-adicionais.component.css']
})
export class InfoAdicionaisComponent implements OnInit {

  @Input() formulario!: UntypedFormGroup;

  habilitado: boolean = false;

  listProfissoes: ProfissaoModel[] = [];

  constructor(private profissoesService: ProfissoesService) {
    this.listarProfissoes();
   }

  ngOnInit(): void {
  }

  listarProfissoes(): void {
    this.profissoesService.listProfissoes().subscribe(
      (dados) => {
        this.listProfissoes = dados;
      },
      (error) => {
        console.log('Error: ', error);
      }
    );
  }

  disabilitaInputs() {
    this.habilitado = !this.habilitado;
    this.formulario.controls['limite'].setValue('0');

    if (this.habilitado) {
      this.formulario.controls['limite'].enable();
    } else {
      this.formulario.controls['limite'].disable();
    }
  }

}
