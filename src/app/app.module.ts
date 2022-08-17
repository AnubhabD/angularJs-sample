import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ButtonComponent } from './button/button.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormOutputsComponent } from './reactive-form-outputs/reactive-form-outputs.component';
import { ApiComponent } from './api/api.component';
import { BackendApiComponent } from './backend-api/backend-api.component';

import { HttpInterceptorProviders } from './interceptor';

import { ReduxModule } from './redux/redux.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ButtonComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    ReactiveFormOutputsComponent,
    HomeComponent,
    ApiComponent,
    BackendApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReduxModule,
  ],
  providers: [HttpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}