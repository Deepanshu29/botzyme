import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { EnquiryFormComponent } from './view/enquiry-form/enquiry-form.component';
import { HomeComponent } from './view/home/home.component';
import { AboutUsComponent } from './view/about-us/about-us.component';
import { ContactUsComponent } from './view/contact-us/contact-us.component';
import { ServicesComponent } from './view/services/services.component';
import { EquiryComponent } from './class/equiry/equiry.component';
import { CareerComponent } from './view/career/career.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './view/navbar/navbar.component';
import { DescriptionComponent } from './view/description/description.component';
import { FooterComponent } from './view/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EnquiryFormComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    ServicesComponent,
    EquiryComponent,
    CareerComponent,
    PageNotFoundComponent,
    NavbarComponent,
    DescriptionComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
