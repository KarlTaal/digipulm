import { Component } from '@angular/core';

@Component({
  selector: 'wedding-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {

  protected navigateGallery() {
    window.location.href = 'https://galerii.mariasinisalu.ee/katrejajanek/';
  }

  protected navigateVideo() {
    window.location.href = 'https://www.youtube.com/watch?v=2OLcnZDNUGs';
  }
}
