import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProdutoVendaComponent } from './dialog-produto-venda.component';

describe('DialogProdutoVendaComponent', () => {
  let component: DialogProdutoVendaComponent;
  let fixture: ComponentFixture<DialogProdutoVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogProdutoVendaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogProdutoVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
