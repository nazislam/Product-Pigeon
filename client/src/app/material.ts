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
  MatSnackBarModule,
  MatListModule
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
    MatSnackBarModule,
    MatListModule
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
    MatSnackBarModule,
    MatListModule
  ]
})

export class MaterialModule {

}
