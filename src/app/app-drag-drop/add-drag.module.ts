import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragComponent } from './drag/drag.component';
import { DropComponent } from './drop/drop.component';

@NgModule({
  declarations: [DragComponent, DropComponent],
  exports: [DragComponent],
  imports: [
    CommonModule,
    DragDropModule
  ]
})
export class DragModule {}
