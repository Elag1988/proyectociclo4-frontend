import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomicilioListComponent } from './domicilio-list.component';

describe('DomicilioListComponent', () => {
  let component: DomicilioListComponent;
  let fixture: ComponentFixture<DomicilioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomicilioListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomicilioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
