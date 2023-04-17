
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonComponent } from './add-person.component';




describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AddPersonComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AddPersonComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'get-started-angular'`, () => {
  //   const fixture = TestBed.createComponent(ClientsurveyComponent);
  //   const clientsurvey = fixture.componentInstance;
  //   expect(clientsurvey.title).toEqual('get-started-angular');
  // });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AddPersonComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('get-started-angular app is running!');
  });
});