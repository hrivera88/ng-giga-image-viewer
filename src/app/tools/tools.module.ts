import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsComponent } from './tools.component';
import { ZoomToolComponent } from './zoom-tool/zoom-tool.component';

@NgModule({
	declarations: [ToolsComponent, ZoomToolComponent],
	exports: [ToolsComponent],
	imports: [CommonModule],
})
export class ToolsModule {}
