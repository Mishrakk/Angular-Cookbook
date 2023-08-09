import { Component, ViewChild } from '@angular/core';
import { GalleryComponent } from './components/gallery/gallery.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cc-view-child';
  @ViewChild(GalleryComponent) gallery;

  addNewPicture() {
    this.gallery.pictures.unshift(this.gallery.generateImage());
    console.log('added new picture');
  }

  removeFirstPicture() {
    this.gallery.pictures.shift();
    console.log('removed first picture');
  }
}
