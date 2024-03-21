import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentosNewComponent } from './pagamentos-new.component';

describe('PagamentosNewComponent', () => {
  let component: PagamentosNewComponent;
  let fixture: ComponentFixture<PagamentosNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagamentosNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagamentosNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
