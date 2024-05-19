import { Component, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { map, shareReplay, takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnDestroy {
  private unsubscribe$: Subject<void> = new Subject();
  isActiveProductLink: boolean = false;
  isActiveAddProductLink: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver
  ) {
    this.router.events
      .pipe(
        takeUntil(this.unsubscribe$),
        map(event => event instanceof NavigationEnd)
      )
      .subscribe((event: boolean) => {
        if (event) {
          // Check if the current route matches '/products' or starts with '/admin/products'
          this.isActiveProductLink = this.router.url === '/products' || this.router.url.startsWith('/admin/products');
          // Check if the current route matches '/admin/add-product'
          this.isActiveAddProductLink = this.router.url === '/admin/add-product';
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  routingToProducts() {
    this.router.navigate(['products'], { relativeTo: this.route });
  }

  routingToAddProducts() {
    this.router.navigate(['add-product'], { relativeTo: this.route });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
