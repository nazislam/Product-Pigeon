import { MatButtonModule, 
  MatCheckboxModule, 
  MatFormFieldModule,
  MatCardModule,
  MatToolbarModule,
  MatChipsModule,
  MatIconModule,
  MatTooltipModule,
  MatRadioModule,
  MatDividerModule,
  MatExpansionModule,
  MatSnackBarModule
} from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, 
    MatCheckboxModule, 
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatChipsModule,
    MatIconModule,
    MatTooltipModule,
    MatRadioModule,
    MatDividerModule,
    MatExpansionModule,
    MatSnackBarModule
  ],
  exports: [MatButtonModule, 
    MatCheckboxModule, 
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatChipsModule,
    MatIconModule,
    MatTooltipModule,
    MatRadioModule,
    MatDividerModule,
    MatExpansionModule,
    MatSnackBarModule
  ]
})

export class MaterialModule {

}
