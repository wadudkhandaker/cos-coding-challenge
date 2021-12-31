import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from './../../services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from './services/login.service';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientTestingModule } from  '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('LoginComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, MatSnackBarModule],
      providers: [AuthService, LoginService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});