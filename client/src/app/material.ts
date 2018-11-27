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
  MatListModule,
  MatSelectModule
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
    MatListModule,
    MatSelectModule
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
    MatListModule,
    MatSelectModule
  ]
})

export class MaterialModule {

}
