import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentosViewComponent } from './pagamentos-view.component';

describe('PagamentosViewComponent', () => {
  let component: PagamentosViewComponent;
  let fixture: ComponentFixture<PagamentosViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagamentosViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagamentosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
