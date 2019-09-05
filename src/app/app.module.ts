import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HeaderComponent } from './_components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './_components/footer/footer.component';

import { MatExpansionModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntroductionComponent } from './_components/introduction/introduction.component';
import { OverviewComponent } from './_components/overview/overview.component';
import { TestMCComponent } from './_components/test-mc/test-mc.component';
import { TestModComponent } from './_components/test-mod/test-mod.component';
import { ResizableModule } from 'angular-resizable-element';
import { AngularSplitModule } from 'angular-split';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    IntroductionComponent,
    OverviewComponent,
    TestMCComponent,
    TestModComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatExpansionModule,
    ResizableModule,
    AngularSplitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
