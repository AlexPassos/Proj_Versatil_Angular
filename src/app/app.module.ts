import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';// IMPORTANT
import localePt from '@angular/common/locales/pt';// IMPORTANT
registerLocaleData(localePt); // IMPORTANT

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyMaskModule } from "ng2-currency-mask";

import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TitleBreadcrumbComponent } from './layout/title-breadcrumb/title-breadcrumb.component';
import { HomeComponent } from './modules/home/home.component';
import { PaginaErroComponent } from './pages/pagina-erro/pagina-erro.component';
import { LoginComponent } from './pages/login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule,MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSelectFilterModule } from 'mat-select-filter';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatIconModule} from '@angular/material/icon';
import { VerificarestoqueComponent } from './modules/estoque/verificarestoque/verificarestoque.component';
<<<<<<< HEAD
=======
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask'


>>>>>>> 40f8a50e6af5823001df9dfe2064a10599f9c705

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    TitleBreadcrumbComponent,
    HomeComponent,
    PaginaErroComponent,
    LoginComponent,
    VerificarestoqueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatSelectFilterModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    CurrencyMaskModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'},  provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
