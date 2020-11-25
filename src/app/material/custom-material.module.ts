import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { QuillModule } from 'ngx-quill';
import { MatSelectModule } from '@angular/material/select';
// import { QuillModule } from 'ngx-quill';
@NgModule({
  imports: [
    MatButtonModule,
    MatBadgeModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    // QuillModule.forRoot(),
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    QuillModule.forRoot(),
    MatIconModule,
    LayoutModule,
  ],
  exports: [
    MatButtonModule,
    MatBadgeModule,
    MatBadgeModule,
    MatSelectModule,
    MatInputModule,
    QuillModule,
    FormsModule,
    ReactiveFormsModule,
    // QuillModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    LayoutModule,
  ],
})
export class CustomMaterialModule {}
