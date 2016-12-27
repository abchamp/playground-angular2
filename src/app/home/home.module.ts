/*
 * this file for connected modules
 */
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared';

@NgModule({
	import: [
		SharedModule
	], 
	declarations: [ // for component
		HomeComponent,
	],
})

export class HomeModule {}
