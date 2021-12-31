import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { HttpError } from '../../interfaces/http-error.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription;
  
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      userMailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  submit():void {
    if (this.formGroup.valid) {
      const userMailId = this.formGroup.controls['userMailId'].value as string;
      const password = this.formGroup.controls['password'].value as string;
      this.subscription =  this.loginService.login(userMailId, password).subscribe(() => {
          this.router.navigate(['auctions'])
        },
        (errorResponse: HttpErrorResponse) => {  
          const message = (errorResponse?.error as HttpError)?.message as string;                             
          this.openSnackBar(message, 'Close')
        }
      )
    }
  }

  openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: ['yellow-snackbar']
    });
  }

  ngOnDestroy():void {
    this.subscription.unsubscribe();
  }

}

