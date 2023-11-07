import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsComponent } from './tools.component';



@NgModule({
  declarations: [
    ToolsComponent
  ],
  exports: [
    ToolsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ToolsModule { }
