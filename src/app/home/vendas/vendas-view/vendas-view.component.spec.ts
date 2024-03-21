import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasViewComponent } from './vendas-view.component';

describe('VendasViewComponent', () => {
  let component: VendasViewComponent;
  let fixture: ComponentFixture<VendasViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendasViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VendasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
