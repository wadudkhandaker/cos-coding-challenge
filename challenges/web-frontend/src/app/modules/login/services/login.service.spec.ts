import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { HttpClientTestingModule, HttpTestingController } from  '@angular/common/http/testing';
import { environment } from  './../../../../environments/environment';
import { mockUser} from  './../login.mock';
import { AuthService } from  './../../../services/auth.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from "@angular/forms";

describe('LoginService', () => {
  let httpClient: HttpClient;
  let loginService: LoginService;
  let authService: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule, MatInputModule, MatFormFieldModule, FormsModule],
      providers: [LoginService, AuthService]
    });
    
    httpClient = TestBed.inject(HttpClient);
    authService = TestBed.inject(AuthService);
    loginService = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(loginService).toBeTruthy();
  });

  describe('Login', () => {
    it('should set auth response data to AuthService', () => {
      const payload = {
        userMailId: 'buyer-challenge@caronsale.de',
        password: 'Test123.'
      }
      const body = { password: payload.password, meta: '' };
      loginService.login(payload.userMailId, payload.password).subscribe(() => {
          expect(authService.getTokenInfo()).toEqual(mockUser)
      });
      const req = httpMock.expectOne(`${environment.baseUrl}/v1/authentication/${payload.userMailId}`);
      expect(req.request.body).toEqual(body);
      expect(req.request.method).toBe('PUT');
      req.flush(mockUser);
    });
  });

});
