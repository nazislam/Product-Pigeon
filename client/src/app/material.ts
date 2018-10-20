import { MatButtonModule, 
  MatCheckboxModule, 
  MatFormFieldModule,
  MatCardModule,
  MatToolbarModule,
  MatChipsModule
} from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, 
    MatCheckboxModule, 
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatChipsModule
  ],
  exports: [MatButtonModule, 
    MatCheckboxModule, 
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatChipsModule
  ]
})

export class MaterialModule {

}
