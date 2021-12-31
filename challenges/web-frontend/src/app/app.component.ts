import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil} from "rxjs/operators";
import { RouterData } from "./interfaces/router-data.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  routerData!: RouterData;

  private _unsubscribeAll: Subject<any> = new Subject();

  constructor (private router: Router, private activatedRoute: ActivatedRoute) {

  }
  

  ngOnInit(): void {
    this.router.events
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((event) => {
              if (event instanceof NavigationEnd) {
                this.routerData = this.activatedRoute?.root?.firstChild?.snapshot?.data as RouterData;
              }   
        });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
