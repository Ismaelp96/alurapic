import { UserService } from './../../../core/user/user.service';
import { AlertService } from '../../../shared/alert/alert.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { PhotoService } from '../photo/photo.service';
import { Photo } from './../photo/photo';

@Component({
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css'],
})
export class PhotoDetailsComponent implements OnInit {
  photo$!: Observable<Photo>;
  photoId!: number;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params['photoId'];
    this.photo$ = this.photoService.findById(this.photoId);
    this.photo$.subscribe({
      next: (): void => {},
      error: (): void => {
        this.router.navigate(['not-found']);
      },
    });
  }
  remove() {
    this.photoService.removePhoto(this.photoId).subscribe({
      next: () => {
        this.alertService.success('Photo Removed', true);
        this.router.navigate(['/user', this.userService.getUserName()], { replaceUrl: true});
      },
      error: (err) => {
        console.log(err);
        this.alertService.warning('Could not delete the photo!');
      },
    });
  }
  like(photo: Photo) {
    this.photoService.like(photo.id).subscribe((liked) => {
      if (liked) {
        this.photo$ = this.photoService.findById(photo.id);
      }
    });
  }
}
