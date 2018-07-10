import { NgModule } from '@angular/core';
import { ComponentsTitleComponent } from './components-title/components-title';
import { ComponentsWeatherComponent } from './components-weather/components-weather';
import { EmbarkationComponent } from './embarkation/embarkation';
@NgModule({
	declarations: [ComponentsTitleComponent,
    ComponentsWeatherComponent,
    EmbarkationComponent],
	imports: [],
	exports: [ComponentsTitleComponent,
    ComponentsWeatherComponent,
    EmbarkationComponent]
})
export class ComponentsModule {}
