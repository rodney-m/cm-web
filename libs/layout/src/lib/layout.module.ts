import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerComponent } from './components/container/container.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MenuService, NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { LayoutRoutingModule } from './layout.routing.module';

@NgModule({
  imports: [
    LayoutRoutingModule,
    CommonModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzMenuModule,
    NzToolTipModule, 
    NzButtonModule,
    NzTableModule,
    NzDropDownModule,
    NzPopoverModule
  ],
  declarations: [ContainerComponent, SidebarComponent]
})
export class LayoutModule {}
