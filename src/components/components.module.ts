import { NgModule } from '@angular/core';
import { ComponentsTitleComponent } from './components-title/components-title';
import { ComponentsWeatherComponent } from './components-weather/components-weather';
import { EmbarkationComponent } from './embarkation/embarkation';
import { LandingMenuComponent } from './landing-menu/landing-menu';
@NgModule({
	declarations: [ComponentsTitleComponent,
    ComponentsWeatherComponent,
    EmbarkationComponent,
    LandingMenuComponent],
	imports: [],
	exports: [ComponentsTitleComponent,
    ComponentsWeatherComponent,
    EmbarkationComponent,
    LandingMenuComponent]
})
export class ComponentsModule {}
