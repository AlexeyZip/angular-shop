import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
// import { SortingPipe } from './sorting.pipe';


@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule],
  // declarations: [SortingPipe],
})
export class SharedModule {}
