import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { ListenNowComponent } from './pages/listen-now/listen-now.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IgorDetailsComponent } from './pages/igor-details/igor-details.component';
import { MusiclistComponent } from './components/musiclist/musiclist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './lib/shared/material.module';
import { LoadingscreenComponent } from './components/loadingscreen/loadingscreen.component';
import { CategorieslistComponent } from './components/categorieslist/categorieslist.component';
import { SinglecategoryitemComponent } from './components/singlecategoryitem/singlecategoryitem.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { MusicplayerComponent } from './components/musicplayer/musicplayer.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfilepageComponent } from './pages/profilepage/profilepage.component';
import { CategoryitemComponent } from './components/categoryitem/categoryitem.component';

import { TimeconversionPipe } from './pipes/timeconversion.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ListenNowComponent,
    BrowseComponent,
    IgorDetailsComponent,
    MusiclistComponent,
    LoadingscreenComponent,
    CategorieslistComponent,
    SinglecategoryitemComponent,
    TopnavComponent,
    MusicplayerComponent,
    ProfilepageComponent,
    CategoryitemComponent,
    TimeconversionPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
