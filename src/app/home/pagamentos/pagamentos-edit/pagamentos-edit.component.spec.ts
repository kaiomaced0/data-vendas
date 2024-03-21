import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentosEditComponent } from './pagamentos-edit.component';

describe('PagamentosEditComponent', () => {
  let component: PagamentosEditComponent;
  let fixture: ComponentFixture<PagamentosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagamentosEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagamentosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
