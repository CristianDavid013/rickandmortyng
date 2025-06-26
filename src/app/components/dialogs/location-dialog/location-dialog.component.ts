// src/app/components/dialogs/location-dialog/location-dialog.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LocationService } from '../../../services/location.service';

@Component({
  selector: 'app-location-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './location-dialog.component.html',
  styleUrls: ['./location-dialog.component.scss']
})
export class LocationDialogComponent implements OnInit {
  locationDetails: any;

  constructor(
    public dialogRef: MatDialogRef<LocationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { url: string },
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    this.locationService.getLocationByUrl(this.data.url).subscribe(loc => {
      this.locationDetails = loc;
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
