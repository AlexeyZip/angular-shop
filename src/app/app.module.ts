import { ShoppingCartComponent } from './shared/components/main-layout/cart-counter';
import { SortingPipe } from './shared/sorting.pipe';
import { AuthInterceptor } from './shared/auth.interceptor';
// import { AuthService } from './admin/shared/services/auth.service';
import { SharedModule } from './shared/shared.module';
import { CustomMaterialModule } from './material/custom-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { PhonesPageComponent } from './phones-page/phones-page.component';
import { LaptopPageComponent } from './laptop-page/laptop-page.component';
import { TablePageComponent } from './table-page/table-page.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { PhonePageComponent } from './shared/components/phone-page/phone-page.component';
import { PhoneInfoComponent } from './shared/components/phone-info/phone-info.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import ruLocale from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HomeAppliancesComponent } from './home-appliances/home-appliances.component';


registerLocaleData(ruLocale, 'ru')

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    PhonesPageComponent,
    LaptopPageComponent,
    TablePageComponent,
    HomeAppliancesComponent,
    GamesPageComponent,
    PhonePageComponent,
    SortingPipe,
    PhoneInfoComponent,
    ShoppingCartComponent,
    CartPageComponent,
    HomeAppliancesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CustomMaterialModule,
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
