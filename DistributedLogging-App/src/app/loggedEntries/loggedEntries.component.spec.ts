import { ComponentFixture, TestBed } from '@angular/core/testing';

import { loggedEntriesComponent } from './loggedEntries.component';

describe('loggedEntriesComponent', () => {
  let component: loggedEntriesComponent;
  let fixture: ComponentFixture<loggedEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [loggedEntriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(loggedEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
