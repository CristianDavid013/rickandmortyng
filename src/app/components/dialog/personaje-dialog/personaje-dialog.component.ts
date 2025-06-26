// src/app/components/dialogs/personaje-dialog/personaje-dialog.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { EpisodeService } from '../../../services/episode.service';
import { LocationService } from '../../../services/location.service';

@Component({
  selector: 'app-personaje-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './personaje-dialog.component.html',
  styleUrls: ['./personaje-dialog.component.scss']
})
export class PersonajeDialogComponent implements OnInit {
  // Flags para controlar la vista
  showMain = true;
  showEpisode = false;
  showLocation = false;

  // Valores visibles en la vista principal
  primerEpisodioNombre = '';
  ubicacionNombre = '';

  // Detalles para vistas secundarias
  selectedEpisode: any;
  selectedLocation: any;

  constructor(
    public dialogRef: MatDialogRef<PersonajeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private episodeService: EpisodeService,
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    // Cargar nombre del primer episodio
    if (this.data.episode?.length) {
      this.episodeService.getEpisodeByUrl(this.data.episode[0]).subscribe(ep => {
        this.primerEpisodioNombre = ep.name;
      });
    }

    // Cargar nombre de ubicación
    const locUrl = this.data.location?.url;
    if (locUrl) {
      this.locationService.getLocationById(locUrl).subscribe(loc => {
        this.ubicacionNombre = loc.name;
      });
    }
  }

  // Mostrar detalles del episodio
  openEpisodeDetail(): void {
    const url = this.data.episode[0];
    const id = parseInt(url.split('/').pop() || '', 10);
    this.episodeService.getEpisodeById(id).subscribe(ep => {
      this.selectedEpisode = ep;
      this.showMain = false;
      this.showEpisode = true;
    });
  }

  // Mostrar detalles de ubicación
  openLocationDetail(): void {
    const url = this.data.location?.url;
    if (url) {
      this.locationService.getLocationById(url).subscribe(loc => {
        this.selectedLocation = loc;
        this.showMain = false;
        this.showLocation = true;
      });
    }
  }

  // Volver a la vista principal
  backToMain(): void {
    this.showEpisode = false;
    this.showLocation = false;
    this.showMain = true;
  }

  // Cerrar el diálogo
  onClose(): void {
    this.dialogRef.close();
  }
}
