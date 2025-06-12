import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InformationComponent } from './information/information.component';
import { HeadComponent } from './head/head.component';
import { AxperComponent } from './axper/axper.component';
import { ServiceComponent } from './service/service.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { WorksComponent } from './works/works.component';
import { EducationComponent } from './education/education.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    HeadComponent,
    AxperComponent,
    ServiceComponent,
    RecommendationComponent,
    WorksComponent,
    EducationComponent,
    NewsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
