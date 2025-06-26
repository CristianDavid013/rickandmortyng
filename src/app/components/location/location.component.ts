// src/app/components/location/location.component.ts
import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  locations: any[] = [];
  totalLocations = 0;
  currentPage = 1;

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations(page: number = 1): void {
    this.locationService.getLocations(page).subscribe(response => {
      this.locations = response.results;
      this.totalLocations = response.info.count;
    });
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex + 1;
    this.getLocations(this.currentPage);
  }
}
