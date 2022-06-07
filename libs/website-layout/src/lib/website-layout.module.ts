import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HomeComponent, HomeSliderComponent, HeaderComponent],
})
export class WebsiteLayoutModule {}
