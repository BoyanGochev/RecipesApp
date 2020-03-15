import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { ShareComponent } from './share/share.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DetailsComponent, ShareComponent, EditComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ShareComponent, EditComponent, DetailsComponent]
})
export class RecipesModule { }
