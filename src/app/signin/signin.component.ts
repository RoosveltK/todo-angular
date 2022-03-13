import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  form!: FormGroup;
  signinProcess = false;
  constructor(
    private fb: FormBuilder,
    private elementRef: ElementRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      '#f4f4f4';
  }

  onSubmit() {
    this.signinProcess = true; // disable patch
    setTimeout(() => {
      this.router.navigateByUrl('/todo');
      this.signinProcess = false;
    }, 2000);
  }
}
