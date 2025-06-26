// src/app/components/dialogs/episode-dialog/episode-dialog.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { EpisodeService } from '../../../services/episode.service';

@Component({
  selector: 'app-episode-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './episode-dialog.component.html',
  styleUrls: ['./episode-dialog.component.scss']
})
export class EpisodeDialogComponent implements OnInit {
  detalles!: any;

  constructor(
    public dialogRef: MatDialogRef<EpisodeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    private episodeService: EpisodeService
  ) {}

  ngOnInit(): void {
    this.episodeService.getEpisodeById(this.data.id)
      .subscribe(ep => this.detalles = ep);
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
