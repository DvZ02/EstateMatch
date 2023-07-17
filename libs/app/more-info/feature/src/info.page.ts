import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'ms-info-page',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})

export class InfoPage {
  constructor(private http: HttpClient,
    private toastController: ToastController,
    private router: Router) { }
  images: string[] = [
    'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg',
    'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg'
  ];

  currentIndex = 0;

  async nextImage() {
    this.currentIndex++;
    if (this.currentIndex >= this.images.length) {
      this.currentIndex = 0;
    }
  }

  back(){
    this.router.navigate(['/home'], { replaceUrl: true });
  }
}