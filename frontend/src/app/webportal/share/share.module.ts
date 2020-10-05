import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import {HeaderComponent} from './components/header/header.component';
// import { SidebarComponent } from './components/sidebar/sidebar.component';
 import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule } from '@angular/material';
 import { FlexLayoutModule } from '@angular/flex-layout';
 import { RouterModule } from '@angular/router';
//import { HeaderComponent } from './components/header/header.component';
// import { AreaComponent } from './widgets/area/area.component';
// import { HighchartsChartModule } from 'highcharts-angular';
// import { CardComponent } from './widgets/card/card.component';
// import { PieComponent } from './widgets/pie/pie.component';
// import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    // HeaderComponent,
    // FooterComponent,
     SidebarComponent,
    HeaderComponent,
    // AreaComponent,
    // CardComponent,
    // PieComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    //HighchartsChartModule,
  ],
  exports: [
    HeaderComponent,
     SidebarComponent,
    // AreaComponent,
    // CardComponent,
    // PieComponent,
    // FooterComponent
  ],
})
export class ShareModule {}
