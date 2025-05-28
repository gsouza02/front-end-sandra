import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaborComponent } from './sabor.component';

describe('SaborComponent', () => {
  let component: SaborComponent;
  let fixture: ComponentFixture<SaborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaborComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
