import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ItemsRoutingModule } from './items-routing.module';

import { ItemsService } from './items.service';

import { ItemsComponent } from './items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ThemeModule, ItemsRoutingModule, ReactiveFormsModule,
    FormsModule],
  declarations: [ItemsComponent],
  providers: [ItemsService]
})
export class ItemsModule {}
