import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UserCardComponent } from '../core/components/user-card/user-card.component';
import { UserService } from '../core/services/user.service';

import { UsersComponent } from './users.component';
import { DUMMY_USERS, UserServiceMock } from 'src/__mocks__/services/user.service.mock';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent, UserCardComponent],
      providers: [{provide: UserService, useClass: UserServiceMock}],
      imports: [HttpClientModule, ReactiveFormsModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call searchUsers() method on component init', () => {
    spyOn(component, 'searchUsers');
    component.ngOnInit();
    expect(component.searchUsers).toHaveBeenCalled();
  });

  it('should get users back from the API component init', fakeAsync(() => {
    component.ngOnInit();
    tick(500);
    expect(component.users.length).toBe(2);
    expect(component.users).toEqual(DUMMY_USERS)
  }));

  it('should get the searched users from the API upon searching', fakeAsync(() => {
    component.searchForm.get('username').setValue('hall');
    const expectedUsersList = [DUMMY_USERS[1]];
    component.searchUsers();
    tick(500);
    expect(component.users.length).toBe(1);
    expect(component.users).toEqual(expectedUsersList);
  }))
});
