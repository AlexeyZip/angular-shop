import { AuthGuard } from './shared/services/auth.guard';
import { SharedModule } from './../shared/shared.module';
import { AuthService } from './shared/services/auth.service';
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

@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardPageComponent,
    CreatePageComponent,
    EditPageComponent,
    LoginPageComponent,
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
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
          { path: 'login', component: LoginPageComponent },
          {path: 'create', component: CreatePageComponent,canActivate: [AuthGuard],},
          {path: 'dashboard',component: DashboardPageComponent,canActivate: [AuthGuard],},
          {path: 'phone/:id/edit',component: EditPageComponent,canActivate: [AuthGuard],},
        ],
      },
    ]),
  ],
  exports: [RouterModule],
  providers: [AuthService, AuthGuard],
})
export class AdminModule {}
