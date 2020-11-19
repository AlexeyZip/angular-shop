import { CustomMaterialModule } from './material/custom-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { PhonesPageComponent } from './phones-page/phones-page.component';
import { LaptopPageComponent } from './laptop-page/laptop-page.component';
import { TablePageComponent } from './table-page/table-page.component';
import { HomeAppliancesPageComponent } from './home-appliances-page/home-appliances-page.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { PhonePageComponent } from './shared/components/phone-page/phone-page.component';
import { PhoneInfoComponent } from './shared/component/phone-info/phone-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    PhonesPageComponent,
    LaptopPageComponent,
    TablePageComponent,
    HomeAppliancesPageComponent,
    GamesPageComponent,
    PhonePageComponent,
    PhoneInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
