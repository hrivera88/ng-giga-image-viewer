import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsComponent } from './tools.component';
import { ZoomToolComponent } from './zoom-tool/zoom-tool.component';
import { HandToolComponent } from './hand-tool/hand-tool.component';

@NgModule({
	declarations: [ToolsComponent, ZoomToolComponent, HandToolComponent],
	exports: [ToolsComponent],
	imports: [CommonModule],
})
export class ToolsModule {}
