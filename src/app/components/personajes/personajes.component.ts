import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../services/character.service';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { PersonajeDialogComponent } from '../dialog/personaje-dialog/personaje-dialog.component';

@Component({
  selector: 'app-personajes',
  standalone: true,
  
  imports: [
    CommonModule,
    MatCardModule,
    MatPaginatorModule,
    
  ],
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {
  personajes: any[] = [];
  total = 0;
  pageSize = 20;
  pageIndex = 0;

  constructor(
    private svc: CharacterService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadPage(0);
  }

  loadPage(index: number) {
    // index empieza en 0, nuestra API en 1
    this.svc.getCharacters(index + 1).subscribe(res => {
      this.personajes = res.results;
      this.total = res.info.count;
      this.pageIndex = index;
    });
  }

  onPage(evt: PageEvent) {
    this.loadPage(evt.pageIndex);
  }

  abrirDetalle(p: any) {
    this.dialog.open(PersonajeDialogComponent, {
      data: p,
      width: '400px'
    });
  }
}
