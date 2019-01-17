import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

import {MenubarModule} from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrandbarComponent } from './brandbar/brandbar.component';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CarouselModule} from 'primeng/carousel';
import {TabMenuModule} from 'primeng/tabmenu';
import {GalleriaModule} from 'primeng/galleria';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    PageNotFoundComponent,
    BrandbarComponent
  ],
  imports: [
    BrowserModule,
    //BrowserAnimationsModule,
    ButtonModule,
    MenubarModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    PanelModule,
    TabMenuModule,
    CarouselModule,
    GalleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
