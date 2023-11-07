import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsComponent } from './tools.component';
import { ZoomToolComponent } from './zoom-tool/zoom-tool.component';
import { HandToolComponent } from './hand-tool/hand-tool.component';
import { NoteVisibilityToolComponent } from './note-visibility-tool/note-visibility-tool.component';

@NgModule({
	declarations: [ToolsComponent, ZoomToolComponent, HandToolComponent, NoteVisibilityToolComponent],
	exports: [ToolsComponent],
	imports: [CommonModule],
})
export class ToolsModule {}
