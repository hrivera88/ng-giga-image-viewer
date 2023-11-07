import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolsModule } from './tools/tools.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, ToolsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
