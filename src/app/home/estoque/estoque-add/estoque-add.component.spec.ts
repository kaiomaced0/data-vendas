import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueAddComponent } from './estoque-add.component';

describe('EstoqueAddComponent', () => {
  let component: EstoqueAddComponent;
  let fixture: ComponentFixture<EstoqueAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstoqueAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstoqueAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
