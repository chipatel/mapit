///<reference path="dao/marker.ts"/>
import {Component} from '@angular/core';

import {Marker} from './dao/marker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Zoom level
  zoom = 8;

  // Starting point
  lat = 37.3088569;
  lng = -120.91854060000003;

  // Values
  markerName: string;
  markerLat: string;
  markerLng: string;
  markerDraggable: string;

  // Markers
  markers: Marker[] = [
    {
      name: 'Location1',
      lat: 37.4488569,
      lng: -121.91854060000003,
      draggable: true
    },
    {
      name: 'Location2',
      lat: 37.4758425,
      lng: -121.01544060000003,
      draggable: true
    },
    {
      name: 'Location3',
      lat: 37.1188569,
      lng: -121.6654060000003,
      draggable: true
    }
  ];

  constructor() {

  }

  markerClicked(m: Marker, index: number) {
    console.log('clicked marker ' + m.name + ' at index ' + index);
  }

  mapClicked($event: any) {
    const newMarker = {
      name: 'untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
  };
    this.markers.push(newMarker);
  }

  markerDragEnd(m: Marker, $event: any) {
    console.log(m + $event);

    const updM = {
      name: m.name,
      lat: m.lat,
      lng: m.lng,
      draggable: false
    };
    const newLat = $event.coords.lat;
    const newlng = $event.coords.lng;
  }

  addMarker() {
    let isDraggable = false;
    if (this.markerDraggable === 'yes') {
      isDraggable = true;
    }

    const newMarker = {
      name: this.markerName,
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      draggable: isDraggable
    };
    this.markers.push(newMarker);
  }
}
