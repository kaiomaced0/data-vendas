import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedoresNewComponent } from './fornecedores-new.component';

describe('FornecedoresNewComponent', () => {
  let component: FornecedoresNewComponent;
  let fixture: ComponentFixture<FornecedoresNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FornecedoresNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FornecedoresNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
