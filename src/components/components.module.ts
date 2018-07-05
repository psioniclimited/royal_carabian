import { NgModule } from '@angular/core';
import { ComponentsTitleComponent } from './components-title/components-title';
import { ComponentsWeatherComponent } from './components-weather/components-weather';
@NgModule({
	declarations: [ComponentsTitleComponent,
    ComponentsWeatherComponent],
	imports: [],
	exports: [ComponentsTitleComponent,
    ComponentsWeatherComponent]
})
export class ComponentsModule {}
