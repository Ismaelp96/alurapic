import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlataformDetectorService } from 'src/app/core/plataform-detect/plataform-detector.service';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit, AfterViewInit {
  loginForm!: FormGroup;

  @ViewChild('userNameInput')
  userNameInput!: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlataformDetectorService
  ) {}
  ngAfterViewInit(): void {
    this.platformDetectorService.isPlatformBrower() &&
      this.userNameInput.nativeElement.focus();
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const userName = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;
    this.authService.authenticate(userName, password).subscribe({
      next: () => this.router.navigate(['user', userName]),
      error: (err) => {
        console.log(err);
        this.loginForm.reset();
        this.platformDetectorService.isPlatformBrower() &&
          this.userNameInput.nativeElement.focus();
        alert('Invalid user name or password');
      },
    });
  }
}
