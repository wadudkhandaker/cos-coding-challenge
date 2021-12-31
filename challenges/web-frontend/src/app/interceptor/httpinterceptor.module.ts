import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';

import { HttpsRequestInterceptor } from './httpinterceptor';

@Injectable()
@NgModule({
    providers: [
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        { provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true }
    ]
})
export class InterceptorModule { }
