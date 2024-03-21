import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedoresViewComponent } from './fornecedores-view.component';

describe('FornecedoresViewComponent', () => {
  let component: FornecedoresViewComponent;
  let fixture: ComponentFixture<FornecedoresViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FornecedoresViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FornecedoresViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
