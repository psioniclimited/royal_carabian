import { NgModule } from '@angular/core';
import { ComponentsTitleComponent } from './components-title/components-title';
import { ComponentsWeatherComponent } from './components-weather/components-weather';
import { EmbarkationComponent } from './embarkation/embarkation';
import { LandingMenuComponent } from './landing-menu/landing-menu';
import { AccordianComponent } from './accordian/accordian';
@NgModule({
	declarations: [ComponentsTitleComponent,
    ComponentsWeatherComponent,
    EmbarkationComponent,
    LandingMenuComponent,
    AccordianComponent],
	imports: [],
	exports: [ComponentsTitleComponent,
    ComponentsWeatherComponent,
    EmbarkationComponent,
    LandingMenuComponent,
    AccordianComponent]
})
export class ComponentsModule {}
