import { MatButtonModule, 
         MatCheckboxModule, 
         MatFormFieldModule,
         MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, 
    MatCheckboxModule, 
    MatFormFieldModule,
    MatCardModule
  ],
  exports: [MatButtonModule, 
    MatCheckboxModule, 
    MatFormFieldModule,
    MatCardModule
  ]
})

export class MaterialModule {

}
