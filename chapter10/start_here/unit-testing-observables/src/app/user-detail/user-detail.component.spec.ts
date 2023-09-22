import { HttpClientModule } from '@angular/common/http';
import { waitForAsync, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoaderComponent } from '../core/components/loader/loader.component';
import { UserCardComponent } from '../core/components/user-card/user-card.component';
import { UserService } from '../core/services/user.service';

import { UserDetailComponent } from './user-detail.component';
import { DUMMY_USERS, UserServiceMock } from 'src/__mocks__/services/user.service.mock';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteMock } from 'src/__mocks__/activated-route.mock';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;
  let activatedRoute;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [UserDetailComponent, LoaderComponent, UserCardComponent],
        imports: [HttpClientModule, RouterTestingModule],
        providers: [
          { provide: UserService, useClass: UserServiceMock },
          { provide: ActivatedRoute, useClass: new ActivatedRouteMock() }

        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the user based on routeParams on page load', fakeAsync(() => {
    component.ngOnInit();
    activatedRoute.setParamMap({ uuid: DUMMY_USERS[1].login.uuid});
    tick(500);
    expect(component.user).toEqual(DUMMY_USERS);
  }));

  it('should get similar user based on routeParams uuid on page load', fakeAsync(() => {
    component.ngOnInit();
    activatedRoute.setParamMap({ uuid: DUMMY_USERS[1].login.uuid });
    const expectedSimilarUsers = [DUMMY_USERS[0]];
    tick(500);
    expect(component.similarUsers).toEqual(expectedSimilarUsers);
  }))
});
