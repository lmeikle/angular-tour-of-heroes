import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ProfileHostDirective } from '../../profile-host.directive';
import { ProfileService } from '../../profile.service';
import { mergeMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

/**
 * https://medium.com/angular-in-depth/loading-components-dynamically-in-angular-cd13b9fdb715
 */
@Component({
  selector: 'app-profile-container',
  template: `
    <h1>
      Dynamic Component Example
    </h1>
    <ng-template appProfileHost></ng-template>
  `,
})
export class ProfileComponent implements OnInit, OnDestroy {
  @ViewChild(ProfileHostDirective, { static: true })
  profileHost: ProfileHostDirective;
  private destroySubject = new Subject();

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    const viewContainerRef = this.profileHost.viewContainerRef;

    this.profileService.isLoggedIn$
      .pipe(
        takeUntil(this.destroySubject),
        mergeMap((isLoggedIn) =>
          this.profileService.loadComponent(viewContainerRef, isLoggedIn)
        )
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
}
