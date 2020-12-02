import { CartPageComponent } from './cart-page/cart-page.component';
import { PhoneInfoComponent } from './shared/components/phone-info/phone-info.component';
import { PhonePageComponent } from './shared/components/phone-page/phone-page.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { LaptopPageComponent } from './laptop-page/laptop-page.component';
import { TablePageComponent } from './table-page/table-page.component';
import { PhonesPageComponent } from './phones-page/phones-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomeAppliancesComponent } from './home-appliances/home-appliances.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'phones', component: PhonesPageComponent },
      { path: 'tablet', component: TablePageComponent },
      { path: 'laptop', component: LaptopPageComponent },
      { path: 'home-appliance', component: HomeAppliancesComponent },
      { path: 'game', component: GamesPageComponent },
      { path: 'phone', component: PhonePageComponent },
      { path: 'phones/product-info', component: PhoneInfoComponent },
      { path: 'laptop/product-info', component: PhoneInfoComponent },
      { path: 'tablet/product-info', component: PhoneInfoComponent },
      { path: 'game/product-info', component: PhoneInfoComponent },
      { path: 'home-appliance/product-info', component: PhoneInfoComponent },
      { path: 'cart', component: CartPageComponent },
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import(`./admin/admin.module`).then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
