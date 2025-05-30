import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceTableComponent } from './finance-table.component';

describe('FinanceTableComponent', () => {
  let component: FinanceTableComponent;
  let fixture: ComponentFixture<FinanceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
