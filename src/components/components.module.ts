import { NgModule } from '@angular/core';
import { ComponentsTitleComponent } from './components-title/components-title';
import { ComponentsWeatherComponent } from './components-weather/components-weather';
import { EmbarkationComponent } from './embarkation/embarkation';
import { LandingMenuComponent } from './landing-menu/landing-menu';
import { FaqAccordianComponent } from './faq-accordian/faq-accordian';
import { AccordianComponent } from './accordian/accordian';
@NgModule({
	declarations: [ComponentsTitleComponent,
    ComponentsWeatherComponent,
    EmbarkationComponent,
    LandingMenuComponent,
    FaqAccordianComponent,
    AccordianComponent],
	imports: [],
	exports: [ComponentsTitleComponent,
    ComponentsWeatherComponent,
    EmbarkationComponent,
    LandingMenuComponent,
    FaqAccordianComponent,
    AccordianComponent]
})
export class ComponentsModule {}
