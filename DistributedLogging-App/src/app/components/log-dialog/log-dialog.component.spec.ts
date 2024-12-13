import { ComponentFixture, TestBed } from '@angular/core/testing';

import { logDialogComponent } from './log-dialog.component';

describe('logDialogComponent', () => {
  let component: logDialogComponent;
  let fixture: ComponentFixture<logDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [logDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(logDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
