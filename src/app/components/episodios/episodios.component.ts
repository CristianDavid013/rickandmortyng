// src/app/components/episodios/episodios.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeService } from '../../services/episode.service';
import { MaterialModule } from '../../material/material.module';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { EpisodeDialogComponent } from '../dialog/episode-dialog/episode-dialog.component';

@Component({
  selector: 'app-episodios',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,            // exporta MatCardModule, MatPaginatorModule, MatDialogModule, etc.
    EpisodeDialogComponent     // para poder abrirlo desde MatDialog
  ],
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.scss']
})
export class EpisodiosComponent implements OnInit {
  episodios: any[] = [];
  totalEpisodios = 0;
  pageSize = 20;
  pageIndex = 0;

  constructor(
    private episodeService: EpisodeService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadPage(0);
  }

  loadPage(index: number): void {
    this.episodeService.getEpisodes(index + 1).subscribe(res => {
      this.episodios = res.results;
      this.totalEpisodios = res.info.count;
      this.pageIndex = index;
    });
  }

  onPage(evt: PageEvent): void {
    this.loadPage(evt.pageIndex);
  }

  verDetalle(id: number): void {
    this.dialog.open(EpisodeDialogComponent, {
      data: { id },
      width: '400px'
    });
  }
}
