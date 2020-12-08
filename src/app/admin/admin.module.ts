import { AlertService } from './shared/services/alert.services';
import { SearchPipe } from './shared/search.pipe';
import { AuthGuard } from './shared/services/auth.guard';
import { SharedModule } from './../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminLayoutComponent } from './shared/component/admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { CustomMaterialModule } from './../material/custom-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { AlertComponent } from './shared/component/alert/alert.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardPageComponent,
    CreatePageComponent,
    EditPageComponent,
    LoginPageComponent,
    SearchPipe,
    AlertComponent,
    OrdersPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminLayoutComponent,
        children: [
          { path: '', redirectTo: '/admin/create', pathMatch: 'full' },
          { path: 'login', component: LoginPageComponent },
          {path: 'create', component: CreatePageComponent,canActivate: [AuthGuard]},
          {path: 'orders', component: OrdersPageComponent,canActivate: [AuthGuard]},
          {path: 'dashboard',component: DashboardPageComponent,canActivate: [AuthGuard]},
          {path: 'phone/:id/edit',component: EditPageComponent,canActivate: [AuthGuard]},
          // {path: 'phone/:id/edit',component: EditPageComponent,canActivate: [AuthGuard],},
          // {path: 'phone/:id/edit',component: EditPageComponent,canActivate: [AuthGuard],},
        ],
      },
    ]),
  ],
  exports: [RouterModule],
  providers: [ AuthGuard, AlertService],
})
export class AdminModule {}
